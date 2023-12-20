import { Body, Delete, Get, Param, Post, Put, UseGuards, UsePipes } from '@nestjs/common';
import { CommonDbService } from './commonDb.service';
import { CommonDbIdValidationPipe } from './commonDb.id.validation.pipe';
import { HttpValidationPipe } from '../validation/http.validation.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body(new HttpValidationPipe()) data: TCreateDto): Promise<TDocument> {
        return this.commonService.add(data);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id', CommonDbIdValidationPipe) id: string, @Body(new HttpValidationPipe()) data: TUpdateDto): Promise<TDocument> {
        return this.commonService.update(id, data);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id', CommonDbIdValidationPipe) id: string): Promise<TDocument> {
        return this.commonService.remove(id)
    }
}



