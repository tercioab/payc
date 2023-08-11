import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class TransferDto {
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(11)
  destinationCpf: string;
  @IsNotEmpty()
  amount: number;
}
