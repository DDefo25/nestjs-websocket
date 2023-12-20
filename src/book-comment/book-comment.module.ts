import { Module } from '@nestjs/common';
import { BookCommentService } from './book-comment.service';
import { BookComment, BookCommentSchema } from './schemas/book-comment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BookCommentGateway } from './book-comment.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([
        {name: BookComment.name, schema: BookCommentSchema}
    ])
  ],
  providers: [BookCommentService, BookCommentGateway],
  exports: [BookCommentService]
})
export class BookCommentModule {}
