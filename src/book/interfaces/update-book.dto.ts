import {ArrayNotEmpty, IsArray, IsOptional, IsString} from "class-validator";

export class UpdateBookDto  {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsArray()
    @IsOptional()
    @ArrayNotEmpty()
    @IsString({each: true})
    authors?: string[];

    @IsString()
    @IsOptional()
    favorite?: string;

    @IsString()
    @IsOptional()
    fileCover?: string;

    @IsString()
    @IsOptional()
    fileName?: string;

    @IsString()
    @IsOptional()
    fileBook?: string;
}