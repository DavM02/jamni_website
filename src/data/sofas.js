const advantages = [
  [
    {
      title: "Удобство использования",
      text: "Бескаркасные кресла идеально подходят для создания расслабленной атмосферы в любом помещении. Легкость в использовании и адаптация к форме тела делают их максимально комфортными.",
    },
    {
      title: "Гибкость в размещении",
      text: "Бескаркасные кресла можно легко перемещать и изменять их расположение в зависимости от нужд и настроения.",
    },
    {
      title: "Современный дизайн",
      text: "Эти кресла подходят для самых разных интерьеров благодаря своему уникальному и современному дизайну.",
    },
    {
      title: "Легкость в уходе",
      text: "Материалы, используемые для бескаркасных кресел, легко чистятся и не требуют сложного ухода, что делает их удобными для повседневного использования.",
    },
  ],
  [
    {
      title: "Поддержка позвоночника",
      text: "Бескаркасные кресла отлично адаптируются к анатомии вашего тела, обеспечивая поддержку спины и уменьшая нагрузку на позвоночник.",
    },
    {
      title: "Терморегуляция",
      text: "Некоторые модели кресел оснащены материалами, которые регулируют температуру, обеспечивая комфорт в любую погоду.",
    },
    {
      title: "Разнообразие тканей",
      text: "Для бескаркасных кресел доступны различные текстуры и цвета тканей, что позволяет выбрать идеальный вариант для любого интерьера.",
    },
    {
      title: "Мобильность",
      text: "Кресло можно использовать не только дома, но и на улице, в парке или на даче, так как оно легкое и легко переносится.",
    },
  ],
  [
    {
      title: "Устойчивость к износу",
      text: "Бескаркасные кресла сделаны из прочных материалов, устойчивых к износу и деформации, что гарантирует долгий срок службы.",
    },
    {
      title: "Эргономичность",
      text: "Форма кресла позволяет удобно сидеть в течение длительного времени, поддерживая правильное положение тела.",
    },
    {
      title: "Простота хранения",
      text: "При необходимости кресло можно легко сложить или поместить в удобное место, экономя пространство.",
    },
    {
      title: "Экологичность материалов",
      text: "Бескаркасные кресла изготавливаются с использованием экологически чистых и безопасных для здоровья материалов.",
    },
  ],
  [
    {
      title: "Ремонтопригодность",
      text: "В случае повреждения покрытия кресло легко можно перешить или заменить его ткань, сохраняя функциональность.",
    },
    {
      title: "Многофункциональность",
      text: "Кроме использования в качестве кресла, такие модели могут быть использованы как лежанки, подушки или дополнительные места для сидения.",
    },
    {
      title: "Удобство для детей",
      text: "Бескаркасные кресла идеально подходят для детей, так как они мягкие и безопасные, легко принимают форму тела маленьких пользователей.",
    },
    {
      title: "Гибкость дизайна",
      text: "Каждое кресло может быть выполнено в различных формах и размерах, чтобы вписаться в любой интерьер, будь то минимализм или уютная комната.",
    },
  ],
  [
    {
      title: "Легкость в перемещении",
      text: "Бескаркасные кресла можно легко передвигать по помещению, создавая различные зоны отдыха или общения.",
    },
    {
      title: "Подходит для любой среды",
      text: "Такое кресло подходит для домашнего использования, а также для офисов, кафе или даже уличных мероприятий.",
    },
    {
      title: "Обновляемость дизайна",
      text: "При желании можно сменить ткань кресла или добавить аксессуары, что позволяет обновить внешний вид без покупки нового изделия.",
    },
    {
      title: "Снижение стресса",
      text: "Мягкость и комфорт бескаркасного кресла способствуют снижению стресса и создают атмосферу релаксации.",
    },
  ],
];

const bestseller = [true, false];


