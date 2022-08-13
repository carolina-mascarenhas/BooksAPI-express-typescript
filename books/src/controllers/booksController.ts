import { Request, Response } from 'express';
import BooksService from '../services/booksService';

export default class BooksController {
  booksService: BooksService;

  constructor() {
    this.booksService = new BooksService();
  }

  getAll = async (_req: Request, res: Response) => {
    const books = await this.booksService.getAll();
    res.status(200).json(books);
  };
}