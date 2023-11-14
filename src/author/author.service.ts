import { Injectable } from '@nestjs/common';
import { CommonDbService } from 'src/commonDb/commonDb.service';
import { Author, AuthorDocument } from './schemas/author.schema';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { ICreateAuthorDto } from './interfaces/create-author.interfaces';
import { IUpdateAuthorDto } from './interfaces/update-author.interfaces';

@Injectable()
export class AuthorService extends CommonDbService<AuthorDocument, ICreateAuthorDto, IUpdateAuthorDto> {
    constructor(
        @InjectModel(Author.name) model: Model<AuthorDocument>,
        @InjectConnection() connection: Connection,
    ) {
        super(model, connection)
    }
}