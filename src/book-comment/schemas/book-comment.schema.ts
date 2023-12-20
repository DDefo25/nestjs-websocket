import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Book } from 'src/book/schemas/book.schema';


export type BookCommentDocument = BookComment & Document;

@Schema()
export class BookComment {
    @Prop({
      required: true,
      type: MongooseSchema.Types.ObjectId,
      ref: 'Book'
    })
    bookId: Book;

    @Prop({required: true})
    comment: string;
}

const BookCommentSchema = SchemaFactory.createForClass(BookComment);

// UserSchema.pre('save', async function (next) {
//     try {
//         this.password = await getHash(this.password)
//         return next();
//       } catch (error) {
//         return next(error);
//       } 
// })


// UserSchema.methods = {
//     async validatePass(pass: string): Promise<boolean> {
//       return await compareHash(pass, this.password)
//     }
//   }

export { BookCommentSchema }