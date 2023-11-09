import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'


@Injectable()
export class BooksService<T> {
  private _repository: Map<string, T>;
  constructor() {
    this._repository = new Map();
  }

  add(doc: T): void {
    const id = uuidv4()
    doc['id'] = id;
    this._repository.set( doc['id'], doc ); 
  }

  get(id: string): T {
    return this._repository.get(id)
  }

  getAll(): T[] {
    return [...this._repository.values()]
  }

  update(id: string, doc: T ): T {
    const newDoc = this.get(id)
    Object.keys(doc).map(key => {
        newDoc[key] = doc[key];
    })
    this._repository.set(id, newDoc)
    return newDoc
  }

  remove(id: string): boolean  {
    return this._repository.delete(id)
  }
}
