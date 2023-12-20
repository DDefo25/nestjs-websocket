import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        global: true,
        secret: process.env.JWT_SECRET_KEY,
        signOptions: { expiresIn: '60s' },
      }),
    }),
  ],
  providers: [ AuthService, JwtStrategy],
  controllers: [ AuthController ],
  exports: [AuthService],
})
export class AuthModule {}
