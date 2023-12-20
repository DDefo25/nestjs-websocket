import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { BookComment, BookCommentDocument } from './schemas/book-comment.schema';
import { CommonDbService } from 'src/commonDb/commonDb.service';
import { CreateBookCommentDto } from './interfaces/create-book-comment.dto';
import { UpdateBookCommentDto } from './interfaces/update-book-comment.dto';

@Injectable()
export class BookCommentService extends CommonDbService<BookCommentDocument, CreateBookCommentDto, UpdateBookCommentDto> {
    constructor(
        @InjectModel(BookComment.name) model: Model<BookCommentDocument>
        
    ) {
        super(model)
    }

    async findAllBookComment(bookId: ObjectId): Promise<BookComment[]> {
        return await this.getAllByParam<ObjectId>('bookId', bookId)
      }
}
