import { CreateHistoricDto } from './dto/create-historic.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class HistoricService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createHistoricDto: CreateHistoricDto): Promise<{
        id: number;
        transferTo: string;
        receivedFrom: string;
        amount: number;
        date: Date;
        userId: number;
    }>;
    findAll(userId: number): Promise<{
        id: number;
        transferTo: string;
        receivedFrom: string;
        amount: number;
        date: Date;
        userId: number;
    }[]>;
}
