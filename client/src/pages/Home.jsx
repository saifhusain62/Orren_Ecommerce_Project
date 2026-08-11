import React from 'react'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanners'

const Home = ({ category }) => {
  return (
    <main>
      <Hero category={category} />
      <PromoBanners />
    </main>
  )
}

export default Home
