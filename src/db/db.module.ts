import { Module } from '@nestjs/common';
import { AuthorController, BookController } from './book.controller';
import { AuthorService, BookService } from './db.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { Author, AuthorSchema } from './schemas/author.schema';

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
export class DbModule {}
