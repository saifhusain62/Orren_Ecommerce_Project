import React from 'react'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanners'
import NewArrivals from '../components/NewArrivals'
import MarqueeBanner from '../components/MarqueeBanner'

const Home = ({ category }) => {
  return (
    <main>
      <Hero category={category} />
      <PromoBanners />
      <NewArrivals />
      <MarqueeBanner />
    </main>
  )
}

export default Home
