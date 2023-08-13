import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class AddressService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createAddressDto: CreateAddressDto): import(".prisma/client").Prisma.Prisma__AddressClient<{
        id: number;
        cep: number;
        city: string;
        state: string;
        district: string;
        street: string;
        number: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AddressClient<{
        id: number;
        cep: number;
        city: string;
        state: string;
        district: string;
        street: string;
        number: number;
        userId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(userId: number, updateAddressDto: UpdateAddressDto): Promise<{
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
