const advantages = [
  [
    {
      title: "Светоотражающие ткани",
      text: "Шторы с такими тканями помогают уменьшить количество солнечного света, проникающего в помещение, создавая комфортную атмосферу.",
    },
    {
      title: "Легкость в уходе",
      text: "Большинство тканей, используемых для штор, легко стираются и не требуют специального ухода.",
    },
    {
      title: "Антиаллергенные свойства",
      text: "Шторы с антиаллергенными покрытиями помогают создать более здоровую атмосферу в доме, минимизируя распространение пыли.",
    },
    {
      title: "Защита от УФ-лучей",
      text: "Ткани штор обладают свойством блокировать ультрафиолетовые лучи, что помогает защитить мебель и обои от выцветания.",
    },
  ],
  [
    {
      title: "Регулируемая длина",
      text: "Шторы можно легко подогнать под нужный размер окна благодаря регулируемой длине ткани или использованию специального крепления.",
    },
    {
      title: "Терморегулирующие свойства",
      text: "Шторы с терморегулирующим эффектом помогают поддерживать комфортную температуру в помещении в любое время года.",
    },
    {
      title: "Многообразие дизайнов",
      text: "Шторы представлены в различных стилях, от классики до модерна, что позволяет выбрать идеальный вариант для вашего интерьера.",
    },
    {
      title: "Звукоизоляция",
      text: "Некоторые модели штор обладают звукоизоляционными свойствами, обеспечивая тишину и комфорт в доме.",
    },
  ],
  [
    {
      title: "Легкость монтажа",
      text: "Шторы легко устанавливаются благодаря простым креплениям, не требующим сложных инструментов или профессиональных навыков.",
    },
    {
      title: "Широкая цветовая палитра",
      text: "Шторы доступны в различных цветах и оттенках, что позволяет подобрать модель, идеально подходящую под ваш интерьер.",
    },
    {
      title: "Устойчивость к выцветанию",
      text: "Ткани штор устойчивы к выцветанию, что гарантирует долгий срок службы и сохранение яркости цвета.",
    },
    {
      title: "Удобство регулировки",
      text: "Механизмы для регулировки штор, такие как карнизы с возможностью подъема и опускания, обеспечивают удобство в использовании.",
    },
  ],
  [
    {
      title: "Устойчивость к загрязнениям",
      text: "Ткани, из которых изготовлены шторы, легко чистятся и устойчивы к загрязнениям, что упрощает уход.",
    },
    {
      title: "Простота стирки",
      text: "Шторы можно стирать в домашних условиях, что значительно облегчает их уход и поддержание в чистоте.",
    },
    {
      title: "Экологичные материалы",
      text: "Шторы из натуральных и экологически чистых материалов безопасны для здоровья и не содержат токсичных веществ.",
    },
    {
      title: "Стиль и элегантность",
      text: "Шторы добавляют изысканности и элегантности в любое помещение, создавая неповторимую атмосферу уюта.",
    },
  ],
  [
    {
      title: "Разнообразие текстур",
      text: "Шторы с разными текстурами могут добавить глубину и разнообразие вашему интерьеру, при этом подходя под любой стиль.",
    },
    {
      title: "Система крепления на липучках",
      text: "Шторы с липучками позволяют легко менять их без использования дополнительных инструментов или карнизов.",
    },
    {
      title: "Поддержка индивидуальных заказов",
      text: "Мы можем изготовить шторы по индивидуальному заказу с учетом всех ваших пожеланий и требований.",
    },
    {
      title: "Минимизация сквозняков",
      text: "Плотные шторы эффективно предотвращают сквозняки и помогают сохранить тепло в комнате.",
    },
  ],
  [
    {
      title: "Антибактериальная защита",
      text: "Некоторые ткани имеют антибактериальные свойства, которые способствуют улучшению качества воздуха в помещении.",
    },
    {
      title: "Долговечность",
      text: "Шторы, изготовленные из качественных тканей, прослужат вам долго, сохраняя свою привлекательность и функциональность.",
    },
    {
      title: "Устойчивость к изгибам",
      text: "Шторы, выполненные из жестких тканей, не теряют своей формы даже при частом открывании и закрывании.",
    },
    {
      title: "Многофункциональность",
      text: "Шторы с дополнительными функциями, такими как встроенные жалюзи, обеспечивают максимальную гибкость в использовании.",
    },
  ],
  [
    {
      title: "Устойчивость к влаге",
      text: "Некоторые модели штор устойчивы к влаге, что делает их отличным выбором для ванных комнат и кухонь.",
    },
    {
      title: "Простота установки на карниз",
      text: "Шторы можно легко установить на стандартный карниз с использованием кольцевых креплений или петель.",
    },
    {
      title: "Пожарная безопасность",
      text: "Некоторые ткани для штор имеют огнеупорные свойства, что обеспечивает дополнительную безопасность в помещении.",
    },
    {
      title: "Энергосбережение",
      text: "Шторы с теплоизоляционными свойствами помогают снизить потери тепла, что может снизить потребление энергии.",
    },
  ],
];

