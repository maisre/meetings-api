import {
  IsDateString,
  IsString,
  IsArray,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { WardBusinessDto } from './ward-business.dto';

export class UpdateMeetingDto {
  @IsOptional()
  @IsDateString()
  date?: Date;

  @IsOptional()
  @IsString()
  invocation?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  speakers?: string[];

  @IsOptional()
  @IsString()
  benediction?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WardBusinessDto)
  wardBusiness?: WardBusinessDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  stakeBusiness?: string[];
}
