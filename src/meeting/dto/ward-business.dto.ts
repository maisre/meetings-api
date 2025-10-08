import { IsString, IsEnum } from 'class-validator';
import { WardBusinessType } from '../interfaces/meeting.interface';

export class WardBusinessDto {
  @IsEnum(WardBusinessType)
  type: WardBusinessType;

  @IsString()
  text: string;
}
