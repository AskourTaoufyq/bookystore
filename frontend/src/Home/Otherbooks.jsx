import React, { useEffect, useState } from 'react'
import Bookcard from '../components/Bookcard';

const Otherbooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/all-books').then(res => res.json()).then(data => setBooks(data.slice(0, 6)))
    }, [])
  return (
    <div>
      <Bookcard books={books} headLine="Other Books"/>
    </div>
  )
}

export default Otherbooks