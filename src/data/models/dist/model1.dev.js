"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionAnswerList = exports.transitionControl = void 0;
// Таблица №1 - Управление Переходами
var transitionControl = [[0, 1, 0], [0, 2, 0], [1, 16, 1], [1, 17, 1], [1, 18, 1], [2, 3, 1], [2, 4, 0], [4, 5, 1], [4, 6, 0], [6, 7, 0], [6, 8, 0], [7, 9, 1], [7, 10, 0], [8, 11, 1], [8, 12, 1], [8, 13, 1], [10, 14, 1], [10, 15, 1]];
exports.transitionControl = transitionControl;

function getAnswer(index) {
  return questionAnswerList[index].answer;
} // Таблица №2 - Вопросы и Ответы


var questionAnswerList = [// block = index = 0
{
  text: "Рассчитываете ли вы потратить большую сумму денег на покупку фотоаппарата?",
  answerList: ['Нет', 'Да'],
  addition: {
    title: 'Какой выбор правильный?',
    fullAnswer: 'Нет',
    description: 'Описание Блок 0'
  }
}, // block = index = 1
{
  text: "Что для вас важнее?",
  answerList: ['К-во кадра', 'Стоимость', 'Наличие видео'],
  addition: {
    title: 'Какой выбор правильный?',
    fullAnswer: 'Нет',
    description: 'Описание Блок 1'
  }
}, // block = index = 2
{
  text: "Умеете ли обращаться с профессиональными фотоаппаратами?",
  answerList: ['Нет', 'Да'],
  addition: {
    title: 'Какой выбор правильный?',
    fullAnswer: 'Да',
    description: 'Описание Блок 2'
  }
}, // block = index = 3
{
  text: "Вам подойдут полупрофессиональные фотоаппараты",
  addition: {
    fullAnswer: 'Нет, не имею',
    description: 'Описание Блок 3'
  }
}, // block = index = 4
{
  text: "Какой у вас опыт работы с профессиональными фотоаппаратом?",
  answerList: ['Меньше года', 'Больше года'],
  addition: {
    title: 'Какой выбор правильный?',
    fullAnswer: 'Да, есть опыт',
    description: 'Описание Блок 4'
  }
}, // block = index = 5
{
  text: "Вам подойдут китовые фотоаппараты",
  addition: {
    fullAnswer: 'Меньше года',
    description: 'Описание Блок 5'
  }
}, // block = index = 6
{
  text: "Где вы предпочитаете фотографировать?",
  answer: 'Больше года',
  answerList: ['В помещении', 'На улице, на природе'],
  addition: {
    title: 'Какой выбор правильный?',
    fullAnswer: 'Больше года',
    description: 'Описание Блок 6'
  }
}, // block = index = 7
{
  text: "В студии?",
  answer: 'В помещении',
  answerList: [getAnswer(9), getAnswer(10)],
  addition: {
    title: 'Какой выбор правильный?',
    fullAnswer: 'В помещении',
    description: 'Описание Блок 7'
  }
}, // block = index = 8
{
  text: "Что вам больше нравится фотографировать?",
  answer: 'На улице на природе',
  answerList: [getAnswer(11), getAnswer(12), getAnswer(13)],
  addition: {
    title: 'Какой выбор правильный?',
    fullAnswer: 'На улице на природе',
    description: 'Описание Блок 8'
  }
}, // block = index = 9
{
  text: "Вам подойдут фотоаппараты с внешней вспышкой",
  answer: 'Нет',
  addition: {
    fullAnswer: 'Нет',
    description: 'Описание Блок 9'
  }
}, // block = index = 10
{
  text: "Вы будете пользоваться специальной аппаратурой?",
  answer: 'Да',
  answerList: [getAnswer(14), getAnswer(15)],
  addition: {
    title: 'Какой выбор правильный?',
    fullAnswer: 'Да',
    description: 'Описание Блок 10'
  }
}, // block = index = 11
{
  text: "Вам подойдут фотоаппараты фирмы Canon и Nikon с объективами\
                Canon EF 100mm f/2.8, Nikon 50mm f/1.4G AF-S",
  answer: 'Потреты',
  addition: {
    fullAnswer: 'Потреты',
    description: 'Описание Блок 11'
  }
}, // block = index = 12
{
  text: "Вам подойдут фотоаппараты фирмы Canon и Nikon с объективами\
                CANON EF-S 10-22 f/3.5-4.5 USM Nikon Af 80-200mm f/2.8 D",
  answer: 'Пейзажи',
  addition: {
    fullAnswer: 'Пейзажи',
    description: 'Описание Блок 12'
  }
}, // block = index = 13
{
  text: "Вам подойдут фотоаппараты фирмы Canon и Nikon с объективами\
                CANON EF 28-135 mm f/3.5-5.6 Nikkor 16-85mm f/3.5-5.6G ED",
  answer: 'Всё',
  addition: {
    fullAnswer: 'Всё',
    description: 'Описание Блок 13'
  }
}, // block = index = 14
{
  text: "Вам подойдут такие как Nikon D90, Canon 500",
  answer: 'Нет',
  addition: {
    fullAnswer: 'Нет',
    description: 'Описание Блок 14'
  }
}, // block = index = 15
{
  text: "Вам подойдут такие как Nikon D70, Canon 5D",
  answer: 'Да',
  addition: {
    fullAnswer: 'Количество кадра',
    description: 'Описание Блок 15'
  }
}, // block = index = 16
{
  text: "Вам подойдут фотоаппараты мыльницы с отличным качеством снимков\
               стоимостью выше 7-8 тыс. рублей",
  answer: 'Количество кадра',
  addition: {
    fullAnswer: 'Количество кадра',
    description: 'Описание Блок 16'
  }
}, // block = index = 17
{
  text: "Вам подойдут обычные фотоаппараты мыльницы",
  answer: 'Стоимость',
  addition: {
    fullAnswer: 'Стоимость',
    description: 'Описание Блок 17'
  }
}, // block = index = 18
{
  text: "Вам подойдут такие фотоаппараты как Nikon Coolpix $3100 Red и прочее",
  answer: 'Наличие видео',
  addition: {
    fullAnswer: 'Стоимость',
    description: 'Описание Блок 18'
  }
}];
exports.questionAnswerList = questionAnswerList;
var p1 = [{
  title: 'Какой выбор правильный?',
  block: 0,
  question: 'Рассчитываете ли вы потратить большую сумму денег на покупку фотоаппарата?',
  description: 'Выберите один вариантов ответа',
  answerList: [{
    answer: 'Нет',
    fullAnswer: 'Нет, я ограничен(-а) в бюджете',
    description: 'Нет, я ограничен(-а) в бюджете'
  }, {
    answer: 'Да',
    fullAnswer: 'Да, я не ограничен(-а) в бюджете',
    description: 'Да, я не ограничен(-а) в бюджете'
  }]
}, {
  title: 'Какой выбор правильный?',
  block: 1,
  question: 'Что для вас важнее?',
  description: 'Выберите один вариантов ответа',
  answerList: [{
    block: 16,
    answer: 'Количество кадра',
    fullAnswer: 'Предпочтительнее: количество кадра',
    description: 'Количество кадра',
    result: {
      description: "\u0412\u0430\u043C \u043F\u043E\u0434\u043E\u0439\u0434\u0443\u0442 \u0444\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u043C\u044B\u043B\u044C\u043D\u0438\u0446\u044B \u0441 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C\n                                  \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u0441\u043D\u0438\u043C\u043A\u043E\u0432, \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C\u044E \u0432\u044B\u0448\u0435 7-8 \u0442\u044B\u0441 \u0440\u0443\u0431\u043B\u0435\u0439",
      img: '',
      iframe: '',
      link: ''
    }
  }, {
    block: 17,
    answer: 'Стоимость',
    fullAnswer: 'Предпочтительнее: Стоимость',
    description: 'Стоимость',
    result: {
      description: 'Вам подойдут обычные фотоаппараты мыльницы',
      img: '',
      iframe: '',
      link: ''
    }
  }, {
    block: 18,
    answer: 'Наличие видео',
    fullAnswer: 'Предпочтительнее: Наличие видео',
    description: 'Наличие видео',
    result: {
      description: "\u0412\u0430\u043C \u043F\u043E\u0434\u043E\u0439\u0434\u0443\u0442 \u0442\u0430\u043A\u0438\u0435 \u0444\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B, \u043A\u0430\u043A Nikon Coolpix\n                                 $3100 Red \u0438 \u043F\u0440\u043E\u0447.",
      img: '',
      iframe: '',
      link: ''
    }
  }]
}, {
  title: 'Какой выбор правильный?',
  block: 2,
  question: 'Умеете ли вы обращаться с профессиональными фотоаппаратами?',
  description: 'Выберите один вариантов ответа',
  answerList: [{
    answer: 'Нет',
    fullAnswer: 'Нет не умею',
    description: 'Нет',
    result: {
      description: 'Вам подойдут полупрофессиональные фотоаппараты',
      img: '',
      iframe: '',
      link: ''
    }
  }, {
    answer: 'Да',
    fullAnswer: 'Да, есть опыт',
    description: 'Да'
  }]
}, {
  title: 'Какой выбор правильный?',
  question: 'Какой у вас опыт работы с профессиональными фотоаппаратами?',
  description: 'Выберите один вариантов ответа',
  answerList: [{
    answer: 'Меньше года',
    fullAnswer: 'Меньше года',
    description: 'Меньше года',
    result: {
      description: 'Вам подойдут китовые фотоаппараты',
      img: '',
      iframe: '',
      link: ''
    }
  }, {
    answer: 'Больше года',
    fullAnswer: 'Больше года',
    description: 'Больше года'
  }]
}, {
  title: 'Какой выбор правильный?',
  question: 'Где вы предпочитаете фотографировать?',
  description: 'Выберите один вариантов ответа',
  answerList: [{
    answer: 'В студии',
    fullAnswer: 'В студии',
    description: 'В студии'
  }, {
    answer: 'на улице/на природе',
    fullAnswer: 'на улице/на природе',
    description: 'на улице/на природе'
  }]
}, {
  title: 'Какой выбор правильный?',
  question: 'В студии',
  description: 'Выберите один вариантов ответа',
  answerList: [{
    answer: 'Нет',
    fullAnswer: 'Нет',
    description: 'Нет',
    result: {
      description: 'Вам подойдут фотоаппараты с внешней вспышкой',
      img: '',
      iframe: '',
      link: ''
    }
  }, {
    answer: 'Да',
    fullAnswer: 'Да',
    description: 'Да'
  }]
}, {
  title: 'Какой выбор правильный?',
  question: 'Вы будете пользоваться специальной аппаратурой?',
  description: 'Выберите один вариантов ответа',
  answerList: [{
    answer: 'Нет',
    fullAnswer: 'Нет',
    description: 'Нет',
    result: {
      description: 'Вам подойдут такие фотоаппараты как Nikon D90, Canon D500',
      img: '',
      iframe: '',
      link: ''
    }
  }, {
    answer: 'Да',
    fullAnswer: 'Да',
    description: 'Да',
    result: {
      description: 'Вам подойдут такие фотоаппараты как Mikon D70 Canon 5D',
      img: '',
      iframe: '',
      link: ''
    }
  }]
}, {
  title: 'Какой выбор правильный?',
  question: 'Что вам больше нравится фотографировать?',
  description: 'Выберите один вариантов ответа',
  answerList: [{
    answer: 'Потреты',
    fullAnswer: 'Потреты',
    description: 'Потреты',
    result: {
      description: "\u0412\u0430\u043C \u043F\u043E\u0434\u043E\u0439\u0434\u0443\u0442 \u0444\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0444\u0438\u0440\u043C\u044B Canon \u0438 Nikon \u0441 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u0430\u043C\u0438\n                                  Canon EF 100mm f/2.8, Nikon 50mm f/1.4G AF-S",
      img: '',
      iframe: '',
      link: ''
    }
  }, {
    answer: 'Пейзажи',
    fullAnswer: 'Пейзажи',
    description: 'Пейзажи',
    result: {
      description: "\u0412\u0430\u043C \u043F\u043E\u0434\u043E\u0439\u0434\u0443\u0442 \u0444\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0444\u0438\u0440\u043C\u044B Canon \u0438 Nikon \u0441 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u0430\u043C\u0438\n                                  Canon EF-S 10-22 f/3.5-4.5 USM Nikon Af 80-200mm f/2.8 D",
      img: '',
      iframe: '',
      link: ''
    }
  }, {
    answer: 'Всё',
    fullAnswer: 'Всё',
    description: 'Всё',
    result: {
      description: "\u0412\u0430\u043C \u043F\u043E\u0434\u043E\u0439\u0434\u0443\u0442 \u0444\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442\u044B \u0444\u0438\u0440\u043C\u044B Canon \u0438 Nikon \u0441 \u043E\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u0430\u043C\u0438\n                                  Canon EF 28-135 mm f/3.5-5.6 Nikkor 16-85mm f/3.5-5.6G ED",
      img: '',
      iframe: '',
      link: ''
    }
  }]
}];