const images = [
  [
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0011/textured-faux-suede-charcoal-modern-lounger-1-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0011/textured-faux-suede-charcoal-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202451/0003/textured-faux-suede-charcoal-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202450/0007/textured-faux-suede-charcoal-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202450/0007/textured-faux-suede-charcoal-modern-lounger-1-xl.jpg"
  ],
  [
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0010/boucle-twill-gravel-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0007/boucle-twill-gravel-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202503/0002/boucle-twill-gravel-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0011/boucle-twill-gravel-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0008/boucle-twill-gravel-modern-lounger-1-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0011/boucle-twill-gravel-modern-lounger-xl.jpg"
  ],
  [
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0038/open-box-vegan-leather-caramel-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202448/0023/faux-leather-caramel-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202450/0007/xander-plaid-comforter-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202450/0018/open-box-vegan-leather-caramel-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0012/faux-leather-caramel-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0028/faux-leather-caramel-modern-lounger-xl.jpg"
  ],
  [
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0011/tweed-charcoal-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0012/tweed-charcoal-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0009/tweed-charcoal-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202450/0003/tweed-charcoal-modern-lounger-xl.jpg"
  ],
  [
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0005/eco-performance-textured-weave-oat-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0005/eco-performance-textured-weave-oat-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202436/0006/eco-performance-textured-weave-oat-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202436/0004/eco-performance-textured-weave-oat-modern-lounger-xl.jpg"
  ],
  [
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202437/0082/eco-performance-textured-weave-oat-double-modern-lounger-1-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202437/0082/eco-performance-textured-weave-oat-double-modern-lounger-1-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202446/0003/eco-performance-textured-weave-oat-double-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202437/0082/eco-performance-textured-weave-oat-double-modern-lounger-5-xl.jpg"
  ],
  [
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0011/faux-leather-olive-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0011/faux-leather-olive-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202436/0010/faux-leather-olive-modern-lounger-1-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202436/0010/faux-leather-olive-modern-lounger-2-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202436/0010/faux-leather-olive-modern-lounger-3-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202437/0389/faux-leather-olive-modern-lounger-xl.jpg"
  ],
  [
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0006/corduroy-dusty-olive-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0006/corduroy-dusty-olive-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0007/corduroy-dusty-olive-modern-lounger-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202435/0006/corduroy-dusty-olive-modern-lounger-1-xl.jpg",
    "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202436/0004/corduroy-dusty-olive-modern-lounger-xl.jpg"
  ]
];

const material = [
  "экокожа",
  "микровельвет",
  "флок",
  "жаккард",
  "бархат",
  "плюш",
  "рогожка",
  "канвас",
  "вельвет",
];

const collections = [
  "cozy moments",
  "urban comfort",
  "nature retreat",
  "relaxation hub",
  "vintage comfort",
  "modern chill",
];


const colors = [
 "palette-gray-light",
  "black",
 "palette-brown",
 "white",
 "palette-beige",
  "palette-green",
  "palette-gray",
   "palette-brown-light",
];

const discount = [true, false];

const isNew = [true, false];
 
 
const names = [
  "beancloud",
  "cozydrop",
  "loungemaster",
  "relaxrock",
  "comfortbreeze",
  "softnest",
  "dreamcush",
  "lazyhug",
  "chillstone",
  "snugflow",
  "plushpod",
  "sitbliss",
  "zenlounger",
  "relaxorb",
  "easebean",
  "cloudrocker",
  "snugglecore",
  "resthaven",
  "floatcush",
  "harmonyseat",
];


const products = [
  "мягкое кресло",
  "роскошное кресло",
  "современное кресло",
  "тканевое кресло",
  "стильное кресло",
  "уютное кресло",
  "элегантное кресло",
  "комфортное кресло",
  "яркое кресло",
  "классическое кресло",
  "декоративное кресло",
  "премиум кресло",
];

const options = [
  
  {
    "наполнение": ["поролон", "гранулы пенополистирола", "смешанное"],
  },
  {
    "декор": ["с бахромой", "с вышивкой", "без декора"],
  },
 
  {
    "устойчивость к загрязнениям": ["влагостойкое", "легко чистится", "обычное"],
  },
  {
    "антибактериальная обработка": ["есть", "нет"],
  },
  {
    "защита от загрязнений": ["есть", "нет"],
  },
  {
    "поддержка спины": ["с поддержкой", "без поддержки"],
  },
  {
    "мобильность": ["с колесами", "без колес"],
  },
  {
    "съемный чехол": ["да", "нет"],
  },
];


