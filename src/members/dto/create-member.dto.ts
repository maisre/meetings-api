import { IsString, IsEmail, IsOptional, IsBoolean } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;

  @IsString()
  readonly unit: string;

  @IsOptional()
  @IsString()
  readonly calling?: string;

  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;
}
