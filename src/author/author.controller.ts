import { Controller } from '@nestjs/common';
import { ICreateAuthorDto } from 'src/author/interfaces/create-author.interfaces';
import { IUpdateAuthorDto } from 'src/author/interfaces/update-author.interfaces';
import { AuthorDocument } from 'src/author/schemas/author.schema';
import { AuthorService } from './author.service';
import { CommonDbController } from 'src/commonDb/commonDb.controller';

@Controller('author')
export class AuthorController extends CommonDbController<AuthorDocument, ICreateAuthorDto, IUpdateAuthorDto> {
    constructor( authorService: AuthorService) {
        super( authorService )
    }
}