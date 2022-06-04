import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  link: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  guid: string;

  @IsString()
  @IsOptional()
  creator: string;
}
