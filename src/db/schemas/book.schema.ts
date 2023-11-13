import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Author } from './author.schema';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop({required: true})
    title: string;

    @Prop()
    description: string;

    @Prop({
        required: true,
        type: MongooseSchema.Types.ObjectId,
        ref: 'Author'
    })
    authors: Author[];

    @Prop()
    favorite?: string;

    @Prop({required: true})
    fileCover: string;

    @Prop({required: true})
    fileName: string;

    @Prop({required: true})
    fileBook: string;

    @Prop({
        required: true,
        default: 0
    })
    views: number
}

const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.methods = {
    async incViews(): Promise<void> {
            this.$inc('views');
            await this.save();
    }
}

export { BookSchema }