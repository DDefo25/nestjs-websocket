import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { BookService } from '../src/book/book.service';
import { BookModule } from '../src/book/book.module';
import { getModelToken } from '@nestjs/mongoose';
import { Book } from '../src/book/schemas/book.schema';


describe('BookModule (e2e)', () => {
  let app: INestApplication;

  let bookService = { 
    add: jest.fn((data: object) => { 
      return {}
    }),
    get: jest.fn((id: string) => { 
      return {}
    }),
    getAll: jest.fn(() => []),
    update: jest.fn((id: string, data: object) => { 
      return {}
    }),
    remove: jest.fn((id: string) => { 
      return {}
    })
  }

    beforeAll(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        imports: [
          BookModule,
        ],
      })
        .overrideProvider(getModelToken(Book.name))
        .useValue(jest.fn())
        .overrideProvider(BookService)
        .useValue(bookService)
        .compile();
  
      app = moduleRef.createNestApplication();
      await app.init();
    });

    it('GET /book', () => {
      return request(app.getHttpServer())
        .get('/book')
        .expect(200)
        .expect(bookService.getAll());
    });

    it('GET /book/:id', () => {
      return request(app.getHttpServer())
        .get('/book/6571984c2f8d4bf7b46b0ea4')
        .expect(200)
        .expect(bookService.get('6571984c2f8d4bf7b46b0ea4'));
    });

    it('POST /book', () => {
      return request(app.getHttpServer())
        .post('/book')
        .send({ title: 'string'})
        .expect(201)
        .expect(bookService.add({ title: 'string'}));
    });

    it('PUT /book/:id', () => {
      return request(app.getHttpServer())
        .put('/book/6571984c2f8d4bf7b46b0ea4')
        .send({ title: 'string'})
        .expect(200)
        .expect(bookService.update('6571984c2f8d4bf7b46b0ea4', { title: 'string'}));
    });

    it('DELETE /book/:id', () => {
      return request(app.getHttpServer())
        .delete('/book/6571984c2f8d4bf7b46b0ea4')
        .expect(200)
        .expect(bookService.remove('6571984c2f8d4bf7b46b0ea4'));
    });

  afterAll(async () => {
    await app.close();
  })
});
