import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { BookComment } from './schemas/book-comment.schema';
import { BookCommentService } from './book-comment.service';
import { UseFilters } from '@nestjs/common';
import { WsExceptionFilter } from 'src/ws.exception/ws.exception.filter';
import { WsObjectIdValidationPipe } from 'src/validation/ws.objectId.validation.pipe';
import { WsValidationPipe } from 'src/validation/ws.validation.pipe';
import { CreateBookCommentDto } from './interfaces/create-book-comment.dto';

@UseFilters(new WsExceptionFilter)
@WebSocketGateway({cors: true})
export class BookCommentGateway {
  constructor (
    private bookCommentService: BookCommentService
  ) {}

  @WebSocketServer()
  server: Server;
  
  @SubscribeMessage('getAllComments')
  async onGetAllComments(
    @MessageBody('bookId', WsObjectIdValidationPipe) bookId,
    ): Promise<WsResponse<BookComment[]>> {
      const comments = await this.bookCommentService.findAllBookComment(bookId)
      return { event: 'getAllComments', data: comments }
    }
  
  @SubscribeMessage('addComment')
  async onAddComment(
    @MessageBody(new WsValidationPipe()) data: CreateBookCommentDto,
    ): Promise<WsResponse<BookComment>> {
      const comment = await this.bookCommentService.add(data)
      return { event: 'addComment', data: comment }
    }
}
