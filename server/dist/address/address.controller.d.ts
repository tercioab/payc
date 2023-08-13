import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { User } from '@prisma/client';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto, user: User): import(".prisma/client").Prisma.Prisma__AddressClient<{
        id: number;
        cep: number;
        city: string;
        state: string;
        district: string;
        street: string;
        number: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findOne(user: User): import(".prisma/client").Prisma.Prisma__AddressClient<{
        id: number;
        cep: number;
        city: string;
        state: string;
        district: string;
        street: string;
        number: number;
        userId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(user: User, updateAddressDto: UpdateAddressDto): Promise<{
        id: number;
        cep: number;
        city: string;
        state: string;
        district: string;
        street: string;
        number: number;
        userId: number;
    }>;
}
