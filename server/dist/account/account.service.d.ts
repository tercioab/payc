import { CreateAccountDto } from './dto/create-account.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class AccountService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createAccountDto: CreateAccountDto): Promise<{
        id: number;
        balance: number;
        acount: number;
        agency: string;
        userId: number;
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AccountClient<{
        id: number;
        balance: number;
        acount: number;
        agency: string;
        userId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateBalance(userId: number, newBalance: number): Promise<{
        id: number;
        balance: number;
        acount: number;
        agency: string;
        userId: number;
    }>;
}
