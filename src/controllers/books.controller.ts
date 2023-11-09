import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from '../services/books.services';

@Controller('books')
export class BooksController<T> {
  constructor(private readonly booksService: BooksService<T>) {}

  @Get()
  getAll(): T[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  get(@Param() params: any): T {
    const { id } = params;
    return this.booksService.get(id);
  }

  @Post()
  create(@Body() doc: T): T {
      this.booksService.add(doc);
      return doc;
  }

  @Post(':id')
  update(@Param() params: any, @Body() doc: T): T {
      const { id } = params;
      return this.booksService.update(id, doc);
  }

  @Delete(':id')
  delete(@Param() params: any): string {
    const { id } = params;
    if (this.booksService.remove(id)) {
      return 'success'
    } else {
      return 'unsuccess'
    };
;
}
}
