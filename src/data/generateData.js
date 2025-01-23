const advantages = {
  стулья: [
    {
      title: "Устойчивость к погодным условиям",
      text: "Уличные стулья разработаны с учетом воздействия внешней среды, они устойчивы к дождю, ветру и солнечным лучам.",
    },
    {
      title: "Легкость в хранении",
      text: "Эти стулья легко складываются и могут быть убраны на зиму или в случае ненадобности, что экономит место.",
    },
    {
      title: "Эргономичный дизайн",
      text: "Стулья подходят для долгого пребывания на улице, обеспечивая комфорт и поддержку спины.",
    },
    {
      title: "Долговечность",
      text: "Материалы, из которых изготовлены стулья, долговечны и не поддаются износу даже при частом использовании на открытом воздухе.",
    },
    {
      title: "Простота ухода",
      text: "Уличные стулья легко чистятся и не требуют сложного ухода, что делает их удобными для повседневного использования.",
    },
    {
      title: "Мобильность",
      text: "Стулья легко перемещать по территории, они подходят для использования в любых местах, на даче или в саду.",
    },
    {
      title: "Защита от ультрафиолетовых лучей",
      text: "Материалы стульев не выгорают на солнце, что позволяет сохранять их внешний вид в идеальном состоянии.",
    },
    {
      title: "Устойчивость к ветру",
      text: "Стулья не переворачиваются даже при сильном ветре, обеспечивая стабильность и безопасность.",
    },
    {
      title: "Удобство в использовании",
      text: "Стулья имеют оптимальный угол наклона спинки и сиденья для комфортного отдыха на открытом воздухе.",
    },
    {
      title: "Стильный внешний вид",
      text: "Уличные стулья могут быть выполнены в различных стилях, идеально подходящих для вашего внешнего интерьера.",
    },
  ],
  фонари: [
    {
      title: "Энергосбережение",
      text: "Уличные фонари оснащены энергосберегающими лампами, которые обеспечивают долгое освещение без больших затрат электроэнергии.",
    },
    {
      title: "Защита от влаги",
      text: "Фонари защищены от дождя и снега, что позволяет им работать в любых погодных условиях.",
    },
    {
      title: "Простота установки",
      text: "Уличные фонари легко устанавливаются на даче, в саду или на улице, и не требуют особых знаний в монтаже.",
    },
    {
      title: "Долговечность",
      text: "Высококачественные материалы и устойчивость к внешним воздействиям делают фонари надежными и долговечными.",
    },
    {
      title: "Регулируемая яркость",
      text: "Некоторые модели фонарей позволяют регулировать яркость освещения в зависимости от времени суток.",
    },
    {
      title: "Безопасность",
      text: "Уличные фонари обеспечивают безопасность, освещая участки на даче или во дворе, что уменьшает вероятность несчастных случаев.",
    },
    {
      title: "Декоративное освещение",
      text: "Фонари могут использоваться как декоративный элемент для создания уюта и атмосферы на вашем участке.",
    },
    {
      title: "Автоматическое включение",
      text: "Фонари с датчиками движения включаются автоматически, обеспечивая освещение по мере необходимости.",
    },
    {
      title: "Экологичность",
      text: "Фонари работают на солнечных батареях или используют энергосберегающие технологии, что помогает сократить углеродный след.",
    },
    {
      title: "Мобильность",
      text: "Некоторые модели фонарей можно легко перемещать по территории, создавая освещенные зоны в нужных местах.",
    },
  ],
  столы: [
    {
      title: "Устойчивость к внешним воздействиям",
      text: "Уличные столы защищены от воздействия солнечного света и дождя, благодаря чему сохраняют привлекательный вид на долгое время.",
    },
    {
      title: "Простота ухода",
      text: "Материалы, из которых сделаны столы, легко чистятся и не требуют сложного ухода.",
    },
    {
      title: "Практичность",
      text: "Эти столы подходят для различных мероприятий на открытом воздухе: пикников, барбекю или просто для отдыха в саду.",
    },
    {
      title: "Мобильность",
      text: "Уличные столы легко перемещать, что позволяет изменить расположение мебели в зависимости от настроения или погодных условий.",
    },
    {
      title: "Прочность",
      text: "Таблицы выполнены из прочных материалов, которые выдерживают ежедневное использование и экстремальные погодные условия.",
    },
    {
      title: "Многофункциональность",
      text: "Столы могут быть использованы для разных нужд: как стол для еды, рабочее место или место для хранения.",
    },
    {
      title: "Устойчивость к повреждениям",
      text: "Столы не поддаются механическим повреждениям, и легко восстанавливаются после царапин и других повреждений.",
    },
    {
      title: "Сложность монтажа",
      text: "Уличные столы легко собираются без необходимости в специализированных инструментах.",
    },
    {
      title: "Идеальные размеры",
      text: "Столы бывают разных размеров, что позволяет выбрать оптимальный вариант для вашего пространства.",
    },
    {
      title: "Экологичность материалов",
      text: "Материалы, использующиеся в уличных столах, экологически чистые и безопасны для здоровья человека и животных.",
    },
  ],
  диваны: [
    {
      title: "Комфорт на открытом воздухе",
      text: "Уличные диваны специально разработаны для того, чтобы обеспечивать комфорт и уют на свежем воздухе, будь то балкон или дача.",
    },
    {
      title: "Эстетичный внешний вид",
      text: "Мебель для улицы выполнена в различных стилях, что позволяет выбрать идеальный вариант для любого внешнего пространства.",
    },
    {
      title: "Устойчивость к погодным условиям",
      text: "Диваны для улицы изготовлены из материалов, устойчивых к дождю и солнечным лучам, что гарантирует долгий срок службы.",
    },
    {
      title: "Простота ухода",
      text: "Мебель не требует особого ухода и легко чистится, что удобно при использовании на улице.",
    },
    {
      title: "Удобство и функциональность",
      text: "Диваны обеспечивают отличный комфорт, а некоторые модели включают дополнительные места для хранения.",
    },
    {
      title: "Стойкость к пятнам",
      text: "Материалы, используемые в диванах, устойчивы к пятнам, что упрощает уход за мебелью.",
    },
    {
      title: "Эргономичный дизайн",
      text: "Эти диваны удобны для длительного сидения, поддерживают правильное положение тела и идеально подходят для отдыха на улице.",
    },
    {
      title: "Долговечность",
      text: "Диваны для улицы прочные и устойчивые к износу, что гарантирует их долгий срок службы при активном использовании.",
    },
    {
      title: "Экологичные материалы",
      text: "Мебель изготавливается из экологически чистых материалов, что делает ее безопасной для здоровья.",
    },
    {
      title: "Разнообразие стилей",
      text: "Диваны могут быть выполнены в различных стилях, от минималистичных до роскошных моделей, подходящих для любого внешнего оформления.",
    },
  ],
  кашпо: [
    {
      title: "Устойчивость к внешним воздействиям",
      text: "Уличные кашпо сделаны из материалов, которые не боятся дождя, снега и солнечных лучей, сохраняют свою форму и цвет на долгие годы.",
    },
    {
      title: "Подходит для любых растений",
      text: "Кашпо имеют разнообразные формы и размеры, что позволяет выбрать подходящий вариант для любого растения.",
    },
    {
      title: "Экологичность материалов",
      text: "Все кашпо изготовлены из безопасных и экологически чистых материалов, что делает их безопасными для растений и окружающей среды.",
    },
    {
      title: "Долговечность",
      text: "Материалы, из которых изготавливаются кашпо, защищают от быстрого износа и не теряют привлекательного внешнего вида с течением времени.",
    },
    {
      title: "Эстетика",
      text: "Уличные кашпо могут быть выполнены в различных дизайнах, идеально сочетающихся с ландшафтным дизайном вашего участка.",
    },
    {
      title: "Практичность",
      text: "Кашпо удобно использовать для озеленения и декорирования садовых участков, террас или балконов.",
    },
    {
      title: "Легкость в уходе",
      text: "Кашпо не требуют особого ухода, они легко очищаются и не теряют своей формы.",
    },
    {
      title: "Устойчивость к повреждениям",
      text: "Кашпо устойчивы к механическим повреждениям и могут служить долго при правильном уходе.",
    },
    {
      title: "Стойкость к выцветанию",
      text: "Кашпо не выгорают на солнце и не теряют яркости, что делает их долговечными в наружном использовании.",
    },
    {
      title: "Мобильность",
      text: "Некоторые кашпо можно легко перемещать по территории, что позволяет обновить внешний вид вашего сада или балкона.",
    },
  ],
};

