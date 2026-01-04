import { IsNumber, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly unit: number;
}
