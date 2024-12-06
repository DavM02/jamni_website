import React, { useEffect, useState } from 'react'

export default function Map() {

    const [showMap, setShowMap] = useState(false)
    return (
<>
        <div id='map'
            onMouseDown={() => setShowMap(true)}
        >
            <iframe

                title="map"
                src="https://yandex.com/map-widget/v1/?ll=37.524639%2C55.858290&z=19.71&dragging=true"

                height="454"
                allowFullScreen={true}
                style={{ position: 'relative' }}
            ></iframe>
        </div>
</>

    )
}
