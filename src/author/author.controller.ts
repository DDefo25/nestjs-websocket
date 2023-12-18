import { Controller } from '@nestjs/common';
import { CreateAuthorDto } from './interfaces/create-author.dto';
import { UpdateAuthorDto } from './interfaces/update-author.interfaces';
import { AuthorDocument } from './schemas/author.schema';
import { AuthorService } from './author.service';
import { CommonDbController } from '../commonDb/commonDb.controller';

@Controller('author')
export class AuthorController extends CommonDbController<AuthorDocument, CreateAuthorDto, UpdateAuthorDto> {
    constructor( authorService: AuthorService) {
        super( authorService )
    }
}