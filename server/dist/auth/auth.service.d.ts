import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ModuleRef } from '@nestjs/core';
export declare class AuthService {
    private readonly moduleRef;
    private readonly jwtService;
    constructor(moduleRef: ModuleRef, jwtService: JwtService);
    login(user: User): Promise<{
        token: string;
        user: {
            id?: number;
            name: string;
            subName: string;
            cpf: string;
            email: string;
        };
    }>;
    validateUser(email: string, password: string): Promise<{
        password: any;
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
        refreshToken: string;
    }>;
}
