import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost) {

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const data = exception.message;
        const status = exception.getStatus();

        response
            .status(status)
            .json({
                timestamp: new Date().toISOString(),
                status: 'fail',
                data,
                code: status,
            });
    }
}