const bestseller = [true, false];

const images = {
  кашпо: [
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0224/sienna-fiber-stone-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202452/0334/sienna-fibre-stone-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0916/sienna-fibre-stone-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0925/sienna-fibre-stone-outdoor-planters-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202434/0031/sienna-fibre-stone-outdoor-planters-3-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0912/sienna-fibre-stone-outdoor-planters-xl.jpg",
    ],
    // Eclectic Villa Outdoor Planters
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0003/eclectic-villa-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0915/eclectic-villa-outdoor-planters-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202436/0003/artisan-handcrafted-terracotta-vase-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202452/0335/eclectic-villa-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0915/eclectic-villa-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202452/0335/eclectic-villa-outdoor-planters-1-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0036/img115xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0033/modern-rustic-fluted-outdoor-planters-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0041/img132xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0072/modern-rustic-fluted-outdoor-planters-2-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0072/modern-rustic-fluted-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0033/modern-rustic-fluted-outdoor-planters-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0890/sedona-handcrafted-stone-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0888/sedona-handcrafted-stone-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202439/0451/sedona-handcrafted-stone-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0086/sedona-handcrafted-stone-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0881/sedona-handcrafted-stone-outdoor-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0892/sedona-handcrafted-stone-outdoor-planters-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0138/elena-planters-4-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0137/elena-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0138/elena-planters-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0137/elena-planters-10-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0138/elena-planters-2-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0137/elena-planters-4-xl.jpg",
    ],
  ],
  диваны: [
    // Lakewood Rope Outdoor Sofa
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0792/lakewood-rope-outdoor-sofa-76-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0794/lakewood-rope-outdoor-sofa-76-2-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0794/lakewood-rope-outdoor-sofa-76-3-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0499/lakewood-rope-outdoor-loveseat-xx-2-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0499/lakewood-rope-outdoor-loveseat-xx-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0499/lakewood-rope-outdoor-loveseat-xx-5-xl.jpg",
    ],
    // Huntington Wicker Slope Arm Outdoor Sofa
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0004/huntington-wicker-slope-arm-outdoor-sofa-84-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0002/huntington-wicker-slope-arm-outdoor-sofa-84-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0002/huntington-wicker-slope-arm-outdoor-sofa-84-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202440/0003/build-your-own-huntington-wicker-slope-arm-ultimate-outdoo-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0876/huntington-wicker-4-piece-slope-arm-outdoor-sectional-100-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202440/0007/huntington-wicker-slope-arm-outdoor-sofa-84-xl.jpg",
    ],
    // Kostas Wicker Outdoor Sofa
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0821/kostas-wicker-outdoor-sofa-88-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0528/kostas-wicker-outdoor-sofa-xx-2-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0528/kostas-wicker-outdoor-sofa-xx-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0069/kostas-wicker-outdoor-sofa-88-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0069/kostas-wicker-outdoor-sofa-88-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0853/kostas-wicker-outdoor-sofa-88-1-xl.jpg",
    ],
    // Indio Wood Modern Outdoor Sofa
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202443/0003/indio-wood-modern-outdoor-sofa-77-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202441/0005/indio-wood-modern-outdoor-sofa-77-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202441/0004/indio-wood-modern-outdoor-sofa-77-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202452/0468/indio-eucalyptus-modern-platform-outdoor-sofa-77-5-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202441/0006/indio-wood-modern-outdoor-sofa-77-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202436/0019/indio-wood-modern-outdoor-sofa-77-1-xl.jpg",
    ],
  ],
  стулья: [
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202452/0058/huntington-wicker-slope-arm-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0877/huntington-wicker-slope-arm-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202435/0009/huntington-wicker-slope-arm-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0875/huntington-wicker-slope-arm-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0880/huntington-wicker-slope-arm-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202452/0058/huntington-wicker-slope-arm-swivel-outdoor-lounge-chair-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202438/0194/malibu-metal-platform-swivel-outdoor-lounge-chair-2-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0087/malibu-metal-platform-swivel-outdoor-lounge-chair-2-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0089/malibu-metal-platform-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202438/0194/malibu-metal-platform-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202438/0194/malibu-metal-platform-swivel-outdoor-lounge-chair-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202438/0194/malibu-metal-platform-swivel-outdoor-lounge-chair-4-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0216/tulum-wicker-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202440/0002/tulum-wicker-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202440/0003/tulum-wicker-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202440/0003/tulum-wicker-swivel-outdoor-lounge-chair-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0220/tulum-wicker-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0220/tulum-wicker-swivel-outdoor-lounge-chair-3-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0726/lakewood-rope-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0533/lakewood-rope-swivel-outdoor-lounge-chair-4-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0533/lakewood-rope-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202446/0533/lakewood-rope-swivel-outdoor-lounge-chair-3-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0726/lakewood-rope-swivel-outdoor-lounge-chair-3-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0692/lakewood-rope-swivel-outdoor-lounge-chair-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202451/0022/torrey-wicker-papasan-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0898/torrey-wicker-papasan-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202451/0023/torrey-wicker-papasan-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0869/torrey-outdoor-furniture-cushion-covers-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0892/torrey-wicker-papasan-swivel-outdoor-lounge-chair-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0896/torrey-wicker-papasan-swivel-outdoor-lounge-chair-xl.jpg",
    ],
  ],

  фонари: [
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0884/taylor-lantern-collection-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0885/taylor-lantern-collection-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0889/taylor-lantern-collection-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0897/taylor-lantern-collection-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/1079/img190xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0889/taylor-lantern-collection-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202452/0115/open-box-brooks-cross-bar-steel-glass-outdoor-lantern-2-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202452/0115/open-box-brooks-cross-bar-steel-glass-outdoor-lantern-3-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202452/0115/open-box-brooks-cross-bar-steel-glass-outdoor-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202437/0037/brooks-cross-bar-steel-glass-outdoor-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0884/brooks-cross-bar-steel-glass-outdoor-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0882/envelope-mailbox-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/1179/gale-metal-outdoor-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/1179/gale-metal-outdoor-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/1184/gale-metal-outdoor-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/1181/gale-metal-outdoor-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/1174/gale-metal-outdoor-lantern-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202438/0200/easton-forged-iron-outdoor-lantern-4-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202438/0200/easton-forged-iron-outdoor-lantern-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0889/easton-forged-iron-outdoor-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0030/easton-forged-iron-outdoor-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0028/easton-forged-iron-outdoor-lantern-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202450/0617/avila-stamped-outdoor-coffee-table-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0095/blair-solar-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0096/blair-solar-lantern-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0096/blair-solar-lantern-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0096/blair-solar-lantern-3-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0096/blair-solar-lantern-2-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202444/0095/blair-solar-lantern-1-xl.jpg",
    ],
  ],
  столы: [
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0023/indio-eucalyptus-x-base-extending-outdoor-dining-table-77--xl.jpg",
      " https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0026/indio-eucalyptus-x-base-extending-outdoor-dining-table-77--xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0025/indio-eucalyptus-x-base-extending-outdoor-dining-table-77--xl.jpg",

      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202440/0008/indio-eucalyptus-x-base-extending-outdoor-dining-table-77--xl.jpg",

      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202437/0664/indio-eucalyptus-x-base-extending-outdoor-dining-table-77--xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202440/0008/indio-eucalyptus-x-base-extending-outdoor-dining-table-77--1-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0913/pomona-concrete-acacia-rectangular-outdoor-dining-table-86-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0009/pomona-concrete-acacia-rectangular-outdoor-dining-table-86-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202449/0006/pomona-concrete-acacia-rectangular-outdoor-dining-table-86-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0923/pomona-concrete-acacia-rectangular-outdoor-dining-table-86-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0910/pomona-concrete-acacia-rectangular-outdoor-dining-table-86-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0927/pomona-concrete-acacia-rectangular-outdoor-dining-table-86-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202503/0924/malibu-metal-extending-rectangular-outdoor-dining-table-76-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202440/0002/malibu-metal-extending-rectangular-outdoor-dining-table-76-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202437/0029/malibu-metal-extending-rectangular-outdoor-dining-table-76-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202437/0031/malibu-metal-extending-rectangular-outdoor-dining-table-76-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202437/0033/malibu-metal-extending-rectangular-outdoor-dining-table-76-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202440/0002/malibu-metal-extending-rectangular-outdoor-dining-table-76-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0089/indio-concrete-eucalyptus-x-base-outdoor-dining-table-72-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0086/indio-concrete-eucalyptus-x-base-outdoor-dining-table-72-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0088/indio-concrete-eucalyptus-x-base-outdoor-dining-table-72-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0085/indio-concrete-eucalyptus-x-base-outdoor-dining-table-72-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0085/indio-concrete-eucalyptus-x-base-outdoor-dining-table-72-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202502/0088/indio-concrete-eucalyptus-x-base-outdoor-dining-table-72-xl.jpg",
    ],
    [
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0590/riviera-72-metal-dining-table-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0590/riviera-72-metal-dining-table-1-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0756/riviera-metal-rectangular-outdoor-dining-table-72-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0755/riviera-metal-rectangular-outdoor-dining-table-72-5-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0755/riviera-metal-rectangular-outdoor-dining-table-72-4-xl.jpg",
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202442/0755/riviera-metal-rectangular-outdoor-dining-table-72-1-xl.jpg",
    ],
  ],
};

