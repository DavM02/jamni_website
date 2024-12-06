import React, { useEffect, useContext } from 'react'
 
import { MainContext } from '../../../context/MainContext'
 export default function Map() {
    const { scrollbarAccess } = useContext(MainContext)
     return (
        <div id='map'
    //          onTouchMove={() => scrollbarAccess.current.scrollTo(0, 150, 0)}
    //    onTouchStart={() => scrollbarAccess.current.scrollTo(0, 150, 0)}
    //          onTouchEnd={() => scrollbarAccess.current.scrollTo(0, 150, 0)}
        >

            <iframe
 
                title="map"
                 src="https://yandex.com/map-widget/v1/?ll=37.524639%2C55.858290&z=19.71&dragging=true" 
            
                height="454"
                allowFullScreen={true}
                style={{ position: 'relative' }}
            ></iframe>
               </div>

    )
}
