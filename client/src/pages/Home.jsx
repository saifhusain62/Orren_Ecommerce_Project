import React from 'react'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanners'
import NewArrivals from '../components/NewArrivals'

const Home = ({ category }) => {
  return (
    <main>
      <Hero category={category} />
      <PromoBanners />
      <NewArrivals />
    </main>
  )
}

export default Home
