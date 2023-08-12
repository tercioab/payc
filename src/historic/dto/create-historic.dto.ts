import { IsNotEmpty } from 'class-validator';

export class CreateHistoricDto {
  transferTo: string;
  receivedFrom: string;
  @IsNotEmpty()
  amount: number;
  date: Date;
  @IsNotEmpty()
  userId: number;
}
