import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {isValidObjectId } from 'mongoose'

@Injectable()
export class CommonDbIdValidationPipe  implements PipeTransform {
    public transform(id: any, metadata: ArgumentMetadata) {
        if (!isValidObjectId(id)) {
            throw new BadRequestException('Incorrect id!');
        }

        return id
    }
}