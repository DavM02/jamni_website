import React from 'react'
import Home from '../../sections/Home/Home'
import Bestsellers from '../../sections/Bestsellers/Bestsellers'
import ProductsDisplay from '../../sections/ProductsDisplay/ProductsDisplay'
import About from '../../sections/About/About'
import Projects from '../../sections/Projects/Projects'
import Subscribe from '../../sections/Subscribe/Subscribe'

export default function Main() {
  return (
    <main>
      <Home />
      <Bestsellers />
      <ProductsDisplay />
      <About />
      <Projects/>
      <Subscribe/>
    </main>
  )
}
