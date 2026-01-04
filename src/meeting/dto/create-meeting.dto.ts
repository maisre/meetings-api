import {
  IsDateString,
  IsString,
  IsArray,
  ValidateNested,
  IsMongoId,
} from 'class-validator';
import { Type } from 'class-transformer';
import { WardBusinessDto } from './ward-business.dto';

export class CreateMeetingDto {
  @IsDateString()
  date: Date;

  @IsMongoId()
  invocation: string;

  @IsArray()
  @IsMongoId({ each: true })
  speakers: string[];

  @IsMongoId()
  benediction: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WardBusinessDto)
  wardBusiness: WardBusinessDto[];

  @IsArray()
  @IsString({ each: true })
  stakeBusiness: string[];
}