const bestseller = [true, false];

const images = [
  // Faye Textured Curtain
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0649/faye-textured-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202451/0983/faye-textured-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0650/faye-textured-curtain-7-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202451/0983/faye-textured-curtain-3-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0650/faye-textured-curtain-8-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202451/0983/faye-textured-curtain-2-xl.jpg",
  ],
  // Cozy Cloud Curtain
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-14-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-19-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-9-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-15-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-16-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-2-xl.jpg",
  ],
  // Cozy Cloud Blackout Curtain
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-15-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-5-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-3-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-18-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-4-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-23-xl.jpg",
  ],
  // Cozy Cloud Blackout Curtain 2
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-2-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-11-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-1-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-9-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-blackout-curtain-1-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0745/cozy-cloud-curtain-6-xl.jpg",
  ],
  // Elinor Floral Mughal Linen Cotton Curtain
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202430/0294/elinor-floral-mughal-linen-cotton-curtain-1-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202430/0294/elinor-floral-mughal-linen-cotton-curtain-1-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202430/0293/elinor-floral-mughal-linen-cotton-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202430/0297/elinor-floral-mughal-linen-cotton-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202430/0295/elinor-floral-mughal-linen-cotton-curtain-xl.jpg",
  ],
  // Emery Linen Sheer Curtain
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202501/0040/custom-emery-linen-sheer-drape-white-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0004/emery-linen-sheer-curtain-1-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0005/open-box-emery-linen-sheer-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0005/open-box-emery-linen-sheer-curtain-1-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0088/emery-linen-sheer-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202437/0031/emery-linen-sheer-curtain-1-xl.jpg",
  ],
  // Emery Linen Sheer Curtain 2
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0002/emery-linen-sheer-curtain-6-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0002/emery-linen-sheer-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0002/emery-linen-sheer-curtain-4-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0002/emery-linen-sheer-curtain-3-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0002/emery-linen-sheer-curtain-5-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0002/emery-linen-sheer-curtain-gray-xl.jpg",
  ],
  // Новый подмассив 1
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0650/faye-textured-curtain-4-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0650/faye-textured-curtain-5-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0650/faye-textured-curtain-10-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0650/faye-textured-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0650/faye-textured-curtain-3-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0650/faye-textured-blackout-curtain-xl.jpg",
  ],
  // Новый подмассив 2
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0216/bernyce-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0218/bernyce-curtain-2-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0218/bernyce-curtain-3-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0216/bernyce-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0218/bernyce-curtain-1-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0016/open-box-bernyce-curtain-xl.jpg",
  ],
  // Новый подмассив 3
  [
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0476/blue-floral-blackout-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0476/blue-floral-blackout-curtain-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0479/blue-floral-blackout-curtain-4-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0479/blue-floral-blackout-curtain-2-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0479/blue-floral-blackout-curtain-3-xl.jpg",
    "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0479/blue-floral-blackout-curtain-xl.jpg",
  ],
];


const material = [
  "хлопок",
  "полиэстер",
  "жаккард",
  "лионский шелк",
  "бархат",
  "органза",
  "лен",
  "тюль",
  "велюр",
];

const collections = [
  "morning breeze",
  "midnight elegance",
  "warmth of nature",
  "classic charm",
  "vintage chic",
  "modern luxury",
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
  "nightshade",
  "velvetsilence",
  "dreamveil",
  "whispersoft",
  "eclipsedream",
  "moonlightmist",
  "serenityveil",
  "softglow",
  "cozyshade",
  "twilightsleep",
  "midnightdream",
  "dawnlight",
  "silkshadow",
  "starlightveil",
  "dreamhaze",
  "shadowrest",
  "gentlesleep",
  "calmwave",
  "cloudveil",
  "dreamline",
];



const products = [
  "легкие шторы",
  "роскошные шторы",
  "современные шторы",
  "тканевые шторы",
  "стильные шторы",
  "утепленные шторы",
  "элегантные шторы",
  "плотные шторы",
  "яркие шторы",
  "веселые шторы",
  "непрозрачные шторы",
  "флористические шторы",
  "классические шторы",
  "декоративные шторы",
  "премиум шторы",
];