const maintenance = [
  "Регулярно встряхивайте кресло, чтобы сохранить его форму и предотвратить накопление влаги.",
  "При необходимости чистите кресло с использованием мягкой щетки или пылесоса с насадкой для мебели.",
  "Используйте только мягкие моющие средства, чтобы не повредить ткань или наполнитель.",
  "Если кресло имеет съемный чехол, периодически стирайте его в соответствии с инструкцией на ярлыке.",
  "Не допускайте длительного воздействия солнечных лучей на кресло, чтобы избежать выцветания ткани.",
  "Избегайте загрязнений и пятен — немедленно протирайте места загрязнения мягкой тканью.",
  "Если кресло с наполнителем из микробисера, не рекомендуется его сжимать слишком сильно.",
  "Храните кресло в сухом месте, чтобы предотвратить накопление влаги и появление неприятных запахов.",
  "Не кладите кресло на слишком горячие поверхности, чтобы избежать повреждения ткани или наполнителя.",
  "При стирке или чистке, обязательно соблюдайте указания по уходу, чтобы сохранить материал в хорошем состоянии.",
  "Не используйте жесткие моющие средства или абразивные щетки, чтобы избежать повреждения ткани.",
  "Для улучшения внешнего вида кресла периодически добавляйте новый наполнитель, если это необходимо.",
  "Храните кресло в собранном виде, чтобы избежать деформации формы.",
  "Для защиты от грязи используйте защитные чехлы или накладки на кресло.",
  "Не позволяйте детям или животным использовать кресло как игрушку, чтобы избежать повреждения ткани и наполнителя.",
  "Не перегружайте кресло, чтобы избежать его деформации и снижения срока службы.",
];


const descriptions = [
  [
    "Бескаркасное кресло с наполнителем из микробисера дарит вам комфорт и свободу движения. Легкое и удобное, оно идеально подходит для отдыха в любое время дня.",
    "Доступно в различных цветах и тканях, чтобы гармонично вписаться в любой интерьер."
  ],
  [
    "Роскошное кресло с велюровым покрытием придает интерьеру изысканный вид и комфорт. Мягкое, но с отличной поддержкой для спины, оно станет идеальным выбором для отдыха.",
    "Элегантное кресло, которое добавит нотку роскоши в ваше пространство."
  ],
  [
    "Бескаркасное кресло с наполнителем из пенополиуретана идеально подходит для длительного использования. Оно мягкое, но достаточно упругое, чтобы обеспечить отличную поддержку.",
    "Легко чистится и сохраняет свою форму даже после многих лет использования."
  ],
  [
    "Шелковистое кресло с прочной тканью и стильным дизайном создает атмосферу уюта и комфорта в вашем доме.",
    "Отличный выбор для создания расслабляющей зоны отдыха в вашем интерьере."
  ],
  [
    "Кресло из натурального льна прекрасно вписывается в летний интерьер, создавая атмосферу прохлады и естественной красоты.",
    "Натуральные ткани обеспечивают идеальный микроклимат и комфорт на протяжении всего года."
  ],
  [
    "Яркое кресло для детской комнаты с веселым рисунком и мягким наполнителем, создающее безопасную и комфортную атмосферу для вашего ребенка.",
    "Ткани гипоаллергенны и безопасны для детей, а также легко чистятся."
  ],
  [
    "Кресло с антибактериальным покрытием идеально подходит для людей с аллергиями. Оно сохраняет свою свежесть даже при интенсивном использовании.",
    "Подходит для любого помещения, где необходимо создать чистую и безопасную атмосферу."
  ],
  [
    "Удобное кресло с терморегулирующим эффектом подходит для использования в любое время года. Оно сохраняет оптимальную температуру и комфорт, создавая идеальные условия для отдыха.",
    "Изготавливается из дышащих тканей, которые не теряют своей формы и обеспечивают долгосрочное использование."
  ]
];


