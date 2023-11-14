import { Injectable } from '@nestjs/common';
import { CommonDbService } from 'src/commonDb/commonDb.service';
import { Book, BookDocument } from './schemas/book.schema';
import { ICreateBookDto } from './interfaces/create-book.interfaces';
import { IUpdateBookDto } from './interfaces/update-book.interfaces';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class BookService extends CommonDbService<BookDocument, ICreateBookDto, IUpdateBookDto> {
    constructor(
        @InjectModel(Book.name) model: Model<BookDocument>,
        @InjectConnection() connection: Connection,
    ) {
        super(model, connection)
    }
}