const material = {
  стулья: ["дерево", "металл", "пластик", "кожа", "ротанг"],
  фонари: ["сталь", "стекло", "алюминий", "медь", "пластик"],
  столы: ["дерево", "стекло", "металл", "камень", "МДФ"],
  диваны: ["ткань", "кожа", "искусственная кожа", "дерево", "поролон"],
  кашпо: ["керамика", "пластик", "бетон", "металл", "дерево"],
};

const collections = ["стулья", "фонари", "столы", "диваны", "кашпо"];

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

const names = {
  стулья: ["sitflow", "relaxform", "zenchair", "seatmate", "woodbliss"],
  фонари: ["glowlite", "brightbeam", "lanternova", "lumeorb", "shineflare"],
  столы: ["tablecraft", "flatwood", "stonetop", "metalscape", "glassform"],
  диваны: [
    "sofasage",
    "cushrealm",
    "dreamlounger",
    "comfortcloud",
    "plushzone",
  ],
  кашпо: ["plantnest", "greenspire", "potbliss", "rootrock", "floraform"],
};
const products = {
  стулья: [
    "комфортный стул",
    "садовый стул",
    "классический стул",
    "просторный стул",
    "эстетичный стул",
  ],
  фонари: [
    "умный фонарь",
    "зарядный фонарь",
    "декоративный фонарь",
    "солнечный фонарь",
    "мобильный фонарь",
  ],
  столы: [
    "расширяемый стол",
    "компактный стол",
    "раздвижной стол",
    "современный стол",
    "компактный стол",
  ],
  диваны: [
    "угловой диван",
    "комфортный диван",
    "трансформируемый диван",
    "просторный диван",
    "компактный диван",
    "премиум диван",
    "современный диван",
    "классический диван",
    "уютный диван",
  ],
  кашпо: [
    "стильное кашпо",
    "декоративное кашпо",
    "роскошное кашпо",
    "премиум кашпо",
    "винтажное кашпо",
  ],
};

