import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
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

@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
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
    const userFinded = await this.accountService.findOne(user.id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userFinded;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Post('transfer')
  async performTransfer(
    @CurrentUser() sender: User,
    @Body() transferData: TransferDto,
  ) {
    const senderUserAccount = await this.findOne(sender);

    const destinationUser = await this.userService.findByCpf(
      transferData.destinationCpf,
    );
    const destinationUserAccount = await this.findOne(destinationUser);

    if (senderUserAccount.balance < transferData.amount) {
      throw new HttpException(
        'Insufficient balance for transfer.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newSenderBalance = senderUserAccount.balance - transferData.amount;
    const newDestinationBalance =
      destinationUserAccount.balance + transferData.amount;

    await Promise.all([
      this.accountService.updateBalance(sender.id, newSenderBalance),
      this.accountService.updateBalance(
        destinationUser.id,
        newDestinationBalance,
      ),
    ]);

    return {
      transferTo: destinationUser.name,
      amount: transferData.amount,
      date: new Date(),
    };
  }
}
