import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import React, { useEffect, useState } from 'react'

const Uploadbook = () => {
  const bookcategory = [
    "Fiction",
    "Non-Fiction",
    "Romance",
    "Thriller",
    "Horror",
    "Mistery",
    "Fantasy",
    "Programming",
    "Science",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Children",
    "Business",
    "Religion",
    "Art and Design"
  ]
  const [selectBookcategory, setSelectBookcategory] = useState(bookcategory[0]);
  const handlechangeselectvalue = (event) => {
    console.log(event.target.value);
    setSelectBookcategory(event.target.value);
  }

  const handlebooksubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;
    
    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL
    }
    console.log(bookObj);
    // send to data
    fetch('http://localhost:5000/upload-book', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        },
        body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      //console.log(data);
      alert("Book upload successfully!")
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload the books</h2>

      <form onSubmit={handlebooksubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row*/}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
      </div>
      </div>
      {/* second row*/}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imgURL" value="Img URL" />
        </div>
        <TextInput id="imgURL" name='imgURL' type="text" placeholder="Img URL" required />
      </div>

      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id="inputState" name="categoryName" className="w-full rounded" value={selectBookcategory} onChange={handlechangeselectvalue}>
           {
            bookcategory.map((option) => <option key={option} value={option}>{option}</option>)
           }
        </Select>
      </div>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription" placeholder="Book Description" required rows={4} className="w-full"/>
      </div>
      <div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book Pdf URL" />
        </div>
        <TextInput id="bookPdfURL" name="bookPdfURL" type="text" placeholder="Book Pdf URL" required />
      </div>
      </div>

      <Button type="submit" className="mt-5 text-white bg-green-800">Upload Book</Button>
    </form>
    </div>
  )
}

export default Uploadbook