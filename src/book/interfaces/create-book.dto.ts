import {ArrayNotEmpty, IsArray, IsDefined, IsOptional, IsString} from "class-validator";

export class CreateBookDto  {
    @IsString()
    @IsDefined()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({each: true})
    authors: string[];

    @IsString()
    @IsOptional()
    favorite?: string;

    @IsString()
    @IsDefined()
    fileCover: string;

    @IsString()
    @IsDefined()
    fileName: string;

    @IsString()
    @IsDefined()
    fileBook: string;
}