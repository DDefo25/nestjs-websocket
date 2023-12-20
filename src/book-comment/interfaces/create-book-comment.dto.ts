import { IsDefined, IsString} from "class-validator";

export class CreateBookCommentDto  {
    @IsString()
    @IsDefined()
    bookId: string;

    @IsString()
    @IsDefined()
    comment: string;
}