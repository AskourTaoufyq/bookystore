import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import { Book } from './models/bookModel.js';

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`app listen to your port: ${PORT}`);
})

// Middleware for parsing request body
app.use(express.json() );

app.use(
   cors({
     origin: 'http://localhost7777',
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type'],
   })
 );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To your Booky store');
});

app.use('/books', booksRoute);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  app.post('/books', async (request, response) => {
    try {
      if (!request.body.title ||
       !request.body.rating ||
       !request.body.price
      ) {
        return response.status(400).send({message:'Please fill all fields'});
      }
      const book = await Book.create(Newbook);
      return response.status(201).send(book);
    
    } catch (error) {
        console.log(error);
        response.status(500).send( {message: error});
      }
    
  });
