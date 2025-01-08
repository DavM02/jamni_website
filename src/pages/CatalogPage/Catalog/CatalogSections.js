import React from 'react'
import Filter from '../../../components/sections/Filter/Filter'
import MoreProducts from '../../../components/sections/MoreProducts/MoreProducts'
import CatalogCollections from '../../../components/sections/CatalogCollections/CatalogCollections'
import Intro from '../../../components/sections/Intro/Intro'
export default function CatalogSections({path}) {

    
    return (
        <>
            <Intro path={path} />
            <CatalogCollections path={path} />
            <Filter path={path} />
            <MoreProducts/>
        </>
    )
}
