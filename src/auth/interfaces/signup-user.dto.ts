import { IsDefined, IsString} from "class-validator";

export class SignupUserDto  {
    @IsString()
    @IsDefined()
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