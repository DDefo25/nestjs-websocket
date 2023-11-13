import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorService, BookService, DbService } from './db.service';
import { BookDocument } from './schemas/book.schema';
import { IParamId } from './interfaces/param-id';
import { ICreateBookDto } from './interfaces/book/create-book.interfaces';
import { IUpdateBookDto } from './interfaces/book/update-book.interfaces';
import { AuthorDocument } from './schemas/author.schema';
import { ICreateAuthorDto } from './interfaces/author/create-author.interfaces';
import { IUpdateAuthorDto } from './interfaces/author/update-author.interfaces';

export class DbController<TDocument, TCreateDto, TUpdateDto> {
    constructor(
        private readonly dbService: DbService<TDocument, TCreateDto, TUpdateDto>
    ) {}

    @Get()
    getAll(): Promise<TDocument[]> {
        return this.dbService.getAll();
    }

    @Get(':id')
    get(@Param() { id }: IParamId): Promise<TDocument> {
        return this.dbService.get(id);
    }

    @Post()
    create(@Body() data: TCreateDto): Promise<TDocument> {
        console.log(data)
        return this.dbService.add(data);
    }

    @Put(':id')
    update(@Param() { id }: IParamId, @Body() data: TUpdateDto): Promise<TDocument> {
        return this.dbService.update(id, data);
    }

    @Delete(':id')
    delete(@Param() { id }: IParamId): Promise<TDocument> {
        return this.dbService.remove(id)
    }
}

@Controller('book')
export class BookController extends DbController<BookDocument, ICreateBookDto, IUpdateBookDto> {
    constructor( bookService: BookService) {
        super( bookService )
    }
}

@Controller('author')
export class AuthorController extends DbController<AuthorDocument, ICreateAuthorDto, IUpdateAuthorDto> {
    constructor( authorService: AuthorService) {
        super( authorService )
    }
}