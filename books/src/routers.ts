import { Router } from 'express';
import BooksController from './controllers/booksController';

const booksController = new BooksController();

const routers = Router();

routers.use('/books', booksController.getAll);

export default routers;