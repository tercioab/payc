import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAddressDto: CreateAddressDto) {
    return this.prisma.address.create({ data: { ...createAddressDto } });
  }

  findOne(id: number) {
    return this.prisma.address.findUnique({ where: { userId: id } });
  }

  async update(userId: number, updateAddressDto: UpdateAddressDto) {
    const updateAddress = await this.prisma.address.update({
      where: { userId },
      data: { ...updateAddressDto },
    });

    return updateAddress;
  }
}
