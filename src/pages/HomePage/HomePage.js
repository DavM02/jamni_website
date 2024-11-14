import React, { memo } from 'react'
import Bestsellers from '../../components/sections/Bestsellers/Bestsellers'
import Home from '../../components/sections/Home/Home'
import Subscribe from '../../components/sections/Subscribe/Subscribe'
import About from '../../components/sections/About/About'
import ProductsDisplay from '../../components/sections/ProductsDisplay/ProductsDisplay'
import Projects from '../../components/sections/Projects/Projects'
import PageTransition from '../../components/pageTransition/PageTransition'
 function HomePage() {
  return (
    <div id='home-page' >
      <Home />
      <Bestsellers />
      <ProductsDisplay />
      <About />
      <Projects />
      <Subscribe />
    </div>
  )
}
export default memo(PageTransition(HomePage))