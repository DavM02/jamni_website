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
  armchairs: {
    id: "armchairs-intro",
    headline: "кресла",
    filterHeadline: "все кресла",
    description:
      "Комфорт и стиль в одном: создайте атмосферу уюта и изысканности с помощью наших элегантных кресел, которые идеально подойдут для любого интерьера.",
    materials: [
      "натуральное дерево",
      "металл с покрытием",
      "кожа",
      "экокожа",
      "ткань",
      "бархат",
      "сетка для вентиляции",
    ],

    collections: [
      "comfort collection",
      "relax collection",
      "executive collection",
      "home collection",
      "premium collection",
      "urban collection",
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
        name: "comfort collection",
        image: "https://cdn.arhaus.com/product/StandardV2/101917RCLPO_BT240126.jpg?preset=Product3840x2880",
      },
      {
        name: "relax collection",
        image: "https://cdn.arhaus.com/product/StandardV2/10633R2PL_A240126.jpg?preset=Product3840x2880",
      },
      {
        name: "executive collection",
        image: "https://cdn.arhaus.com/product/StandardV2/CTOTSUPHRCRB_H230412.jpg?preset=Product3840x2880",
      },
      {
        name: "home collection",
        image: "https://cdn.arhaus.com/product/StandardV2/200019REBC_I220419.jpg?preset=Product3840x2880",
      },
      {
        name: "premium collection",
        image: "https://cdn.arhaus.com/product/StandardV2/CTROWLTHARC3_BW220419.jpg?preset=Product3840x2880",
      },
      {
        name: "urban collection",
        image: "https://cdn.arhaus.com/product/StandardV2/CTROWUPHARCB_K220802.jpg?preset=Product3840x2880",
      },
      {
        name: "comfort collection",
        image: "https://cdn.arhaus.com/product/StandardV2/101917RCLPO_BT240126.jpg?preset=Product3840x2880",
      },
      {
        name: "relax collection",
        image: "https://cdn.arhaus.com/product/StandardV2/10633R2PL_A240126.jpg?preset=Product3840x2880",
      },
      {
        name: "executive collection",
        image: "https://cdn.arhaus.com/product/StandardV2/CTOTSUPHRCRB_H230412.jpg?preset=Product3840x2880",
      },
      {
        name: "home collection",
        image: "https://cdn.arhaus.com/product/StandardV2/200019REBC_I220419.jpg?preset=Product3840x2880",
      },
      {
        name: "premium collection",
        image: "https://cdn.arhaus.com/product/StandardV2/CTROWLTHARC3_BW220419.jpg?preset=Product3840x2880",
      },
      {
        name: "urban collection",
        image: "https://cdn.arhaus.com/product/StandardV2/CTROWUPHARCB_K220802.jpg?preset=Product3840x2880",
      },
    ],

    bg: "https://cdn.arhaus.com/product/StandardV2/CTROWLTHARC3_BW220419.jpg?preset=Product3840x2880",
    posY: "48%",
  },
  bedsheets: {
    id: "bedsheets-intro",
    headline: "постельное белье",
    filterHeadline: "все постельное белье",
    description: "Создайте атмосферу уюта и покоя с нашим постельным бельём, которое не только добавит элегантности в ваш интерьер, но и обеспечит вам комфортный и здоровый сон каждую ночь.",
    materials: [
      "хлопок",
      "сатин",
      "перкаль",
      "лен",
      "шелк",
      "бамбук",
      "поплин",
      "фланель",
      "микрофибра",
    ],

    collections: [
      "soft touch",
      "luxury sleep",
      "dream comfort",
      "nature touch",
      "serenity",
      "royal comfort",
    ],
    filters: [
      [
        "цена",
        {
          min: 20000,
          max: 70000,
          val: "руб",
        },
        "price",
      ],
    ],
    sliderData: [
      {
        name: "soft touch",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45STMARHQNKT_C220825.jpg?preset=Product1920x1440",
      },
      {
        name: "luxury sleep",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFULQGL2_U210212.jpg?preset=Product1920x1440",
      },
      {
        name: "dream comfort",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFULQGL2_R210212.jpg?preset=Product1920x1440",
      },
      {
        name: "nature touch",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_H210111.jpg?preset=Product1920x1440",
      },
      {
        name: "serenity",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_A210111.jpg?preset=Product1920x1440",
      }, {
        name: "soft touch",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45STMARHQNKT_C220825.jpg?preset=Product1920x1440",
      },
      {
        name: "luxury sleep",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFULQGL2_U210212.jpg?preset=Product1920x1440",
      },
      {
        name: "dream comfort",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFULQGL2_R210212.jpg?preset=Product1920x1440",
      },
      {
        name: "nature touch",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_H210111.jpg?preset=Product1920x1440",
      },
      {
        name: "serenity",
        image:
          "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_A210111.jpg?preset=Product1920x1440",
      },
    ],

    
    bg: "https://cdn.arhaus.com/product/StandardV2/45PEARFSTQGL2_D210111.jpg?preset=Product1920x1440",
    posY: "48%",
  },
  curtains: {
    id: "curtains-intro",
    headline: "шторы",
    filterHeadline: "все шторы",
    description:
      "Создайте уют и стиль с нашими шторами, которые идеально дополнят ваш интерьер и обеспечат комфортное освещение для отдыха.",
    materials: [
      "хлопок",
      "полиэстер",
      "жаккард",
      "лионский шелк",
      "бархат",
      "органза",
      "лен",
      "тюль",
      "велюр",
    ],

    collections: [
      "morning breeze",
      "midnight elegance",
      "warmth of nature",
      "classic charm",
      "vintage chic",
      "modern luxury",
    ],
    filters: [
      [
        "цена",
        {
          min: 20000,
          max: 70000,
          val: "руб",
        },
        "price",
      ],
    ],
    sliderData: [
      {
        name: "morning breeze",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202451/0983/faye-textured-curtain-xl.jpg",
      },
      {
        name: "midnight elegance",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-19-xl.jpg",
      },
      {
        name: "warmth of nature",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-5-xl.jpg",
      },
      {
        name: "classic charm",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-11-xl.jpg",
      },
      {
        name: "vintage chic",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202430/0294/elinor-floral-mughal-linen-cotton-curtain-1-xl.jpg",
      },
      {
        name: "modern luxury",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0004/emery-linen-sheer-curtain-1-xl.jpg",
      },
      {
        name: "morning breeze",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0650/faye-textured-curtain-5-xl.jpg",
      },
      {
        name: "midnight elegance",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0218/bernyce-curtain-2-xl.jpg",
      },
      {
        name: "warmth of nature",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0476/blue-floral-blackout-curtain-xl.jpg",
      },
      {
        name: "classic charm",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0479/blue-floral-blackout-curtain-4-xl.jpg",
      },
      {
        name: "vintage chic",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0479/blue-floral-blackout-curtain-3-xl.jpg",
      },
      {
        name: "modern luxury",
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0479/blue-floral-blackout-curtain-2-xl.jpg",
      },
    ],


   
    bg: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-1-xl.jpg",
    posY: "75%",
  },
  frameless: {
    id: "frameless-intro",
    headline: "бескаркасная мебель",
    filterHeadline: "вся мебель",
    description:
      "Бескаркасная мебель обеспечивает максимальный комфорт, позволяя расслабиться и насладиться отдыхом в любом уголке вашего дома.",
    materials: [
      "экокожа",
      "микровельвет",
      "флок",
      "жаккард",
      "бархат",
      "плюш",
      "рогожка",
      "канвас",
      "вельвет",
    ],

    collections: [
      "cozy moments",
      "urban comfort",
      "nature retreat",
      "relaxation hub",
      "vintage comfort",
      "modern chill",
    ],
    filters: [
      [
        "цена",
        {
          min: 40000,
          max: 120000,
          val: "руб",
        },
        "price",
      ],
    ],
      sliderData: [
      {
        name: "cozy moments",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0011/textured-faux-suede-charcoal-modern-lounger-1-xl.jpg",
      },
      {
        name: "urban comfort",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202446/0003/eco-performance-textured-weave-oat-double-modern-lounger-xl.jpg",
      },
      {
        name: "nature retreat",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202436/0004/corduroy-dusty-olive-modern-lounger-xl.jpg",
      },
      {
        name: "relaxation hub",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0012/tweed-charcoal-modern-lounger-xl.jpg",
      },
      {
        name: "vintage comfort",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202450/0003/tweed-charcoal-modern-lounger-xl.jpg",
      },
      {
        name: "modern chill",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202448/0023/faux-leather-caramel-modern-lounger-xl.jpg",
      },
      {
        name: "cozy moments",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0011/textured-faux-suede-charcoal-modern-lounger-xl.jpg",
      },
      {
        name: "urban comfort",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202446/0003/eco-performance-textured-weave-oat-double-modern-lounger-xl.jpg",
      },
      {
        name: "nature retreat",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202436/0004/corduroy-dusty-olive-modern-lounger-xl.jpg",
      },
      {
        name: "relaxation hub",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0012/tweed-charcoal-modern-lounger-xl.jpg",
      },
      {
        name: "vintage comfort",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202450/0003/tweed-charcoal-modern-lounger-xl.jpg",
      },
      {
        name: "modern chill",
        image: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202448/0023/faux-leather-caramel-modern-lounger-xl.jpg",
      },
    ],




    bg: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202436/0010/faux-leather-olive-modern-lounger-1-xl.jpg",
    posY: "57%",
  },
};

export default catalog;
