import { Model } from 'mongoose';

export class CommonDbService<TDocument, TCreateDto, TUpdateDto> {
    constructor(
        private commonDbModel: Model<TDocument>
    ) {}

    add(data: TCreateDto): Promise<TDocument> {
        return this.commonDbModel.create(data)
      }
    
    get(id: string): Promise<TDocument> {
        return this.commonDbModel.findById(id)
    }

    getByParam(param: string, value: string): Promise<TDocument> {
        const filter = {}
        filter[param] = value
        return this.commonDbModel.findOne(filter).exec();
    }
    
    getAll(): Promise<TDocument[]> {
        return this.commonDbModel.find().exec()
    }
    
    update(id: string, data: TUpdateDto ): Promise<TDocument> {
        return this.commonDbModel.findByIdAndUpdate(
            id,
            data
        ).exec()
    }
    
    remove(id: string): Promise<TDocument>  {
        return this.commonDbModel.findByIdAndDelete(id).exec()
    }
}



