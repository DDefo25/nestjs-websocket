import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from '../book/schemas/book.schema';
import { Author, AuthorSchema } from '../author/schemas/author.schema';
import { BookController } from 'src/book/book.controller';
import { AuthorController } from 'src/author/author.controller';
import { BookService } from 'src/book/book.service';
import { AuthorService } from 'src/author/author.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Book.name, schema: BookSchema},
            {name: Author.name, schema: AuthorSchema},
        ])
    ],
    controllers: [
        BookController,
        AuthorController
    ],
    providers: [
        BookService,
        AuthorService
    ],
    exports: [
        BookService,
        AuthorService
    ]

})
export class CommonDbModule {}
