import React from 'react'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanners'
import NewArrivals from '../components/NewArrivals'
import MarqueeBanner from '../components/MarqueeBanner'
import Categories from '../components/Categories'
import SaleBanner from '../components/SaleBanner'
import ClearanceSell from '../components/ClearanceSell'
import ItemsOfWeek from '../components/ItemsOfWeek'

const Home = ({ category }) => {
  return (
    <main>
      <Hero category={category} />
      <PromoBanners />
      <NewArrivals />
      <MarqueeBanner />
      <Categories />
      <SaleBanner />
      <ClearanceSell />
      <ItemsOfWeek />
    </main>
  )
}

export default Home
