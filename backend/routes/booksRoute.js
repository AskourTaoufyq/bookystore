import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Save a new Book
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.rating ||
      !request.body.price
    ) {return response.status(400).send({
      message: 'Please send all requiresd fields: title, rating, price',
    });
  }
  const newbook = {
    title: request.body.title,
    author: request.body.rating,
    price: request.body.price,
  };
  const book = await Book.create(newbook);
  return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message})
  }
});

// route for get all books from database
router.get('/', async (request, response) => {
  try { 
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// route for get all books id form database
router.get('/:id', async (request, response) => {
  try { 
    const id = request.params.id;

    const books = await Book.findByid(id);
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// route for update book from database
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.rating ||
      !request.body.price 
    ) {
      return response.status(400).send({ message: "Please fill all fields: title, rating, price"});
    }

    const { id } = request.params;
    
      const result = await Book.findByIdAndUpdate(id, request.body);
      if (!result) {
        return response.status(404).json({ message: "Book not found"});
      }
        return response.status(200).send({ message: "book updated successful"});
        } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: error.message });
        }
});

// route for delete book from database
router.delete('/:id', async (request, response) => {
  try {
    
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Book not found"});
      }
      return response.status(200).send({ message: "book deleted successful"});
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
        }
  });

export default router;