const options = {
  стулья: [
    {
      "тип сиденья": ["с подушкой", "без подушки"],
    },
    {
      "регулировка высоты": ["есть", "нет"],
    },
    {
      подлокотники: ["с подлокотниками", "без подлокотников"],
    },
    {
      "устойчивость к погодным условиям": ["влагостойкие", "не влагостойкие"],
    },

    {
      "съемный чехол": ["да", "нет"],
    },
    {
      "антискользящая база": ["есть", "нет"],
    },
    {
      "поставка в комплекте": ["с подставкой для ног", "без подставки для ног"],
    },

    {
      сборка: ["не требует сборки", "требует сборки"],
    },
  ],
  фонари: [
    {
      "тип освещения": ["светодиодный", "галогенный", "флуоресцентный"],
    },
    {
      "тип батареек": ["AA", "AAA", "литий-ионный аккумулятор"],
    },
    {
      мощность: ["менее 5 Вт", "5-10 Вт", "более 10 Вт"],
    },
    {
      "регулировка яркости": ["есть", "нет"],
    },
    {
      "защита от дождя": ["водостойкие", "не водостойкие"],
    },
    {
      "цвет света": ["теплый", "холодный", "нейтральный"],
    },
    {
      управление: ["с пультом", "без пульта", "сенсорное"],
    },

    {
      "тип крепления": ["настенный", "напольный", "подвесной"],
    },
    {
      "время работы": ["до 6 часов", "6-12 часов", "более 12 часов"],
    },
  ],
  столы: [
    {
      "тип столешницы": ["дерево", "стекло", "металл"],
    },
    {
      "регулировка высоты": ["есть", "нет"],
    },
    {
      мобильность: ["с колесами", "без колес"],
    },
    {
      "съемная столешница": ["да", "нет"],
    },
    {
      форма: ["круглый", "прямоугольный", "квадратный"],
    },
    {
      "количество ящиков": ["1", "2", "3 и более"],
    },
    {
      "подставка для ног": ["есть", "нет"],
    },

    {
      "подставка в комплекте": ["с подставками для напитков", "без подставок"],
    },
  ],
  диваны: [
    {
      "материал обивки": ["ткань", "кожа", "искусственная кожа"],
    },
    {
      "тип механизма трансформации": ["раскладной", "выкатной", "книжка"],
    },
    {
      "наличие подушек": ["с подушками", "без подушек"],
    },
    {
      "регулировка наклона спинки": ["есть", "нет"],
    },
    {
      "встроенный столик": ["есть", "нет"],
    },
    {
      компактность: ["для небольшой комнаты", "для просторной комнаты"],
    },
    {
      "съемный чехол": ["да", "нет"],
    },
  ],
  кашпо: [
    {
      "тип установки": ["на подставке", "на земле", "на стене"],
    },
    {
      "защита от перегрева": ["есть", "нет"],
    },
    {
      "тип кашпо": ["с поддоном", "без поддона"],
    },

    {
      "антибактериальная обработка": ["есть", "нет"],
    },
    {
      "устойчивость к морозам": ["есть", "нет"],
    },
    {
      вентиляция: ["есть", "нет"],
    },

    {
      покрытие: ["гладкое", "матовое", "грубое"],
    },
    {
      "экологичность материала": ["экологически чистое", "стандартное"],
    },
  ],
};

