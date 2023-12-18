import { Injectable } from '@nestjs/common';
import { CommonDbService } from '../commonDb/commonDb.service';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './interfaces/create-book.dto';
import { UpdateBookDto } from './interfaces/update-book.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class BookService extends CommonDbService<BookDocument, CreateBookDto, UpdateBookDto> {
    constructor(
        @InjectModel(Book.name) model: Model<BookDocument>
    ) {
        super(model)
    }
}