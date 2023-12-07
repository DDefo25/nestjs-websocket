import { Controller } from '@nestjs/common';
import { CreateAuthorDto } from 'src/author/interfaces/create-author.dto';
import { UpdateAuthorDto } from 'src/author/interfaces/update-author.interfaces';
import { AuthorDocument } from 'src/author/schemas/author.schema';
import { AuthorService } from './author.service';
import { CommonDbController } from 'src/commonDb/commonDb.controller';

@Controller('author')
export class AuthorController extends CommonDbController<AuthorDocument, CreateAuthorDto, UpdateAuthorDto> {
    constructor( authorService: AuthorService) {
        super( authorService )
    }
}