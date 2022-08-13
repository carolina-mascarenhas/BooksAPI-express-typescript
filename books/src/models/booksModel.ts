import { Pool } from 'mysql2/promise';
import IBooks from '../interfaces/booksInterface';

export default class BooksModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IBooks[]> {
    const [books] = await this.connection.execute('SELECT * FROM books');
    return books as IBooks[];
  }
}