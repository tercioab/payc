import { AuthService } from './auth.service';
import { AuthRequest } from './models/AuthRequest';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: AuthRequest): {
        token: string;
        user: {
            id?: number;
            name: string;
            subName: string;
            cpf: string;
            email: string;
        };
    };
}
