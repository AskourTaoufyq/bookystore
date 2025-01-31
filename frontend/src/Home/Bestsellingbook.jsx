import React, { useEffect, useState } from 'react'
import Bookcard from '../components/Bookcard';


const Bestsellingbook = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/all-books').then(res => res.json()).then(data => setBooks(data.slice(0, 6)))
    }, [])
  return (
    <div>
      <Bookcard books={books} headLine="Best selling Books"/>
    </div>
  )
}

export default Bestsellingbook