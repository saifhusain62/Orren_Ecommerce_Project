import React from 'react'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanners'
import NewArrivals from '../components/NewArrivals'
import MarqueeBanner from '../components/MarqueeBanner'
import Categories from '../components/Categories'

const Home = ({ category }) => {
  return (
    <main>
      <Hero category={category} />
      <PromoBanners />
      <NewArrivals />
      <MarqueeBanner />
      <Categories />
    </main>
  )
}

export default Home
