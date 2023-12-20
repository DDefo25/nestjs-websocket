import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import {isValidObjectId } from 'mongoose'

@Injectable()
export class WsObjectIdValidationPipe  implements PipeTransform {
    public transform(id: any, metadata: ArgumentMetadata) {
        if (!isValidObjectId(id)) {
            throw new WsException('Incorrect id!');
        }

        return id
    }
}