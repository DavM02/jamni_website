import bg from "../assets/img_16.webp";
import img1 from "../assets/decor/img_6.jpg";
import img2 from "../assets/decor/img_7.jpg";
import img3 from "../assets/decor/img_8.jpg";
import img4 from "../assets/decor/img_9.webp";
import img5 from "../assets/decor/img_10.jpg";
import img6 from "../assets/decor/img_11.webp";
import img7 from "../assets/sofas/img_2.jpeg";
import img8 from "../assets/sofas/img_3.jpg";
import img9 from "../assets/sofas/img_4.jpg";

const catalog = {
  decor: {
    id: "decor-intro",
    headline: "декор",
    filterHeadline: "весь декор",
    description:
      "Изысканные детали для уюта и стиля: обогатите свой интерьер уникальными декоративными акцентами",
    materials: ["ткань", "кожа", "стекло", "керамика", "мрамор"],
    collections: [
      "картины",
      "свечи",
      "шкатулки",
      "вазы и кашпо",
      "зеркала",
      "часы",
    ],
    filters: [
      [
        "цена",
        {
          min: 1000,
          max: 250000,
          val: "руб",
        },
        "price",
      ],
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
    posY: "32%",
  },
  poufs: {
    id: "poufs-intro",
    headline: "пуфы",
    filterHeadline: "все пуфы",
    description:
      "Наши пуфы, созданные из разнообразных тканей и высококачественной кожи, подходят для любого интерьера — от традиционного до современного.",
    materials: [
      "ткань",
      "кожзам",
      "натуральная кожа",
      "велюр",
      "экокожа",
      "микрофибра",
      "поролон",
      "синтепон",
      "жаккард",
    ],
    collections: [
      "декор",
      "мебель для дома",
      "офисные пуфы",
      "пуфы для отдыха",
      "модульные пуфы",
    ],

    filters: [
      [
        "цена",
        {
          min: 1000,
          max: 250000,
          val: "руб",
        },
        "price",
      ],
    ],
    sliderData: [
      {
        name: "декор",
        image:
          "https://4house.ru/upload/iblock/257/o0wkvitfm8l70fef7g21ch6t482fut71.jpg",
      },
      {
        name: "для дома",
        image:
          "https://cb.scene7.com/is/image/Crate/TexturedPldPoufsFSSF23?$web_pdp_main_carousel_high$",
      },
      {
        name: "офисные пуфы",
        image:
          "https://dd3ka9h4chfr8.cloudfront.net/image/725136000567/image_40jrbtvo3d1uh0v7m0jhn4qd7o/-S1200x1200-FJPG/231476-001_ESS_1.jpg",
      },
      {
        name: "для отдыха",
        image:
          "https://4house.ru/upload/iblock/0c6/etfve5grx7jt1ez68bipb4k4anzoi294.jpg",
      },
      {
        name: "модульные пуфы",
        image:
          "https://www.mcgeeandco.com/cdn/shop/products/beck_pines5_final47.jpg?v=1670443983&width=800",
      },
      {
        name: "декор",
        image:
          "https://4house.ru/upload/iblock/257/o0wkvitfm8l70fef7g21ch6t482fut71.jpg",
      },
      {
        name: "для дома",
        image:
          "https://cb.scene7.com/is/image/Crate/TexturedPldPoufsFSSF23?$web_pdp_main_carousel_high$",
      },
      {
        name: "офисные пуфы",
        image:
          "https://dd3ka9h4chfr8.cloudfront.net/image/725136000567/image_40jrbtvo3d1uh0v7m0jhn4qd7o/-S1200x1200-FJPG/231476-001_ESS_1.jpg",
      },
      {
        name: "для отдыха",
        image:
          "https://4house.ru/upload/iblock/0c6/etfve5grx7jt1ez68bipb4k4anzoi294.jpg",
      },
      {
        name: "модульные пуфы",
        image:
          "https://www.mcgeeandco.com/cdn/shop/products/beck_pines5_final47.jpg?v=1670443983&width=800",
      },
    ],
    bg: "https://4house.ru/upload/iblock/cbc/jvyhwbpd4wxpymhomklqtsumb20l25ly.jpg",
    posY: "65%",
  },
  sofas: {
    id: "sofas-intro",
    headline: "диваны",
    filterHeadline: "все диваны",
    description:
      "Наши диваны, изготовленные из широкого ассортимента тканей и кожи, варьируются от классических до современных, с уютными подушками для ПРЕКРАСНОГО отдыха",
    materials: [
      "ткань",
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
      "латекс",
    ],
    collections: [
      "compact collection",
      "module collection",
      "goodnight collection",
    ],

    filters: [
      [
        "цена",
        {
          min: 50000,
          max: 250000,
          val: "руб",
        },
        "price",
      ],
      [
        "размер (ширина)",
        {
          min: 100,
          max: 350,
          val: "",
        },
        "width",
      ],
      [
        "размер (глубина)",
        {
          min: 50,
          max: 100,
          val: "",
        },
        "depth",
      ],
    ],
    sliderData: [
      { name: "compact collection", image: img7 },
      { name: "module collection", image: img8 },
      { name: "goodnight collection", image: img9 },
      { name: "compact collection", image: img7 },
      { name: "module collection", image: img8 },
      { name: "goodnight collection", image: img9 },
      { name: "compact collection", image: img7 },
      { name: "module collection", image: img8 },
      { name: "goodnight collection", image: img9 },
      { name: "module collection", image: img8 },
    ],
    bg: "https://daiahome.com/cdn/shop/files/EbbeDeepSeatLowProfileModernLeatherSofa_1.jpg",
    posY: "70%",
    extraFilters: [
      [
        "спальное место",
        ["есть", "нет", "полутораспальное", "двуспальное", "кинг-сайз"],
        "sleepingArea",
      ],
      ["бельевой ящик", ["есть", "нет", "встроенный", "выдвижной"], "linenBox"],
      [
        "тип дивана",
        [
          "прямой",
          "угловой",
          "модульный",
          "раскладной",
          "диван-кровать",
          "диван-пуф",
          "компактный",
        ],
        "sofaType",
      ],
    ],
  },
  chairs: {
    id: "chairs-intro",
    headline: "стулья",
    filterHeadline: "все стулья",
    description:
      "Изысканные детали для комфорта и элегантности: обогатите свой интерьер стильными и уникальными стульями для любой обстановки.",
    materials: [
      "ткань",
      "кожзам",
      "натуральная кожа",
      "велюр",
      "экокожа",
      "микрофибра",
      "поролон",
      "синтепон",
      "жаккард",
      "металл",
      "дерево",
      "пластик",
    ],

    collections: [
      "classic collection",
      "modern collection",
      "comfort collection",
      "elegance collection",
      "premium collection",
      "office collection",
    ],
    filters: [
      [
        "цена",
        {
          min: 1000,
          max: 250000,
          val: "руб",
        },
        "price",
      ],
    ],
    sliderData: [
      {
        name: "classic collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/30ATISDMERTC_JD240820_240820.jpg?preset=Product3840x2880",
      },
      {
        name: "modern collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/55LYNBSLTECH_A220103.jpg?preset=Product3840x2880",
      },
      {
        name: "comfort collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/30RHENCNCSCH_DU200709.jpg?preset=Product3840x2880",
      },
      {
        name: "elegance collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/30BOTTONICHR_A201207.jpg?preset=Product3840x2880",
      },
      {
        name: "premium collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/30LNDSDCHCA_A230731.jpg?preset=Product3840x2880",
      },
      {
        name: "office collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/10GR04CHBNP_C220919.jpg?preset=Product3840x2880",
      },
      {
        name: "classic collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/30ATISDMERTC_JD240820_240820.jpg?preset=Product3840x2880",
      },
      {
        name: "modern collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/55LYNBSLTECH_A220103.jpg?preset=Product3840x2880",
      },
      {
        name: "comfort collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/30RHENCNCSCH_DU200709.jpg?preset=Product3840x2880",
      },
      {
        name: "elegance collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/30BOTTONICHR_A201207.jpg?preset=Product3840x2880",
      },
      {
        name: "premium collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/30LNDSDCHCA_A230731.jpg?preset=Product3840x2880",
      },
      {
        name: "office collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/10GR04CHBNP_C220919.jpg?preset=Product3840x2880",
      },
    ],
    bg: "https://cdn.arhaus.com/product/StandardV2/30LNDSDCHCA_D230731.jpg?preset=Product3840x2880",
    posY: "48%",
  },
  beds: {
    id: "beds-intro",
    headline: "кровати",
    filterHeadline: "все кровати",
    description:
      "Создайте атмосферу уюта и покоя с нашими кроватями, которые станут не только центральным элементом интерьера, но и обеспечат вам непревзойденный комфорт для отдыха.",
    materials: [
      "дерево",
      "МДФ",
      "металл",
      "натуральное дерево",
      "ЛДСП",
      "антикоррозийное покрытие",
      "кованый металл",
      "кожа",
      "экокожа",
    ],

    collections: [
      "classic collection",
      "luxury collection",
      "modern collection",
      "vintage collection",
      "minimalist collection",
      "elegant collection",
    ],
    filters: [
      [
        "цена",
        {
          min: 30000,
          max: 250000,
          val: "руб",
        },
        "price",
      ],
    ],
    sliderData: [
      {
        name: "classic collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45STMARHQNKT_C220825.jpg?preset=Product1920x1440",
      },
      {
        name: "luxury collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFULQGL2_U210212.jpg?preset=Product1920x1440",
      },
      {
        name: "modern collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFULQGL2_R210212.jpg?preset=Product1920x1440",
      },
      {
        name: "vintage collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_H210111.jpg?preset=Product1920x1440",
      },
      {
        name: "minimalist collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_A210111.jpg?preset=Product1920x1440",
      },
      {
        name: "elegant collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_D210111.jpg?preset=Product1920x1440",
      },
      {
        name: "classic collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45STMARHQNKT_C220825.jpg?preset=Product1920x1440",
      },
      {
        name: "luxury collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFULQGL2_U210212.jpg?preset=Product1920x1440",
      },
      {
        name: "modern collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFULQGL2_R210212.jpg?preset=Product1920x1440",
      },
      {
        name: "vintage collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_H210111.jpg?preset=Product1920x1440",
      },
      {
        name: "minimalist collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_A210111.jpg?preset=Product1920x1440",
      },
      {
        name: "elegant collection",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_D210111.jpg?preset=Product1920x1440",
      },
    ],

    extraFilters: [
      [
        "размер кровати",
        [
          "односпальная",
          "полутораспальная",
          "двуспальная",
          "кинг-сайз",
          "евро-кровать",
          "восточная",
        ],
        "bedSize",
      ],
      [
        "тип кровати",
        [
          "классическая",
          "подиумная",
          "с подъемным механизмом",
          "с мягким изголовьем",
        ],
        "bedType",
      ],
      [
        "тип матраса",
        [
          "пружинный",
          "беспружинный",
          "ортопедический",
          "анатомический",
          "с memory foam",
        ],
        "mattressType",
      ],
    ],
    bg: "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_D210111.jpg?preset=Product1920x1440",
    posY: "48%",
  },
};

export default catalog;
