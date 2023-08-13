import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<User>;
    update(updateUserDto: UpdateUserDto, id: number): Promise<{
        password: any;
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
    }>;
    delete(id: number): Promise<void>;
    findByEmail(email: string): Promise<{
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
        password: string;
    }>;
    findByCpf(cpf: string): Promise<{
        password: any;
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
    }>;
    checkIfEmailOrCPFExists(email: string, cpf: string): Promise<void>;
}