const maintenance = {
  стулья: [
    "Регулярно протирайте стул влажной тряпкой, чтобы избежать накопления пыли и грязи.",
    "Проверяйте ножки стула на предмет повреждений или износа, чтобы избежать его шатания.",
    "При необходимости очищайте стул с помощью мягких моющих средств.",
    "Не ставьте стул на слишком горячие поверхности, чтобы избежать повреждения покрытия.",
    "Регулярно осматривайте спинку и сиденье стула на наличие повреждений и зацепок.",
    "Для деревянных стульев используйте специальные восковые или масляные покрытия для защиты древесины.",
    "Не подвергайте стул прямому воздействию солнечных лучей, чтобы предотвратить выцветание материала.",
    "При сильных загрязнениях используйте специализированные средства для очистки ткани или кожи.",
    "Для стульев с мягким наполнителем периодически заменяйте наполнитель для поддержания формы.",
    "Храните стулья в сухом месте, чтобы избежать воздействия влаги и появления плесени.",
  ],
  фонари: [
    "Очистите фонарь от пыли и грязи с помощью мягкой тряпки или щетки.",
    "Для солнечных фонарей периодически очищайте солнечные панели от пыли, чтобы они эффективно заряжались.",
    "При использовании на улице защищайте фонарь от дождя и снега.",
    "Не оставляйте фонарь включенным на долгое время, чтобы продлить срок службы батарей.",
    "Если фонарь с солнечным аккумулятором, убедитесь, что он находится в месте, где есть достаточно света.",
    "Регулярно проверяйте работоспособность ламп и батарей в фонаре.",
    "Храните фонарь в сухом месте, чтобы избежать его повреждения.",
    "Не используйте фонарь при сильном ветре, чтобы избежать повреждения.",
    "Избегайте перегрева фонаря на солнечном свете в жаркую погоду.",
    "Используйте специальные средства для очистки стеклянных частей фонаря от пятен и загрязнений.",
  ],
  столы: [
    "Протирайте стол влажной тканью, чтобы избежать скопления пыли.",
    "Не ставьте горячие предметы прямо на поверхность стола, чтобы избежать повреждения покрытия.",
    "Регулярно проверяйте стол на устойчивость и при необходимости затягивайте крепления.",
    "Если стол из дерева, используйте специализированные средства для ухода за древесиной.",
    "Не допускайте попадания влаги на деревянные поверхности, чтобы избежать их повреждения.",
    "Не ставьте на стол слишком тяжелые предметы, чтобы избежать его деформации.",
    "Используйте подставки или коврики для защиты стола от царапин.",
    "При необходимости, снимайте декоративные элементы с поверхности стола, чтобы не повредить их.",
    "Для стола с мягким покрытием используйте средства для чистки ткани или кожи.",
    "Храните стол в сухом и проветриваемом помещении, чтобы избежать появления плесени или запахов.",
  ],
  диваны: [
    "Регулярно пылесосьте диван для удаления пыли и волос.",
    "При необходимости протирайте поверхность дивана влажной тряпкой.",
    "Для кожи используйте специальные средства по уходу за кожей, чтобы сохранить ее мягкость и цвет.",
    "Не допускайте попадания влаги на тканевые поверхности дивана.",
    "Периодически осматривайте диван на наличие повреждений, таких как трещины или потертости.",
    "Используйте защитные чехлы для дивана, чтобы уменьшить износ ткани.",
    "Не оставляйте диван под прямыми солнечными лучами, чтобы избежать выцветания ткани.",
    "При необходимости стирайте съемные чехлы в соответствии с инструкцией.",
    "Для поддержания формы дивана периодически заменяйте наполнители подушек.",
    "Не перегружайте диван тяжелыми предметами, чтобы избежать его деформации.",
  ],
  кашпо: [
    "Очистите кашпо от грязи и пыли с помощью мягкой ткани.",
    "Для кашпо с растениями регулярно проверяйте дренажные отверстия, чтобы предотвратить застой воды.",
    "Не ставьте кашпо на сильно нагреваемые поверхности, чтобы избежать повреждения материала.",
    "Для пластиковых кашпо используйте средства для очистки от загрязнений, чтобы поддерживать их внешний вид.",
    "Избегайте попадания воды на наружные части кашпо в зимний период, чтобы предотвратить его замерзание.",
    "Периодически проверяйте состояние корней растений и меняйте грунт в кашпо.",
    "При сильных загрязнениях кашпо можно помыть теплой водой с мягким моющим средством.",
    "Не оставляйте кашпо на улице в условиях сильного ветра, чтобы избежать его повреждения.",
    "Регулярно очищайте внешнюю поверхность от пыли и грязи для поддержания внешнего вида.",
    "Для защиты от перепадов температуры используйте утеплители для кашпо в зимнее время.",
  ],
};