const options = [
 
  {
    "тип крепления": ["на люверсах", "на штанге", "на петлях", "на крючках"],
  },
  {
    "тип шторы": ["тёмная", "светопроницаемая", "тюлевая", "теплоизоляционная"],
  },
  {
    "узор": ["однотонное", "в клетку", "в полоску", "с геометрическим узором", "с цветами", "флоральный"],
  },
  {
    "светопоглощение": ["непрозрачные", "полупрозрачные", "прозрачные"],
  },
  {
    "влажность ткани": ["водоотталкивающее", "стандартное", "с водоотталкивающей пропиткой"],
  },
  {
    "декор": ["с кружевом", "с вышивкой", "с бахромой", "без декора"],
  },
  {
    "плотность ткани": ["150 г/м²", "200 г/м²", "250 г/м²"],
  },
  {
    "защита от солнца": ["есть", "нет"],
  },
  {
    "антибактериальная обработка": ["есть", "нет"],
  },
];


const maintenance = [
  "Стирайте шторы перед первым использованием для удаления возможных загрязнений и запахов.",
  "Следуйте инструкциям по стирке, указанным на ярлыке, чтобы сохранить ткань в хорошем состоянии.",
  "Используйте мягкие моющие средства и избегайте агрессивных химикатов, чтобы не повредить ткань.",
  "Стирайте светлые и темные шторы отдельно, чтобы избежать их окрашивания.",
  "При стирке выворачивайте шторы наизнанку для защиты от излишнего износа.",
  "Не используйте отбеливатели для цветных тканей, чтобы избежать потери цвета.",
  "Для сохранения формы и структуры ткани избегайте перегрузки стиральной машины.",
  "Сушите шторы на свежем воздухе или в помещении с хорошей вентиляцией, чтобы избежать запахов.",
  "Гладьте шторы при температуре, подходящей для их материала, чтобы не повредить ткань.",
  "Не храните влажные шторы, чтобы избежать появления плесени и неприятных запахов.",
  "Регулярно чистите шторы, чтобы предотвратить накопление пыли и загрязнений.",
  "Храните шторы в сухом месте, вдали от прямых солнечных лучей, чтобы сохранить их внешний вид.",
  "Для сохранения свежести используйте ароматизированные саше или тканевые мешочки при хранении.",
  "Не допускайте попадания домашних животных на шторы, чтобы избежать повреждения ткани.",
  "Используйте деликатный режим отжима при стирке штор, чтобы избежать деформации ткани.",
];


const descriptions = [
  [
    "Шторы из натурального хлопка создают уют и гармонию в вашем интерьере. Легкие и дышащие, они идеально подходят для летних месяцев.",
    "Доступны в различных цветах и узорах, чтобы соответствовать любому стилю вашего помещения."
  ],
  [
    "Элегантные шторы из сатина с блеском придают интерьеру утончённость и стиль. Они создают атмосферу роскоши и комфорта.",
    "Идеальный выбор для создания изысканного интерьера, который привлечет внимание."
  ],
  [
    "Шторы из микрофибры долговечны, легко чистятся и быстро сохнут. Они сохраняют свою яркость даже после многих стирок.",
    "Подходят для интенсивного использования и идеально подходят для кухни или ванной."
  ],
  [
    "Роскошные шторы из шелка придают комнате элегантность и утонченность. Приятные на ощупь, они создают атмосферу уюта и стиля.",
    "Отличный выбор для создания роскошного интерьера в спальне или гостиной."
  ],
  [
    "Шторы из льна идеально подходят для создания расслабляющей и прохладной атмосферы в летний период. Зимой они сохраняют тепло и создают уют.",
    "Натуральные материалы становятся мягче с течением времени и придают комнате естественную красоту."
  ],
  [
    "Шторы для детской комнаты с яркими принтами и мягкой текстурой. Они создают атмосферу уюта и безопасности для вашего ребенка.",
    "Материалы гипоаллергенны и безопасны для чувствительной кожи малышей."
  ],
  [
    "Гипоаллергенные шторы из бамбуковых волокон обладают антибактериальными свойствами и сохраняют свежесть даже после длительного использования.",
    "Отлично подходят для людей с аллергиями и чувствительной кожей."
  ],
  [
    "Шторы с терморегулирующим эффектом обеспечивают комфорт в помещении в любое время года, создавая оптимальные условия для сна и отдыха.",
    "Изготавливаются из мягких и дышащих тканей, которые не теряют своей формы после стирки."
  ]
];


