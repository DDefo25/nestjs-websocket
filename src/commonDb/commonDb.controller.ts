import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IParamId } from './interfaces/param-id';
import { CommonDbService } from './commonDb.service';

export class CommonDbController<TDocument, TCreateDto, TUpdateDto> {
    constructor(
        private readonly commonService: CommonDbService<TDocument, TCreateDto, TUpdateDto>
    ) {}

    @Get()
    getAll(): Promise<TDocument[]> {
        return this.commonService.getAll();
    }

    @Get(':id')
    get(@Param() { id }: IParamId): Promise<TDocument> {
        return this.commonService.get(id);
    }

    @Post()
    create(@Body() data: TCreateDto): Promise<TDocument> {
        return this.commonService.add(data);
    }

    @Put(':id')
    update(@Param() { id }: IParamId, @Body() data: TUpdateDto): Promise<TDocument> {
        return this.commonService.update(id, data);
    }

    @Delete(':id')
    delete(@Param() { id }: IParamId): Promise<TDocument> {
        return this.commonService.remove(id)
    }
}



