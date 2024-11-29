import React from 'react'
import bg from '../../../assets/img_16.webp'
import img1 from '../../../assets/decor/img_6.jpg'
import img2 from '../../../assets/decor/img_7.jpg'
import img3 from '../../../assets/decor/img_8.jpg'
import img4 from '../../../assets/decor/img_9.webp'
import img5 from '../../../assets/decor/img_10.jpg'
import Filter from '../../../components/sections/Filter/Filter'
import MoreProducts from '../../../components/sections/MoreProducts/MoreProducts'
import CatalogCollections from '../../../components/sections/CatalogCollections/CatalogCollections'
import Intro from '../../../components/sections/Intro/Intro'

export default function DecorSections() {

    const initialItems = [
        { name: "картины", image: img1 },
        { name: "свечи", image: img2 },
        { name: "вазы и кашпо", image: img3 },
        { name: "зеркала", image: img4 },
        { name: "часы", image: img5 },
        { name: "картины", image: img1 },
        { name: "свечи", image: img2 },
        { name: "вазы и кашпо", image: img3 },
        { name: "зеркала", image: img4 },
        { name: "часы", image: img5 },
    ]
    return (
        <>
            <Intro
                id="decor-intro"
                posY={'32%'}
                bg={bg}
                text={{
                    headline: 'декор', description: "Изысканные детали для уюта и стиля: обогатите свой интерьер уникальными декоративными акцентами"
                }}
            />
            <CatalogCollections
                sliderData={initialItems} />
            <Filter
                price={{ min: 1000, max: 250000, val: 'руб' }}
                headline={'весь декор'}
                materials={["ткань", "кожа", "стекло", "керамика", "мрамор"]}
                collections={['картины', 'свечи', 'вазы и кашпо', 'зеркала', 'часы']} />
            <MoreProducts />
        </>
    )
}
