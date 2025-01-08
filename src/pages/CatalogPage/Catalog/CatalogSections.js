import React from 'react'
import Filter from '../../../components/sections/Filter/Filter'
import MoreProducts from '../../../components/sections/MoreProducts/MoreProducts'
import CatalogCollections from '../../../components/sections/CatalogCollections/CatalogCollections'
import Intro from '../../../components/sections/Intro/Intro'
import catalog from '../../../data/catalog'
import NoFound from '../../NoFound/NoFound'
export default function CatalogSections({path}) {


    const pathExists = ['decor', "sofas", "poufs"].includes(path)

    
    return (
       
            pathExists ? <>
                <Intro
                    id={catalog[path].id}
                    headline={catalog[path].headline}
                    bg={catalog[path].bg}
                    posY={catalog[path].posY}
                    description={catalog[path].description}
                />
                <CatalogCollections path={path} />
                <Filter path={path} />
                <MoreProducts />
            </> : <NoFound/>
    

    )
}
