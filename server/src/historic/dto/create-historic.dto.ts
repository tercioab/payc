import { IsNotEmpty } from 'class-validator';

export class CreateHistoricDto {
  transferTo?: string;
  receivedFrom?: string;
  @IsNotEmpty()
  amount: number;
  @IsNotEmpty()
  userId: number;
}
