import { AuthService } from './auth.service';
import { AuthRequest } from './models/AuthRequest';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: AuthRequest): {
        access_token: string;
    };
}
