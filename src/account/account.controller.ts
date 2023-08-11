import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from '@prisma/client';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

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
  findOne(@CurrentUser() user: User) {
    return this.accountService.findOne(user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Patch(':cpfUser')
  async transaction(
    @Param('cpfUser') transaction: string,
    @CurrentUser() user: User,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    // buscar user pelo cpf
    // puxar id do user
    // verificar o balance do usuario atual
    // fazer a transação para o outro user
    // let { balance } = await this.findOne(user);
  }
}
