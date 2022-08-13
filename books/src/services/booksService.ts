import BooksModel from '../models/booksModel';
import connection from '../models/connection';
import IBooks from '../interfaces/booksInterface';

export default class BooksService {
  booksModel: BooksModel;

  constructor() {
    this.booksModel = new BooksModel(connection);
  }

  getAll(): Promise<IBooks[]> {
    return this.booksModel.getAll();
  }
}