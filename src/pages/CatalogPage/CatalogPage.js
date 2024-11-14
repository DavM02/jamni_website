import React, { memo } from 'react'
import PageTransition from '../../components/pageTransition/PageTransition'
import Projects from '../../components/sections/Projects/Projects'

 function CatalogPage() {
 
    return (
        <div id='catalog-page'>
             <Projects/>
        </div>
    )
}

export default memo(PageTransition(CatalogPage))