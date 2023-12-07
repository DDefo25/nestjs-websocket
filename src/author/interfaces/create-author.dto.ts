import {IsDefined, IsString} from "class-validator";

export class CreateAuthorDto {
    @IsString()
    @IsDefined()
    name: string;

    @IsString()
    @IsDefined() 
    surname: string
}