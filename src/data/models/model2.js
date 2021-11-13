// Таблица №1 - Управление Переходами
let transitionControl = [
    [0, 1, 0],
    [0, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [2, 5, 0],
    [2, 6, 0],
    [3, 7, 1],
    [3, 8, 1],
    [4, 9, 1],
    [4, 10, 1],
    [5, 11, 1],
    [5, 12, 1],
    [6, 13, 1],
    [6, 14, 1],
    [6, 15, 1],
]

// Таблица №4 - Объяснение
let explanation = [
    // block 0
    `Нажимая на кнопку "Да" вы переходите на бюджетный сегмента,
    а иначе на средний сегмент. Помните средний сегмент имеют
    все что имеет бюджетный сегмент и в то же время есть свои
    дополнительные функции или фишки у которого нет в бюдежетном сегменте`
    ,
    // block 1
    `Вы выбрали раздел холодильников бюдежетнего/среднего сегмента`
    ,
    // block 2
    `Вы в категории холодильников высокого/флагманского сегмента, в холодильниках
    этого сегмента есть все функции который имеется у холодильников
    бюджетнего/среднего сегмента к тому же холодильника этого сегмента
    имеют отличительный особенности в зависимости от фирмы производителя,
    какой именно холодильник вам подходит зависит от размеров вашей кухни`
    ,
    // block 3
    `Выберите что для вас важнее выбирая первую вы лишаетесь возможностей
    второго а выбирая вторую вы лишаетесь возможней первого такова жизнь`
    ,
    // block 4
    `Выберите что для вас важнее выбирая первую вы лишаетесь возможностей
    второго а выбирая вторую вы лишаетесь возможней первого, такова жизнь`
    ,
    // block 5
    `Выберите один из вариантов ответа`
    ,
    // block 6
    `Вы в флагманском сегменте вам доступны выбор холодильников
    с самой передовымы возможностями и функциями от именитых
    брендов таких как: Bosh, Samsung, Liebherr, LG.
    В этом сегменте не бывает плохих выборов тут все
    имеют свои собственные особенности которого нет у других 
    фирм производителей`
    ,
    // block 7
    `Если ли у вас ограниченный бюджет и вам важно вместимость
    то вам подойдут двухкамерный,
    одно компрессорный холодильник со средней вместительностью`
    ,
    // block 8
    `Если у вас ограниченный бюджет и вы хотите приобрести
    холодильник с классом энергопотребление A+, то вам подойдут
    однокамерные холодильники небольшой вместимостью`
    ,
    // block 9
    `Если по бюджету сильных ограничений нет, то вы
    можете выбирать холодильник с
    антибактериальным покрытием ручного размораживание`
    ,
    // block 10
    `Если по бюджету сильных ограничений нет, то вы можете
    приобрести холодильники с системой размораживание No Frost
    с функцией газирование воды который предотвращает накопление
    льда на стенках холодильника`
    ,
    // block 11
    `Если у вас нет ограничение по бюджету, но пространство
    небольшая и потолки не очень-то высокие то вам подойдут
    встроенный холодильник, который также позволяет избавиться
    от шума полностью, но вместительность немного пострадает`
    ,
    // block 12
    `Если у вас нет ограничение по бюджету, но пространства
    мало при высоких потолках то вам подойдут
    высокие европейские холодильники`
    ,
    // block 13
    `Если у вас нет ограничение по бюджету при всём этом пространство
    тоже достаточно,то вы можете приобрести гигантский холодильник
    side by side c вместительностью до 700 литров`
    ,
    // block 14
    `Если у вас нет ограничение по бюджету, и вы хотите умныйи удобный
    холодильник то вам подойдут холодильники French Door за которым
    поможет следить интеллектуальная система управление с LED дисплеем`
    ,
    // block 15
    `Если у вас нет ограничение по бюджету, и вы хотите самый
    функциональный холодильник то вам подойдут Whirlpool,
    у которого морозильная камера имеет и камеру ледогенератора`
];


let questionAnswerList = [
    // block = index = 0
    {
        text: "Есть ли у вас ограничение в бюджете?",
        answerList: [
            { answer: 'Да',  block: 1 },
            { answer: 'Нет', block: 2 }
        ],

        addition: {
            title: 'Начало',
            description: explanation[0]
        }
    },
    // block = index = 1
    {
        text: "Вы хотите проибрести бюджетный холодильник?",
        answerList: [
            { answer: 'Да',  block: 3 },
            { answer: 'Нет', block: 4 }
        ],

        addition: {
            title: 'Бюджетный/Средний сегмент',
            fullAnswer: 'Да, я ограничен(-а) в бюджете',
            description: explanation[1]
        }
    },
    // block = index = 2
    {
        text: "Есть ли у вас достаточной свободного пространства в кухне?",
        answerList: [
            { answer: 'Нет', block: 5 },
            { answer: 'Да',  block: 6 }
        ],

        addition: {
            title: 'Высокий/Флагманский сегмент',
            fullAnswer: 'Нет, я не ограничен(-а) в бюджете',
            description: explanation[2]
        }
    },
    // block = index = 3
    {
        text: 'Что для вас важнее?',
        answerList: [
            { answer: 'Вместимость',       block: 7 },
            { answer: 'Энергопотребление', block: 8 }
        ],

        addition: {
            title: "Бюджетный сегмент",
            fullAnswer: 'Да, хочу приобрести холодильник бюджетнего сегмента',
            description: explanation[3]
        }
    },
    // block = index = 4
    {
        text: 'Система разморозки?',
        answerList: [
            { answer: 'Капельное', block: 9 },
            { answer: 'No Frost',  block: 10 }
        ],

        addition: {
            title: "Средний сегмент",
            fullAnswer: 'Нет, хочу приобрести холодильник среднего сегментом',
            description: explanation[4]
        }
    },
    // block = index = 5
    {
        text: 'У вас потолок ниже 3 метра?',
        answerList: [
            { answer: 'Да',  block: 11 },
            { answer: 'Нет', block: 12 }
        ],

        addition: {
            title: "Высокий сегмент",
            fullAnswer: 'Нет, кухня имеют только ограниченное пронстранство',
            description: explanation[5]
        }
    },
    // block = index = 6
    {
        text: 'Что для вас важнее?',
        answerList: [
            { answer: 'Вместимость',      block: 13 },
            { answer: 'Функциональность', block: 14 },
            { answer: 'Удобность',        block: 15 }
        ],

        addition: {
            title: "Флагманский сегмент",
            fullAnswer: 'Да, в кухне есть достаточно свободного пространства',
            description: explanation[6]
        }
    },

    // block = index = 7
    {
        text: `Вам подойдут двухкамерный, одно компрессорный холодильники со
               средней вместительностью около 150 литров`,

        addition: {
            fullAnswer: 'Мне важнее Вместимость',
            description: explanation[7]
        }
    },

    // block = index = 8
    {
        text:  `Вам подойдут холодильники  классом энергопотребление A+,
                но с небольшой вместимостью - около 60 литров `,

        addition: {
            fullAnswer: 'Мне важнее Энергопотребление',
            description: explanation[8]
        }
    },

    // block = index = 9
    {
        text:  `Вам подойдут холодильник BOSH KGV36NL1AR ручного система
                размораживание с антибактериальным фильтром от микробов`,

        addition: {
            fullAnswer: 'Капельная система ручной разморозки',
            description: explanation[9]
        }
    },
    // block = index = 10
    {
        text:  `Вам подойдут холодильник BOSCH KGN39LW10 у которого
                система размараживание типа No Frost
                который предотвращает появление перепадов температуры
                чтобы лёд не накапливался на стенках холодильника`,

        addition: {
            fullAnswer: 'Без разморозки (No Frost)',
            description: explanation[10]
        }
    },
    // block = index = 11
    {
        text:  `Вам подойдут встроенные холодильники Bosh C981-KLP2 который также дополняет
                интерьер кухни помимо всего особенность таких холодильников
                это - полностью бесшумная работа холодильника, но вместительность
                оставлять желать лучшего`,

        addition: {
            fullAnswer: 'Да, высота потолка  ниже  3 метра',
            description: explanation[11]
        }
    },
    // block = index = 12
    {
        text:  `Вам подойдут холодильники Liebher которые
                часто бывает высокими но не широкими и вместительность
                компенсруется за счёт высоты, в среднем такие холодильники
                имеют вместительность 270 литров что достаточно неплохо`,

        addition: {
            fullAnswer: 'Нет, высота потолка выше  3 метра',
            description: explanation[12]
        }
    },

    // block = index = 13
    {
        text:  `Вам подойдут флагманский холодильник Liebherr SBSes 8496-21
                у которого полезный объем составляет аж целых 647 литров,
                упраленные электронного типа, материал из нержавеющий
                стали а боковые стенки покрыты со SmartSteel`,

        addition: {
            fullAnswer: 'Мне важнее Вместимость',
            description: explanation[13]
        }
    },
    // block = index = 14
    {
        text:  `Вам подойдут флагманский холодильник French Door RF5500K 
                отличительный особенность которого является революционная
                система размараживание Twin Cooling Plus, что сохранет
                влажность у продуктов как это делает мать природа, а также 
                холодильник имеет функцию супер-заморозки`,

        addition: {
            fullAnswer: 'Мне важнее Функциональность',
            description: explanation[14]
        }
    },
    // block = index = 15
    {
        text:  `Вам подойдут флагманский холодильник Whirlpool который имеет
                собственную ПО который следит за состоянием
                продуктов внутри и при необходимости меняет температуры
                в нужных отсеках, а все отсеки холодильника является независмо
                контролируемы и имеет собственную температуру, а также можно
                управлять холодильником дистанционно`,

        addition: {
            fullAnswer: 'Мне важнее Удобность',
            description: explanation[15]
        }
    },

];



export { transitionControl, questionAnswerList};