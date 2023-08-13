import { CreateHistoricDto } from './dto/create-historic.dto';
import { HistoricService } from './historic.service';
import { User } from '@prisma/client';
export declare class HistoricController {
    private readonly historicService;
    constructor(historicService: HistoricService);
    create(createHistoricDto: CreateHistoricDto): Promise<{
        id: number;
        transferTo: string;
        receivedFrom: string;
        amount: number;
        date: Date;
        userId: number;
    }>;
    findAll(user: User): Promise<{
        id: number;
        transferTo: string;
        receivedFrom: string;
        amount: number;
        date: Date;
        userId: number;
    }[]>;
}
