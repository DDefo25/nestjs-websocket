import { IsDefined, IsString} from "class-validator";

export class SigninUserDto  {
    @IsString()
    @IsDefined()
    email: string;

    @IsString()
    @IsDefined()
    password: string;
}