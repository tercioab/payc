import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { ModuleRef } from '@nestjs/core';
export declare class UserService {
    private readonly prisma;
    private readonly moduleRef;
    constructor(prisma: PrismaService, moduleRef: ModuleRef);
    create(createUserDto: CreateUserDto): Promise<User>;
    update(updateUserDto: UpdateUserDto, id: number): Promise<{
        password: any;
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
        refreshToken: string;
    }>;
    updateUserToken(email: string, token: string): Promise<{
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
        password: string;
        refreshToken: string;
    }>;
    refreshToken(data: UpdateUserDto): Promise<{
        token: string;
        user: {
            id?: number;
            name: string;
            subName: string;
            cpf: string;
            email: string;
        };
    }>;
    delete(id: number): Promise<void>;
    findByEmail(email: string): Promise<{
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
        password: string;
        refreshToken: string;
    }>;
    findByCpf(cpf: string): Promise<{
        password: any;
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
        refreshToken: string;
    }>;
    checkIfEmailOrCPFExists(email: string, cpf: string): Promise<void>;
}
