import {
  IsDateString,
  IsString,
  IsArray,
  ValidateNested,
  IsMongoId,
  IsOptional,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { WardBusinessDto } from './ward-business.dto';

const emptyToUndefined = ({ value }) => (value === '' ? undefined : value);

export class CreateMeetingDto {
  @IsDateString()
  date: Date;

  @IsOptional()
  @IsMongoId()
  @Transform(emptyToUndefined)
  invocation?: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  speakers?: string[];

  @IsOptional()
  @IsMongoId()
  @Transform(emptyToUndefined)
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