const descriptions = {
  стулья: [
    [
      "Элегантный стул с мягким сиденьем и стильной спинкой добавит изысканности в ваш интерьер. Подходит для долгих сидений за столом.",
      "Этот стул выполнен из качественных материалов, обеспечивающих надежность и комфорт.",
    ],
    [
      "Легкий и удобный стул с современным дизайном. Подходит для гостиной, кухни или рабочего кабинета.",
      "Простой, но элегантный стул с прочной конструкцией, идеально вписывается в любой стиль интерьера.",
    ],
    [
      "Прочный и комфортный стул для рабочего кабинета, обеспечивающий отличную поддержку спины.",
      "Стул с регулируемой высотой и эргономичной спинкой для максимального комфорта.",
    ],
    [
      "Стул с мягким сиденьем и стильными металлическими ножками подходит для модных и современных интерьеров.",
      "Компактный и стильный стул для небольших помещений, создающий уют и комфорт.",
    ],
    [
      "Модерн стул с высококачественными материалами и уникальной конструкцией, идеально подходящий для вашего дома.",
      "Удобный стул с высокой спинкой, создающий дополнительную поддержку для спины.",
    ],
  ],
  фонари: [
    [
      "Элегантный настольный фонарь с регулировкой яркости, создающий мягкое освещение в любое время суток.",
      "Фонарь с ярким и теплым светом, который подойдет для создания уютной атмосферы в вашем интерьере.",
    ],
    [
      "Классический стильный фонарь, который идеально впишется в минималистичный интерьер и обеспечит достаточно света.",
      "Практичный и красивый фонарь, который можно использовать как декоративный элемент, так и для функционального освещения.",
    ],
    [
      "Современный фонарь с уникальным дизайном, который привнесет современный стиль в ваше пространство.",
      "Фонарь с регулируемым углом наклона, который идеально подойдет для чтения или работы.",
    ],
    [
      "Маленький, но мощный светильник, который удобно разместить на столе или на полке.",
      "Уличный фонарь с долговечными материалами, идеально подходящий для садов и дворов.",
    ],
    [
      "Фонарь с интегрированным датчиком движения, который автоматически включается при обнаружении движения.",
      "Энергосберегающий фонарь с LED лампами, который идеально подойдет для длительного использования.",
    ],
  ],
  столы: [
    [
      "Современный стол с минималистичным дизайном, который идеально подойдет для офиса или кухни.",
      "Стол с деревянной столешницей и металлическими ножками, создающий теплую атмосферу в вашем доме.",
    ],
    [
      "Уютный стол с прочной конструкцией, который станет центром внимания в вашем интерьере.",
      "Большой стол для рабочего кабинета с удобной функциональностью и современным дизайном.",
    ],
    [
      "Компактный стол с элегантным дизайном, идеально подходящий для небольших помещений.",
      "Стол с раздвижной конструкцией, позволяющим легко изменять размер стола для разных нужд.",
    ],
    [
      "Стилизация стола в ретро-стиле, который добавит нотки винтажного шарма в ваше пространство.",
      "Простой и функциональный стол, который идеально сочетает в себе комфорт и стиль.",
    ],
    [
      "Минималистичный стол с прямыми линиями и красивой отделкой, который впишется в любой интерьер.",
      "Стол с большой рабочей поверхностью и множеством полок для хранения, идеален для вашего кабинета.",
    ],
  ],
  диваны: [
    [
      "Комфортабельный диван с мягкими подушками, идеально подходящий для долгих вечеров в гостиной.",
      "Диван с высокой спинкой и глубокими сиденьями, который обеспечит максимальный комфорт для отдыха.",
    ],
    [
      "Удобный диван с регулируемыми подголовниками и подлокотниками, подходящий для удобного расположения.",
      "Элегантный диван с текстурированным покрытием, который добавит стиль в любой интерьер.",
    ],
    [
      "Современный угловой диван, который удобно разместится в углу и обеспечит простор для всей семьи.",
      "Мягкий и компактный диван, идеально подходящий для небольших квартир или студий.",
    ],
    [
      "Прочный диван с отличной поддержкой для спины, идеально подходящий для комфортного сидения.",
      "Диван с модульной конструкцией, позволяющей изменять форму в зависимости от ваших потребностей.",
    ],
    [
      "Роскошный диван с мягкой обивкой и высокой спинкой, который станет главным элементом интерьера.",
      "Диван с удобными подушками и прочной конструкцией, обеспечивающий долгосрочную эксплуатацию.",
    ],
  ],
  кашпо: [
    [
      "Простое и элегантное кашпо из керамики, которое идеально подойдет для растений с корнями среднего размера.",
      "Красивое кашпо в стиле минимализм, которое добавит изысканности в ваш интерьер.",
    ],
    [
      "Стильное кашпо с необычной формой, которое станет ярким акцентом в комнате.",
      "Эстетичное кашпо с гладкой поверхностью и простым дизайном для создания уютной атмосферы.",
    ],
    [
      "Кашпо с ярким рисунком и фактурной поверхностью, которое добавит цвета в любой интерьер.",
      "Удобное кашпо с дренажными отверстиями, которое предотвратит застой воды и обеспечит здоровый рост растений.",
    ],
    [
      "Легкое пластиковое кашпо с красивым дизайном, подходящее для различных комнатных растений.",
      "Кашпо в виде подставки с множеством отделений для удобного размещения растений.",
    ],
    [
      "Кашпо с керамическим покрытием, которое отлично удерживает влагу и подходит для мелких растений.",
      "Эко-кашпо из натуральных материалов, идеальное для любителей природных текстур.",
    ],
  ],
};

