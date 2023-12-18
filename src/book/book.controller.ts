import { Controller } from '@nestjs/common';
import { CreateBookDto } from './interfaces/create-book.dto';
import { UpdateBookDto } from './interfaces/update-book.dto';
import { BookDocument } from './schemas/book.schema';
import { BookService } from './book.service';
import { CommonDbController } from '../commonDb/commonDb.controller';

@Controller('book')
export class BookController extends CommonDbController<BookDocument, CreateBookDto, UpdateBookDto> {
    constructor( bookService: BookService) {
        super( bookService )
    }
}