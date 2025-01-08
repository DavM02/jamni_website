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
            ["цена", {
                min: 1000, max: 250000, val: 'руб'
            }, 'price']
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
            ["цена", {
                min: 1000, max: 250000, val: 'руб'
            }, 'price']
        ],
        sliderData: [
            { name: "декор", image: "https://4house.ru/upload/iblock/257/o0wkvitfm8l70fef7g21ch6t482fut71.jpg" },
            { name: "для дома", image: "https://cb.scene7.com/is/image/Crate/TexturedPldPoufsFSSF23?$web_pdp_main_carousel_high$" },
            { name: "офисные пуфы", image: "https://dd3ka9h4chfr8.cloudfront.net/image/725136000567/image_40jrbtvo3d1uh0v7m0jhn4qd7o/-S1200x1200-FJPG/231476-001_ESS_1.jpg" },
            { name: "для отдыха", image: "https://4house.ru/upload/iblock/0c6/etfve5grx7jt1ez68bipb4k4anzoi294.jpg" },
            { name: "модульные пуфы", image: "https://www.mcgeeandco.com/cdn/shop/products/beck_pines5_final47.jpg?v=1670443983&width=800" },
            { name: "декор", image: "https://4house.ru/upload/iblock/257/o0wkvitfm8l70fef7g21ch6t482fut71.jpg" },
            { name: "для дома", image: "https://cb.scene7.com/is/image/Crate/TexturedPldPoufsFSSF23?$web_pdp_main_carousel_high$" },
            { name: "офисные пуфы", image: "https://dd3ka9h4chfr8.cloudfront.net/image/725136000567/image_40jrbtvo3d1uh0v7m0jhn4qd7o/-S1200x1200-FJPG/231476-001_ESS_1.jpg" },
            { name: "для отдыха", image: "https://4house.ru/upload/iblock/0c6/etfve5grx7jt1ez68bipb4k4anzoi294.jpg" },
            { name: "модульные пуфы", image: "https://www.mcgeeandco.com/cdn/shop/products/beck_pines5_final47.jpg?v=1670443983&width=800" },

        ],
        bg: 'https://4house.ru/upload/iblock/cbc/jvyhwbpd4wxpymhomklqtsumb20l25ly.jpg',
        posY: '65%',

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
            ["цена", {
                min: 50000, max: 250000, val: 'руб'
            }, 'price'],
            ["размер (ширина)", {
                min: 100, max: 350, val: ''
            }, 'width'],
            ["размер (глубина)", {
                min: 50, max: 100, val: ''
            }, 'depth']
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
        extraFilters: [
            ["спальное место", [
                "есть",
                "нет",
                "полутораспальное",
                "двуспальное",
                "кинг-сайз"
            ], "sleepingArea"
            ],
            [
                "бельевой ящик", [
                    "есть",
                    "нет",
                    "встроенный",
                    "выдвижной"
                ], "linenBox"
            ],
            ["тип дивана", [
                "прямой",
                "угловой",
                "модульный",
                "раскладной",
                "диван-кровать",
                "диван-пуф",
                "компактный"
            ], "sofaType"]
        ]
    }
}

export default catalog

