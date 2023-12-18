import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book, BookSchema } from './schemas/book.schema';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { mockRepository } from '../../test/mockRepository';

describe('BookController', () => {
  let controller: BookController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [
          BookController
      ],
      providers: [
          BookService,
          {
            provide: getModelToken(Book.name),
            useValue: mockRepository,
          },
      ],
    }).compile();

    controller = await module.resolve<BookController>(BookController)
  });

  describe('getAll', () => {
    it('should return all object', () => {
      const result = [
        {
          _id: "65524113ee6a872790069e66",
          title: "string",
          authors: ["65524101ee6a872790069e64"],
          fileCover: "string",
          fileName: "string",
          fileBook: "string",
          views: 0,
          __v: 0
      },
      {
          _id: "655246b17e067dd05f3c03f7",
          title: "Война и Мир",
          authors: ["65524101ee6a872790069e64"],
          fileCover: "string",
          fileName: "string",
          fileBook: "string",
          views: 0,
          __v: 0
      },
      ];

      expect(controller.getAll()).toEqual(result)
    });
  })

    describe('get', () => {
      it('should return object', () => {
        const id = '65808cd5c9f02dfad6728e6b'

        const result = {
          title: "Война и Мир",
          authors: ["65524101ee6a872790069e64"],
          fileCover: "string",
          fileName: "string",
          fileBook: "string",
          views: 0,
          __v: 0,
          _id: "65808cd5c9f02dfad6728e6b",
      }

  
        expect(controller.get(id)).toEqual(result)
    })
  });

  describe('create', () => {
    it('should return new created object', () => {
      const data = {
        title: "Война и Мир",
        authors: ["65524101ee6a872790069e64"],
        fileCover: "string",
        fileName: "string",
        fileBook: "string",
    }

      const result = {
        title: "Война и Мир",
        authors: ["65524101ee6a872790069e64"],
        fileCover: "string",
        fileName: "string",
        fileBook: "string",
        views: 0,
        __v: 0,
        _id: "65808cd5c9f02dfad6728e6b",
    }
      expect(controller.create( data)).toEqual(result)
    })
  });

  describe('update', () => {
    it('should return new updated object', () => {
      const id = '65808cd5c9f02dfad6728e6b';
      const data = {
        title: "Война и Мир",
        authors: ['Л.Н.Толстой'],
      }

      const result = {
        title: "Война и Мир",
        authors: ['Л.Н.Толстой'],
        fileCover: "string",
        fileName: "string",
        fileBook: "string",
        views: 0,
        __v: 0,
        _id: "65808cd5c9f02dfad6728e6b",
    }
      expect(controller.update(id, data)).toEqual(result)
    })
  });

  
  describe('delete', () => {
    it('should return deleted object', () => {
      const id = '65808cd5c9f02dfad6728e6b';

      const result = {
        title: "Война и Мир",
        authors: ["65524101ee6a872790069e64"],
        fileCover: "string",
        fileName: "string",
        fileBook: "string",
        views: 0,
        __v: 0,
        _id: "65808cd5c9f02dfad6728e6b",
    }
      expect(controller.delete(id)).toEqual(result)
    })
  });
});
