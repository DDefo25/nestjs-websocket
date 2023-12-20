import { IsDefined, IsEmail, IsString} from "class-validator";

export class CreateUserDto  {
    @IsString()
    @IsDefined()
    @IsEmail()
    email: string;

    @IsString()
    @IsDefined()
    password: string;

    @IsString()
    @IsDefined()
    firstName: string;

    @IsString()
    @IsDefined()
    lastName: string;
}