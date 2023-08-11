import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from '@prisma/client';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(
    @Body() createAddressDto: CreateAddressDto,
    @CurrentUser() user: User,
  ) {
    createAddressDto.userId = user.id;
    return this.addressService.create(createAddressDto);
  }

  @Get()
  findOne(@CurrentUser() user: User) {
    return this.addressService.findOne(user.id);
  }

  @Patch()
  async update(
    @CurrentUser() user: User,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressService.update(user.id, updateAddressDto);
  }
}
