import { Injectable } from '@nestjs/common';

import { Model, Connection } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { ICreateBookDto } from './interfaces/book/create-book.interfaces';
import { IUpdateBookDto } from './interfaces/book/update-book.interfaces';
import { Author, AuthorDocument } from './schemas/author.schema';
import { ICreateAuthorDto } from './interfaces/author/create-author.interfaces';
import { IUpdateAuthorDto } from './interfaces/author/update-author.interfaces';

@Injectable()
export class DbService<TDocument, TCreateDto, TUpdateDto> {
    constructor(
        private DbModel: Model<TDocument>,
        private connection: Connection,
    ) {}

    add(data: TCreateDto): Promise<TDocument> {
        return this.DbModel.create(data)
      }
    
    get(id: string): Promise<TDocument> {
        return this.DbModel.findById(id)
    }
    
    getAll(): Promise<TDocument[]> {
        return this.DbModel.find().exec()
    }
    
    update(id: string, data: TUpdateDto ): Promise<TDocument> {
        return this.DbModel.findByIdAndUpdate(
            id,
            data
        ).exec()
    }
    
    remove(id: string): Promise<TDocument>  {
        return this.DbModel.findByIdAndDelete(id).exec()
    }
}

export class BookService extends DbService<BookDocument, ICreateBookDto, IUpdateBookDto> {
    constructor(
        @InjectModel(Book.name) model: Model<BookDocument>,
        @InjectConnection() connection: Connection,
    ) {
        super(model, connection)
    }
}

export class AuthorService extends DbService<AuthorDocument, ICreateAuthorDto, IUpdateAuthorDto> {
    constructor(
        @InjectModel(Author.name) model: Model<AuthorDocument>,
        @InjectConnection() connection: Connection,
    ) {
        super(model, connection)
    }
}

