import { IsOptional, IsString} from "class-validator";

export class UpdateBookCommentDto  {
    @IsString()
    @IsOptional()
    bookId?: string;

    @IsString()
    @IsOptional()
    comment?: string;
}