const packing = [
  {
    packing: {
      text: "Каждое бескаркасное кресло аккуратно упаковано в защитную плёнку и помещено в картонную коробку для безопасной доставки.",
    },
  },
  {
    packing: {
      text: "Кресло завернуто в многослойную защитную плёнку, а коробка дополнительно защищена амортизирующими вставками для предотвращения повреждений.",
    },
  },
  {
    packing: {
      text: "Бескаркасное кресло упаковано в прочный пакет с воздухопроницаемой защитой, чтобы сохранить форму и предотвратить повреждения.",
    },
  },
  {
    packing: {
      text: "Для защиты кресла от внешних воздействий оно упаковано в многослойную защитную плёнку и помещено в картонную коробку.",
    },
  },
  {
    packing: {
      text: "Каждое кресло индивидуально упаковано в защитную плёнку, а коробка снабжена мягкими прокладками для дополнительной безопасности при транспортировке.",
    },
  },
  {
    packing: {
      text: "Бескаркасное кресло упаковано в герметичный пакет с защитой от влаги и запахов, чтобы обеспечить сохранность при перевозке.",
    },
  },
  {
    packing: {
      text: "Кресло помещено в картонную коробку с амортизирующими элементами для защиты от механических повреждений.",
    },
  },
  {
    packing: {
      text: "Каждое кресло аккуратно сложено и упаковано в картонную коробку с защитной плёнкой для предотвращения повреждений.",
    },
  },
  {
    packing: {
      text: "Бескаркасное кресло запечатано в защитную плёнку и помещено в коробку с внутренней амортизацией для безопасной транспортировки.",
    },
  },
  {
    packing: {
      text: "Кресло упаковано в плотный пакет и снабжено дополнительной защитой в виде мягких прокладок в коробке.",
    },
  },
  {
    packing: {
      text: "Для безопасной транспортировки бескаркасное кресло упаковано в картонную коробку с защитной плёнкой и амортизирующими вставками.",
    },
  },
  {
    packing: {
      text: "Кресло помещено в специальную упаковку с защитой от влаги и внешних воздействий для сохранности при перевозке.",
    },
  },
  {
    packing: {
      text: "Каждое кресло упаковано в индивидуальную упаковку и надежно помещено в коробку с дополнительными защитными материалами.",
    },
  },
];



const materials = [
  {
    materials: {
      "основной материал": "велюр",
      основа: "плотная ткань с мягким ворсом",
      покрытие: "гладкое",
      декор: "с бархатистым рисунком",
    },
  },
  {
    materials: {
      обивка: "микрофибра",
      основа: "ткань с водоотталкивающим покрытием",
      наполнитель: "пенные гранулы",
      спецификация: "гипоаллергенная и устойчивая к износу",
    },
  },
  {
    materials: {
      "основной материал": "полиэстер",
      основа: "высокопрочный полиэстер с водоотталкивающим покрытием",
      покрытие: "матовое",
      декор: "с геометрическим узором",
    },
  },
  {
    materials: {
      обивка: "шелк",
      основа: "натуральный шелк с гладкой текстурой",
      наполнитель: "пуховое волокно",
      спецификация: "гипоаллергенность и терморегуляция",
    },
  },
  {
    materials: {
      "основной материал": "трикотаж",
      основа: "мягкая и эластичная ткань с хорошей воздухопроницаемостью",
      покрытие: "гладкое",
      декор: "с минималистичным рисунком",
    },
  },
  {
    materials: {
      обивка: "микрофибра",
      основа: "ткань с высокой износостойкостью",
      наполнитель: "синтепон",
      спецификация: "гипоаллергенность и антибактериальная обработка",
    },
  },
  {
    materials: {
      "основной материал": "хлопок",
      основа: "натуральный хлопок с плотным переплетением",
      покрытие: "гладкое",
      декор: "с пастельным узором",
    },
  },
  {
    materials: {
      обивка: "перкаль",
      основа: "мягкая ткань с хорошей воздухопроницаемостью",
      наполнитель: "латексные гранулы",
      спецификация: "удобство и комфорт при длительном использовании",
    },
  },
  {
    materials: {
      "основной материал": "бамбук",
      основа: "экологичный материал с антибактериальными свойствами",
      наполнитель: "пуховые гранулы",
      спецификация: "свежесть и комфорт в летнее время",
    },
  },
  {
    materials: {
      "основной материал": "сатин",
      основа: "глянцевая ткань с легким блеском",
      покрытие: "гладкое",
      декор: "с изысканным узором",
    },
  },
  {
    materials: {
      обивка: "велюр",
      основа: "мягкий и уютный материал с бархатистой текстурой",
      наполнитель: "синтепон",
      спецификация: "устойчивость к износу и выцветанию",
    },
  },
  {
    materials: {
      "основной материал": "полиэстер",
      основа: "высокопрочный полиэстер, устойчивый к сминанию",
      покрытие: "глянцевое",
      декор: "с геометрическими фигурами",
    },
  },
  {
    materials: {
      обивка: "лён",
      основа: "натуральный лён с антибактериальной обработкой",
      наполнитель: "пух",
      спецификация: "устойчивость к выцветанию и износу",
    },
  },
  {
    materials: {
      "основной материал": "микрофибра",
      основа: "мелкозернистая ткань с водоотталкивающим покрытием",
      покрытие: "матовое",
      декор: "с бархатистым рисунком",
    },
  },
];


