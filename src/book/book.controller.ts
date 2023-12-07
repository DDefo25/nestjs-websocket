import { Controller, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateBookDto } from 'src/book/interfaces/create-book.dto';
import { UpdateBookDto } from 'src/book/interfaces/update-book.dto';
import { BookDocument } from 'src/book/schemas/book.schema';
import { BookService } from './book.service';
import { CommonDbController } from 'src/commonDb/commonDb.controller';

@Controller('book')
export class BookController extends CommonDbController<BookDocument, CreateBookDto, UpdateBookDto> {
    constructor( bookService: BookService) {
        super( bookService )
    }
}