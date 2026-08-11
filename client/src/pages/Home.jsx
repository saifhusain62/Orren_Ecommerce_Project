import React from 'react'
import Hero from '../components/Hero'

const Home = ({ category }) => {
  return (
    <main>
      <Hero category={category} />
    </main>
  )
}

export default Home
