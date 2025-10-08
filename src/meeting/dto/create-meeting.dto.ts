import {
  IsDateString,
  IsString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { WardBusinessDto } from './ward-business.dto';

export class CreateMeetingDto {
  @IsDateString()
  date: Date;

  @IsString()
  invocation: string;

  @IsArray()
  @IsString({ each: true })
  speakers: string[];

  @IsString()
  benediction: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WardBusinessDto)
  wardBusiness: WardBusinessDto[];

  @IsArray()
  @IsString({ each: true })
  stakeBusiness: string[];
}
