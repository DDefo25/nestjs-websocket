import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { SignupUserDto } from './interfaces/signup-user.dto';
import { SigninUserDto } from './interfaces/signin-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async signup(data: SignupUserDto): Promise<any> {

        const { email, password } = data;
        const userExist = await this.validateUser(email)

        if (userExist) {
            throw new ConflictException('Email already exists!')
        }

        await this.userService.add(data);

        return await this.signin({email, password})

      }
    
    async signin({email, password: pass}: SigninUserDto): Promise<any> {
        const user = await this.validateUser( email )
        const isPasswordValid = await user.validatePass( pass )
        
        if (!isPasswordValid) {
            throw new UnauthorizedException('Incorrect email/password!');
        }

        const payload = { 
            id: user._id, 
            email: user.email, 
            firstName: user.firstName
        };
        
        return {
            access_token: await this.createToken(payload),
        };
    }

    async validateUser(email: string): Promise<any> {
        const user = await this.userService.getByParam('email', email)
        if (!user) {
            return null;
        }
        return user;
      }

    async createToken(payload: any) {
        return await this.jwtService.signAsync(payload);
    }
}
