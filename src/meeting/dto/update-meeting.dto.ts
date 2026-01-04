import {
  IsDateString,
  IsArray,
  IsOptional,
  ValidateNested,
  IsMongoId,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { WardBusinessDto } from './ward-business.dto';

export class UpdateMeetingDto {
  @IsOptional()
  @IsDateString()
  date?: Date;

  @IsOptional()
  @IsMongoId()
  invocation?: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  speakers?: string[];

  @IsOptional()
  @IsMongoId()
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
