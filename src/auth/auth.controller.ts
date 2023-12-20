import { Controller, HttpStatus, HttpCode, UseGuards, Get, Request, ValidationPipe } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupUserDto } from './interfaces/signup-user.dto';
import { SigninUserDto } from './interfaces/signin-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('api/users')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('signup')
    signup(@Body(new ValidationPipe()) data: SignupUserDto): Promise<any> {
        return this.authService.signup(data);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body(new ValidationPipe()) data: SigninUserDto): Promise<any> {
        return this.authService.signin(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
