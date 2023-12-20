import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { compareHash, getHash } from 'src/auth/cryptPass';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required: true})
    email: string;

    @Prop( {required: true})
    password: string;

    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
    try {
        this.password = await getHash(this.password)
        return next();
      } catch (error) {
        return next(error);
      } 
})


UserSchema.methods = {
    async validatePass(pass: string): Promise<boolean> {
      return await compareHash(pass, this.password)
    }
  }

export { UserSchema }