const random = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let sofas = [];

for (let i = 0; i <= 89; i++) {
  let probject = { id: i + 1 };

  probject.bestseller = bestseller[random(3, 1) - 1];
  probject.collection = collections[random(collections.length)];
  probject.product = products[random(products.length)];
  probject.colors = Array.from(
    new Set(
      Array(random(5, 2))
        .fill(null)
        .map((el, i) => colors[random(colors.length)])
    )
  );
  probject.discount = discount[random(3, 1) - 1];
  probject.isNew = isNew[random(3, 1) - 1];
  probject.material = material[random(material.length)];
  probject.name = names[random(names.length)];
  probject.price = Math.round(random(70000, 20000) / 1000) * 1000;
  probject.rating = (Math.random() * (5 - 3.8) + 3.8).toFixed(1);

  const nums = new Set();
  let maintenancearray = [];
  while (nums.size < 6) {
    let number = random(maintenance.length);
    if (!nums.has(number)) {
      nums.add(number);
      maintenancearray.push(maintenance[number]);
    }
  }

  const nums2 = new Set();
  let optarr = [];
  while (nums2.size < 6) {
    let number = random(options.length);
    if (!nums2.has(number)) {
      nums2.add(number);
      optarr.push(options[number]);
    }
  }
 
 

 
  const sizes = {
    ширина: [Math.round(random(80, 150) / 100) * 100],

    высота: [Math.round(random(80, 150) / 10) * 10],
    // вес: [Math.round(random(100, 170) / 10) * 10],
  };

  const a = Object.entries(sizes);
  a.forEach(([key, value], i) => {
    for (let i = 0; i < 3; i++) {
      sizes[key].push(sizes[key][i] + 20);
    }
  });
  a.forEach(([key, value], i) => {
    for (let i = 0; i < 4; i++) {
      sizes[key][i] += key !== "вес" ? " см" : " кг";
    }
  });

  probject.characteristics = [
    {
      dimensions: [
        {
          ширина: sizes.ширина.map((el, i) => {
            return { value: el.replace(" см", ""), unit: "см" };
          }),
        },
        {
          высота: sizes.высота.map((el, i) => {
            return { value: el.replace(" см", ""), unit: "см" };
          }),
        },
      ],
    },
    { options: [{ цвет: "_" }, ...optarr] },
  ];

  probject.technicalSpecifications = {
    sizes,
    materials: materials[random(materials.length)].materials,
  };

  probject.maintenance = maintenancearray;
  probject.packing = packing[random(packing.length)].packing;
  probject.productDescription = {
    text: descriptions[random(descriptions.length)],
  };
  probject.images = images[random(images.length)];
  probject.advantages = advantages[random(advantages.length)];
  sofas.push(probject);
}

console.log(sofas);

export default function Gen() {
  return <div></div>;
}
