import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { TransferDto } from './dto/transfer.dto';
import { HistoricService } from 'src/historic/historic.service';
export declare class AccountController {
    private readonly accountService;
    private readonly historicService;
    private readonly userService;
    constructor(accountService: AccountService, historicService: HistoricService, userService: UserService);
    create(createAccountDto: CreateAccountDto, user: User): Promise<{
        id: number;
        balance: number;
        acount: number;
        agency: string;
        userId: number;
    }>;
    findOne(user: User): Promise<{
        id: number;
        balance: number;
        acount: number;
        agency: string;
        userId: number;
    }>;
    withdrawn(user: User, amount: UpdateAccountDto): Promise<{
        id: number;
        balance: number;
        acount: number;
        agency: string;
        userId: number;
    }>;
    deposit(user: User, amount: UpdateAccountDto): Promise<{
        id: number;
        balance: number;
        acount: number;
        agency: string;
        userId: number;
    }>;
    performTransfer(sender: User, transferData: TransferDto): Promise<{
        transferTo: string;
        amount: number;
        userId: number;
    }>;
}
