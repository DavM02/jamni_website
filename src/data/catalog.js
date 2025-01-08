import bg from '../assets/img_16.webp'
import img1 from '../assets/decor/img_6.jpg'
import img2 from '../assets/decor/img_7.jpg'
import img3 from '../assets/decor/img_8.jpg'
import img4 from '../assets/decor/img_9.webp'
import img5 from '../assets/decor/img_10.jpg'
import img6 from '../assets/decor/img_11.webp'


const catalog = {
    decor: {
        id: 'decor-intro',
        headline: 'декор',
        filterHeadline: 'весь декор',
        description: "Изысканные детали для уюта и стиля: обогатите свой интерьер уникальными декоративными акцентами",
        materials: [
            "ткань",
            "кожа",
            "стекло",
            "керамика",
            "мрамор"
        ],
        collections: ['картины', 'свечи', 'шкатулки', 'вазы и кашпо', 'зеркала', 'часы'],
        filters: [
            ["price", {
                min: 1000, max: 250000, val: 'руб'
            }]
        ],
        sliderData: [
            { name: "картины", image: img1 },
            { name: "свечи", image: img2 },
            { name: "вазы и кашпо", image: img3 },
            { name: "зеркала", image: img4 },
            { name: "часы", image: img5 },
            { name: "шкатулки", image: img6 },
            { name: "картины", image: img1 },
            { name: "свечи", image: img2 },
            { name: "вазы и кашпо", image: img3 },
            { name: "зеркала", image: img4 },
            { name: "часы", image: img5 },
            { name: "шкатулки", image: img6 },
        ],
        bg: bg,
        posY: '32%',

    },
    poufs: {
        id: 'poufs-intro',
        headline: 'пуфы',
        filterHeadline: 'все пуфы',
        description: "Наши пуфы, созданные из разнообразных тканей и высококачественной кожи, подходят для любого интерьера — от традиционного до современного.",
        materials:
            ["ткань",
                "кожзам",
                "натуральная кожа",
                "велюр",
                "экокожа",
                "микрофибра",
                "поролон",
                "синтепон",
                "жаккард"],
        collections:
            [
                "декор",
                "мебель для дома",
                "офисные пуфы",
                "пуфы для отдыха",
                "модульные пуфы",

            ],

        filters: [
            ["price", {
                min: 30000, max: 250000, val: 'руб'
            }]
        ],
        sliderData: [
            { name: "картины", image: img1 },
            { name: "свечи", image: img2 },
            { name: "вазы и кашпо", image: img3 },
            { name: "зеркала", image: img4 },
            { name: "часы", image: img5 },
            { name: "шкатулки", image: img6 },
            { name: "картины", image: img1 },
            { name: "свечи", image: img2 },
            { name: "вазы и кашпо", image: img3 },
            { name: "зеркала", image: img4 },
            { name: "часы", image: img5 },
            { name: "шкатулки", image: img6 },
        ],
        bg: bg,
        posY: '32%',

    },
    sofas: {
        id: 'sofas-intro',
        headline: 'диваны',
        filterHeadline: 'все диваны',
        description: "Наши диваны, изготовленные из широкого ассортимента тканей и кожи, варьируются от классических до современных, с уютными подушками для ПРЕКРАСНОГО отдыха",
        materials:
            ["ткань",
                "кожзам",
                "натуральная кожа",
                "велюр",
                "экокожа",
                "микрофибра",
                "поролон",
                "синтепон",
                "жаккард",
                "пружинный блок",
                "пух",
                "латекс"],
        collections:
            [
                "compact collection",
                "module collection",
                "goodnight collection",

            ],

        filters: [
            ["price", {
                min: 50000, max: 250000, val: 'руб'
            }]
        ],
        sliderData: [
            { name: "картины", image: img1 },
            { name: "свечи", image: img2 },
            { name: "вазы и кашпо", image: img3 },
            { name: "зеркала", image: img4 },
            { name: "часы", image: img5 },
            { name: "шкатулки", image: img6 },
            { name: "картины", image: img1 },
            { name: "свечи", image: img2 },
            { name: "вазы и кашпо", image: img3 },
            { name: "зеркала", image: img4 },
            { name: "часы", image: img5 },
            { name: "шкатулки", image: img6 },
        ],
        bg: bg,
        posY: '32%',

    }
}

export default catalog

 