const packing = [
  {
    packing: {
      text: "Комплект штор аккуратно упакован в пластиковый пакет и помещён в картонную коробку для безопасной доставки.",
    },
  },
  {
    packing: {
      text: "Каждый комплект штор завернут в защитную плёнку, а коробка дополнительно защищена амортизирующими вставками.",
    },
  },
  {
    packing: {
      text: "Шторы упакованы в прочный пакет с воздухопроницаемой защитой, чтобы сохранить их свежесть и предотвратить повреждения.",
    },
  },
  {
    packing: {
      text: "Для защиты ткани от внешних воздействий комплект штор упакован в многослойную защитную плёнку.",
    },
  },
  {
    packing: {
      text: "Каждое изделие в комплекте индивидуально упаковано в защитную плёнку, а коробка снабжена мягкими прокладками для дополнительной безопасности.",
    },
  },
  {
    packing: {
      text: "Шторы упакованы в герметичный пакет с защитой от влаги и запахов, чтобы обеспечить их сохранность при транспортировке.",
    },
  },
  {
    packing: {
      text: "Комплект штор помещён в картонную коробку с амортизирующими элементами для защиты от механических повреждений.",
    },
  },
  {
    packing: {
      text: "Каждое изделие аккуратно сложено и упаковано в картонную коробку с защитной плёнкой для предотвращения повреждений.",
    },
  },
  {
    packing: {
      text: "Комплект штор запечатан в защитную плёнку и помещён в коробку с внутренней амортизацией для безопасной доставки.",
    },
  },
  {
    packing: {
      text: "Шторы упакованы в плотный пакет и снабжены дополнительной защитой в виде мягких прокладок в коробке.",
    },
  },
  {
    packing: {
      text: "Для безопасной транспортировки комплект штор упакован в картонную коробку с защитной плёнкой и амортизирующими вставками.",
    },
  },
  {
    packing: {
      text: "Шторы помещены в специальную упаковку с защитой от влаги и внешних воздействий для сохранности при перевозке.",
    },
  },
  {
    packing: {
      text: "Комплект штор упакован в индивидуальную упаковку и надежно помещён в коробку с дополнительными защитными материалами.",
    },
  },
  {
    packing: {
      text: "Шторы упакованы в герметичную упаковку и картонную коробку с амортизирующими элементами для безопасной доставки.",
    },
  },
];


const materials = [
  {
    materials: {
      "основной материал": "хлопок",
      основа: "100% хлопковая ткань с плотным переплетением",
      покрытие: "гладкое",
      декор: "с нежным цветочным узором",
    },
  },
  {
    materials: {
      обивка: "перкаль",
      основа: "натуральные волокна с высокой плотностью",
      наполнитель: "синтепон",
      спецификация: "дышащий и гипоаллергенный",
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
      "основной материал": "полиэстер",
      основа: "высокопрочный полиэстер, устойчивый к сминанию",
      покрытие: "глянцевое",
      декор: "с орнаментом из геометрических фигур",
    },
  },
  {
    materials: {
      обивка: "шелк",
      основа: "натуральный шелк с гладкой текстурой",
      наполнитель: "пуховое волокно",
      спецификация: "терморегуляция и гипоаллергенность",
    },
  },
  {
    materials: {
      "основной материал": "сатин",
      основа: "глянцевая сатиновая ткань с легким блеском",
      покрытие: "гладкое",
      декор: "с минималистичным узором",
    },
  },
  {
    materials: {
      обивка: "велюр",
      основа: "плотная ткань с мягким ворсом",
      наполнитель: "синтепон",
      спецификация: "устойчивость к износу и выцветанию",
    },
  },
  {
    materials: {
      "основной материал": "трикотаж",
      основа: "мягкая и эластичная ткань",
      покрытие: "гладкое",
      декор: "с рисунком в стиле ретро",
    },
  },
  {
    materials: {
      обивка: "микрофибра",
      основа: "ткань с водоотталкивающим покрытием и высокой износостойкостью",
      наполнитель: "синтепон",
      спецификация: "гипоаллергенность и антибактериальная обработка",
    },
  },
  {
    materials: {
      "основной материал": "хлопок",
      основа: "натуральный хлопок с плотным переплетением для повышенной прочности",
      покрытие: "гладкое",
      декор: "с мягким пастельным узором",
    },
  },
  {
    materials: {
      обивка: "бамбук",
      основа: "экологичный материал с антибактериальной обработкой",
      наполнитель: "пуховое волокно",
      спецификация: "свежесть и комфорт в летнее время",
    },
  },
  {
    materials: {
      "основной материал": "велюр",
      основа: "мягкий и уютный материал с бархатистой текстурой",
      покрытие: "гладкое",
      декор: "с крупными геометрическими узорами",
    },
  },
  {
    materials: {
      обивка: "перкаль",
      основа: "плотная хлопковая ткань с мягким прикосновением",
      наполнитель: "латекс",
      спецификация: "высокая воздухопроницаемость и комфорт",
    },
  },
  {
    materials: {
      "основной материал": "ткань с пропиткой",
      основа: "материалы с водоотталкивающей и антибактериальной пропиткой",
      покрытие: "матовое",
      декор: "с современными абстрактными узорами",
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
    ширина: [Math.round(random(300, 500) / 100) * 100],

    высота: [Math.round(random(300, 500) / 10) * 10],
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
