import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: User): {
        access_token: string;
    };
    validateUser(email: string, password: string): Promise<{
        password: any;
        id: number;
        name: string;
        subName: string;
        cpf: string;
        email: string;
    }>;
}
