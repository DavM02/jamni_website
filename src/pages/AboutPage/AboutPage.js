import React, { memo } from 'react'
import PageTransition from '../../components/pageTransition/PageTransition'
import Projects from '../../components/sections/Projects/Projects'
import About from '../../components/sections/About/About'
import ProductsDisplay from '../../components/sections/ProductsDisplay/ProductsDisplay'

 function AboutPage() {
 
    return (
        <div id='catalog-page'>
             <ProductsDisplay/>
        </div>
    )
}

export default memo(PageTransition(AboutPage))