import { Controller } from '@nestjs/common';
import { ICreateBookDto } from 'src/book/interfaces/create-book.interfaces';
import { IUpdateBookDto } from 'src/book/interfaces/update-book.interfaces';
import { BookDocument } from 'src/book/schemas/book.schema';
import { BookService } from './book.service';
import { CommonDbController } from 'src/commonDb/commonDb.controller';

@Controller('book')
export class BookController extends CommonDbController<BookDocument, ICreateBookDto, IUpdateBookDto> {
    constructor( bookService: BookService) {
        super( bookService )
    }
}