const packing = {
  стулья: [
    {
      packing: {
        text: "Каждый стул аккуратно упакован в защитную плёнку и помещен в картонную коробку для безопасной транспортировки.",
      },
    },
    {
      packing: {
        text: "Стул обернут в многослойную защитную плёнку, а коробка дополнительно защищена амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Стул упакован в прочный пакет с защитой от влаги, чтобы сохранить его форму и предотвратить повреждения.",
      },
    },
    {
      packing: {
        text: "Для защиты стула от внешних воздействий, он упакован в многослойную защитную пленку и помещен в картонную коробку.",
      },
    },
    {
      packing: {
        text: "Каждый стул упакован в защитную плёнку, а коробка снабжена мягкими прокладками для безопасности при транспортировке.",
      },
    },
    {
      packing: {
        text: "Стул упакован в герметичный пакет с защитой от влаги и запахов для безопасной перевозки.",
      },
    },
    {
      packing: {
        text: "Стул помещен в картонную коробку с амортизирующими элементами для защиты от механических повреждений.",
      },
    },
    {
      packing: {
        text: "Каждый стул аккуратно сложен и упакован в картонную коробку с защитной плёнкой для предотвращения повреждений.",
      },
    },
    {
      packing: {
        text: "Стул запечатан в защитную плёнку и помещен в коробку с амортизирующими элементами для безопасной транспортировки.",
      },
    },
    {
      packing: {
        text: "Стул упакован в плотный пакет и снабжен мягкими прокладками для защиты в коробке.",
      },
    },
    {
      packing: {
        text: "Для безопасной транспортировки, стул упакован в картонную коробку с защитной плёнкой и амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Стул помещен в специальную упаковку с защитой от влаги и внешних воздействий для сохранности при перевозке.",
      },
    },
    {
      packing: {
        text: "Каждый стул упакован в индивидуальную упаковку и надежно помещен в коробку с дополнительными защитными материалами.",
      },
    },
  ],
  фонари: [
    {
      packing: {
        text: "Каждый фонарь аккуратно упакован в защитную плёнку и помещен в картонную коробку для безопасной доставки.",
      },
    },
    {
      packing: {
        text: "Фонарь завернут в многослойную защитную плёнку, а коробка дополнительно защищена амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Фонарь упакован в прочный пакет с воздухопроницаемой защитой, чтобы сохранить его форму и предотвратить повреждения.",
      },
    },
    {
      packing: {
        text: "Для защиты фонаря от внешних воздействий, он упакован в многослойную защитную плёнку и помещен в картонную коробку.",
      },
    },
    {
      packing: {
        text: "Каждый фонарь индивидуально упакован в защитную плёнку, а коробка снабжена мягкими прокладками для безопасности при транспортировке.",
      },
    },
    {
      packing: {
        text: "Фонарь упакован в герметичный пакет с защитой от влаги и запахов, чтобы обеспечить сохранность при перевозке.",
      },
    },
    {
      packing: {
        text: "Фонарь помещен в картонную коробку с амортизирующими элементами для защиты от механических повреждений.",
      },
    },
    {
      packing: {
        text: "Каждый фонарь аккуратно сложен и упакован в картонную коробку с защитной плёнкой для предотвращения повреждений.",
      },
    },
    {
      packing: {
        text: "Фонарь запечатан в защитную плёнку и помещен в коробку с амортизирующими элементами для безопасной транспортировки.",
      },
    },
    {
      packing: {
        text: "Фонарь упакован в плотный пакет и снабжен дополнительной защитой в виде мягких прокладок в коробке.",
      },
    },
    {
      packing: {
        text: "Для безопасной транспортировки фонарь упакован в картонную коробку с защитной плёнкой и амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Фонарь помещен в специальную упаковку с защитой от влаги и внешних воздействий для сохранности при перевозке.",
      },
    },
    {
      packing: {
        text: "Каждый фонарь упакован в индивидуальную упаковку и надежно помещен в коробку с дополнительными защитными материалами.",
      },
    },
  ],
  столы: [
    {
      packing: {
        text: "Каждый стол аккуратно упакован в защитную плёнку и помещен в картонную коробку для безопасной транспортировки.",
      },
    },
    {
      packing: {
        text: "Стол обернут в многослойную защитную плёнку, а коробка дополнительно защищена амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Стол упакован в прочный пакет с защитой от влаги, чтобы сохранить его форму и предотвратить повреждения.",
      },
    },
    {
      packing: {
        text: "Для защиты стола от внешних воздействий, он упакован в многослойную защитную пленку и помещен в картонную коробку.",
      },
    },
    {
      packing: {
        text: "Каждый стол упакован в защитную плёнку, а коробка снабжена мягкими прокладками для безопасности при транспортировке.",
      },
    },
    {
      packing: {
        text: "Стол упакован в герметичный пакет с защитой от влаги и запахов для безопасной перевозки.",
      },
    },
    {
      packing: {
        text: "Стол помещен в картонную коробку с амортизирующими элементами для защиты от механических повреждений.",
      },
    },
    {
      packing: {
        text: "Каждый стол аккуратно сложен и упакован в картонную коробку с защитной плёнкой для предотвращения повреждений.",
      },
    },
    {
      packing: {
        text: "Стол запечатан в защитную плёнку и помещен в коробку с амортизирующими элементами для безопасной транспортировки.",
      },
    },
    {
      packing: {
        text: "Стол упакован в плотный пакет и снабжен мягкими прокладками для защиты в коробке.",
      },
    },
    {
      packing: {
        text: "Для безопасной транспортировки, стол упакован в картонную коробку с защитной плёнкой и амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Стол помещен в специальную упаковку с защитой от влаги и внешних воздействий для сохранности при перевозке.",
      },
    },
  ],
  диваны: [
    {
      packing: {
        text: "Каждый диван аккуратно упакован в защитную плёнку и помещен в картонную коробку для безопасной доставки.",
      },
    },
    {
      packing: {
        text: "Диван завернут в многослойную защитную плёнку, а коробка дополнительно защищена амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Диван упакован в прочный пакет с воздухопроницаемой защитой, чтобы сохранить его форму и предотвратить повреждения.",
      },
    },
    {
      packing: {
        text: "Для защиты дивана от внешних воздействий, он упакован в многослойную защитную плёнку и помещен в картонную коробку.",
      },
    },
    {
      packing: {
        text: "Каждый диван индивидуально упакован в защитную плёнку, а коробка снабжена мягкими прокладками для безопасности при транспортировке.",
      },
    },
    {
      packing: {
        text: "Диван упакован в герметичный пакет с защитой от влаги и запахов, чтобы обеспечить сохранность при перевозке.",
      },
    },
    {
      packing: {
        text: "Диван помещен в картонную коробку с амортизирующими элементами для защиты от механических повреждений.",
      },
    },
    {
      packing: {
        text: "Каждый диван аккуратно сложен и упакован в картонную коробку с защитной плёнкой для предотвращения повреждений.",
      },
    },
    {
      packing: {
        text: "Диван запечатан в защитную плёнку и помещен в коробку с амортизирующими элементами для безопасной транспортировки.",
      },
    },
    {
      packing: {
        text: "Диван упакован в плотный пакет и снабжен дополнительной защитой в виде мягких прокладок в коробке.",
      },
    },
    {
      packing: {
        text: "Для безопасной транспортировки, диван упакован в картонную коробку с защитной плёнкой и амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Диван помещен в специальную упаковку с защитой от влаги и внешних воздействий для сохранности при перевозке.",
      },
    },
  ],
  кашпо: [
    {
      packing: {
        text: "Каждое кашпо аккуратно упаковано в защитную плёнку и помещено в картонную коробку для безопасной транспортировки.",
      },
    },
    {
      packing: {
        text: "Кашпо завернуто в многослойную защитную плёнку, а коробка дополнительно защищена амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Кашпо упаковано в прочный пакет с воздухопроницаемой защитой, чтобы сохранить его форму и предотвратить повреждения.",
      },
    },
    {
      packing: {
        text: "Для защиты кашпо от внешних воздействий, оно упаковано в многослойную защитную плёнку и помещено в картонную коробку.",
      },
    },
    {
      packing: {
        text: "Каждое кашпо упаковано в защитную плёнку, а коробка снабжена мягкими прокладками для безопасности при транспортировке.",
      },
    },
    {
      packing: {
        text: "Кашпо упаковано в герметичный пакет с защитой от влаги и запахов для безопасной перевозки.",
      },
    },
    {
      packing: {
        text: "Кашпо помещено в картонную коробку с амортизирующими элементами для защиты от механических повреждений.",
      },
    },
    {
      packing: {
        text: "Каждое кашпо аккуратно сложено и упаковано в картонную коробку с защитной плёнкой для предотвращения повреждений.",
      },
    },
    {
      packing: {
        text: "Кашпо запечатано в защитную плёнку и помещено в коробку с амортизирующими элементами для безопасной транспортировки.",
      },
    },
    {
      packing: {
        text: "Кашпо упаковано в плотный пакет и снабжено дополнительной защитой в виде мягких прокладок в коробке.",
      },
    },
    {
      packing: {
        text: "Для безопасной транспортировки, кашпо упаковано в картонную коробку с защитной плёнкой и амортизирующими вставками.",
      },
    },
    {
      packing: {
        text: "Кашпо помещено в специаxльную упаковку с защитой от влаги и внешних воздействий для сохранности при перевозке.",
      },
    },
  ],
};

