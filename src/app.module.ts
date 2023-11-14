import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonDbModule } from './commonDb/commonDb.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    MongooseModule.forRoot(`mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/library`),
    CommonDbModule,
    
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
