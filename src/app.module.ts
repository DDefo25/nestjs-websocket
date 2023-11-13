import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration'
import { MongooseModule } from '@nestjs/mongoose';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      load: [configuration]
    }),
    MongooseModule.forRoot(`mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/library`),
    DbModule,
    
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
