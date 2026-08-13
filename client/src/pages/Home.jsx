import React from 'react'
import Hero from '../components/Hero'
import PromoBanners from '../components/PromoBanners'
import NewArrivals from '../components/NewArrivals'
import MarqueeBanner from '../components/MarqueeBanner'
import Categories from '../components/Categories'
import SaleBanner from '../components/SaleBanner'
import ClearanceSell from '../components/ClearanceSell'
import ItemsOfWeek from '../components/ItemsOfWeek'
import CollectionBanner from '../components/CollectionBanner'
import CustomerReviews from '../components/CustomerReviews'
import Newsletter from '../components/Newsletter'
import TopSelling from '../components/TopSelling'

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
      <CollectionBanner />
      <TopSelling />
      <CustomerReviews />
      <Newsletter />
    </main>
  )
}

export default Home
