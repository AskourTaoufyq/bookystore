import React from 'react'
import Banner from '../components/Banner'
import Bestsellingbook from './Bestsellingbook'
import Favoritebook from './Favoritebook'
import Otherbooks from './Otherbooks'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Bestsellingbook/>
      <Favoritebook/>
      <Otherbooks/>
      <Reviews/>
    </div>
  )
}

export default Home