import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly tokenService;
    constructor(userService: UserService, jwtService: JwtService, tokenService: TokenService);
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
    }>;
}