const materials = {
  стулья: [
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
        обивка: "полиэстер",
        основа: "высокопрочный полиэстер с водоотталкивающим покрытием",
        наполнитель: "пенные гранулы",
        спецификация: "устойчивость к износу и гипоаллергенность",
      },
    },
  ],
  фонари: [
    {
      materials: {
        "основной материал": "металл",
        основа: "нержавеющая сталь",
        покрытие: "матовое или глянцевое",
        декор: "без дополнительных украшений",
      },
    },
    {
      materials: {
        обивка: "алюминий",
        основа: "прочный и легкий металл",
        покрытие: "антикоррозийное",
        спецификация: "влагозащита и устойчивость к ржавчине",
      },
    },
  ],
  столы: [
    {
      materials: {
        "основной материал": "дуб",
        основа: "натуральное дерево",
        покрытие: "масляное или лаковое",
        декор: "с деревянной текстурой",
      },
    },
    {
      materials: {
        "основной материал": "пластик",
        основа: "ABS-пластик с высокой прочностью",
        покрытие: "глянцевое или матовое",
        декор: "с минималистичным узором",
      },
    },
  ],
  диваны: [
    {
      materials: {
        "основной материал": "велюр",
        основа: "мягкий материал с бархатистой текстурой",
        наполнитель: "синтепон",
        спецификация: "гипоаллергенный и износостойкий",
      },
    },
    {
      materials: {
        обивка: "микрофибра",
        основа: "ткань с водоотталкивающим покрытием",
        наполнитель: "латексные гранулы",
        спецификация: "устойчивость к влаге и антибактериальная обработка",
      },
    },
  ],
  кашпо: [
    {
      materials: {
        "основной материал": "керамика",
        основа: "гладкая глазурованная поверхность",
        покрытие: "глянцевое",
        декор: "с узорами или без них",
      },
    },
    {
      materials: {
        "основной материал": "пластик",
        основа: "легкий и прочный материал",
        покрытие: "матовое",
        декор: "с геометрическим узором",
      },
    },
  ],
};

const random = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let sofas = [];

for (let i = 0; i <= 89; i++) {
  let probject = { id: i + 1 };
  probject.collection = collections[random(collections.length)];
  const call = probject.collection;
  probject.bestseller = bestseller[random(3, 1) - 1];

  probject.colors = Array.from(
    new Set(
      Array(random(5, 2))
        .fill(null)
        .map((el, i) => colors[random(colors.length)])
    )
  );
  probject.discount = discount[random(3, 1) - 1];
  probject.isNew = isNew[random(3, 1) - 1];
  probject.material = material[call][random(material.length)];
  probject.name = names[call][random(names.length)];
  probject.price = Math.round(random(200000, 20000) / 1000) * 1000;
  probject.rating = (Math.random() * (5 - 3.8) + 3.8).toFixed(1);

  const nums = new Set();
  let maintenancearray = [];
  while (nums.size < 6) {
    let number = random(maintenance[call].length);
    if (!nums.has(number)) {
      nums.add(number);
      maintenancearray.push(maintenance[call][number]);
    }
  }

  const nums2 = new Set();
  let optarr = [];
  while (nums2.size < 6) {
    let number = random(options[call].length);
    if (!nums2.has(number)) {
      nums2.add(number);
      optarr.push(options[call][number]);
    }
  }

  const sizes = {
    кашпо: {
      ширина: [Math.round(random(40, 100) / 100) * 100],

      высота: [Math.round(random(40, 100) / 10) * 10],
    },
    диваны: {
      ширина: [Math.round(random(190, 260) / 100) * 100],

      высота: [Math.round(random(120, 260) / 10) * 10],
    },
    стулья: {
      ширина: [Math.round(random(80, 150) / 100) * 100],

      высота: [Math.round(random(80, 150) / 10) * 10],
    },
    столы: {
      ширина: [Math.round(random(80, 350) / 100) * 100],

      высота: [Math.round(random(80, 150) / 10) * 10],
    },
    фонари: {
      ширина: [Math.round(random(40, 130) / 100) * 100],

      высота: [Math.round(random(40, 130) / 10) * 10],
    },
  };

  const a = Object.entries(sizes[call]);
  a.forEach(([key, value], i) => {
    for (let i = 0; i < 3; i++) {
      console.log(sizes[key]);
      sizes[call][key].push(sizes[call][key][i] + 20);
    }
  });
  a.forEach(([key, value], i) => {
    for (let i = 0; i < 4; i++) {
      sizes[call][key][i] += key !== "вес" ? " см" : " кг";
    }
  });

  probject.characteristics = [
    {
      dimensions: [
        {
          ширина: sizes[call].ширина.map((el, i) => {
            return { value: el.replace(" см", ""), unit: "см" };
          }),
        },
        {
          высота: sizes[call].высота.map((el, i) => {
            return { value: el.replace(" см", ""), unit: "см" };
          }),
        },
      ],
    },
    { options: [{ цвет: "_" }, ...optarr] },
  ];

  probject.technicalSpecifications = {
    sizes: sizes[call],
    materials: materials[call][random(materials[call].length)].materials,
  };

  probject.maintenance = maintenancearray;
  probject.packing = packing[call][random(packing[call].length)].packing;
  probject.productDescription = {
    text: descriptions[call][random(descriptions[call].length)],
  };
  const fuck = new Set();
  let advantagesArrat = [];
  while (fuck.size < 6) {
    let number = random(advantages[call].length);
    if (!fuck.has(number)) {
      fuck.add(number);
      advantagesArrat.push(advantages[call][number]);
    }
  }
 
  probject.images = images[call][random(images[call].length)];
  probject.advantages = advantagesArrat
  console.log("SDSDSDSDSDSDD")
  if (call) {
    probject.product = products[call][random(products[call].length)];
    probject.name = names[call][random(names[call].length)];
  }
  sofas.push(probject);
}

console.log(sofas);

export default function Gen() {
  return <div></div>;
}
