import { Body, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { CommonDbService } from './commonDb.service';
import { CommonDbIdValidationPipe } from './commonDb.id.validation.pipe';
import { ValidationPipe } from 'src/validation/validation.pipe';

export class CommonDbController<TDocument, TCreateDto, TUpdateDto> {
    constructor(
        private readonly commonService: CommonDbService<TDocument, TCreateDto, TUpdateDto>
    ) {}

    @Get()
    getAll(): Promise<TDocument[]> {
        return this.commonService.getAll();
    }

    @Get(':id')
    get(@Param('id', CommonDbIdValidationPipe) id: string): Promise<TDocument> {
        return this.commonService.get(id);
    }

    @UsePipes(new ValidationPipe())
    @Post()
    create(@Body() data: TCreateDto): Promise<TDocument> {
        return this.commonService.add(data);
    }

    @UsePipes(new ValidationPipe())
    @Put(':id')
    update(@Param('id', CommonDbIdValidationPipe) id: string, @Body() data: TUpdateDto): Promise<TDocument> {
        return this.commonService.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id', CommonDbIdValidationPipe) id: string): Promise<TDocument> {
        return this.commonService.remove(id)
    }
}



