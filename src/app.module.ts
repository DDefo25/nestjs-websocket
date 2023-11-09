import { Module, Scope } from '@nestjs/common';
import { BooksController } from './controllers/books.controller';
import { BooksService } from './services/books.services';
import { IBook } from './interfaces/book.interfaces';

@Module({
  imports: [],
  controllers: [
    BooksController<IBook>
  ],
  providers: [
    BooksService<IBook>,
  ]
})
export class AppModule {}
