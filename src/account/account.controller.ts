import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { TransferDto } from './dto/transfer.dto';
import { HistoricService } from 'src/historic/historic.service';

@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly historicService: HistoricService,
    private readonly userService: UserService,
  ) {}

  @Post()
  create(
    @Body() createAccountDto: CreateAccountDto,
    @CurrentUser() user: User,
  ) {
    const min = 100000;
    const max = 999999;
    const randomNumberAcount =
      Math.floor(Math.random() * (max - min + 1)) + min;

    createAccountDto.userId = user.id;
    createAccountDto.acount = randomNumberAcount;
    return this.accountService.create(createAccountDto);
  }

  @Get()
  async findOne(@CurrentUser() user: User) {
    const acountFinded = await this.accountService.findOne(user.id);
    if (!acountFinded) {
      throw new HttpException(
        `Acount of user ${user.name} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return acountFinded;
  }

  @Patch('withdrawn')
  async withdrawn(@CurrentUser() user: User, @Body() amount: UpdateAccountDto) {
    const userAccount = await this.findOne(user);
    if (userAccount.balance < amount.amount) {
      throw new HttpException(
        'Insufficient balance for withdrawn.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newBalance = userAccount.balance - amount.amount;
    return this.accountService.updateBalance(user.id, newBalance);
  }

  @Patch('deposit')
  async deposit(@CurrentUser() user: User, @Body() amount: UpdateAccountDto) {
    const userAccount = await this.findOne(user);
    const newBalance = userAccount.balance + amount.amount;
    return this.accountService.updateBalance(user.id, newBalance);
  }

  @Post('transfer')
  async performTransfer(
    @CurrentUser() sender: User,
    @Body() transferData: TransferDto,
  ) {
    const destinationUser = await this.userService.findByCpf(
      transferData.destinationCpf,
    );

    if (!destinationUser) {
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    }

    await Promise.all([
      this.withdrawn(sender, transferData),
      this.deposit(destinationUser, transferData),
    ]);

    const transferTo = {
      transferTo: destinationUser.name,
      amount: transferData.amount,
      userId: sender.id,
    };

    const receivedFrom = {
      receivedFrom: sender.name,
      amount: transferData.amount,
      userId: destinationUser.id,
    };

    await this.historicService.create(transferTo);
    await this.historicService.create(receivedFrom);

    return transferTo;
  }
}
