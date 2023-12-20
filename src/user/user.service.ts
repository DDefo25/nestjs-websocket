import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './interfaces/create-user.dto';
import { UpdateUserDto } from './interfaces/update-user.dto';
import { CommonDbService } from 'src/commonDb/commonDb.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService extends CommonDbService<UserDocument, CreateUserDto, UpdateUserDto> {
    constructor(
        @InjectModel(User.name) model: Model<UserDocument>
    ) {
        super(model)
    }
}