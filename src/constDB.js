const timeTable3_1 = () => {
  return {
    id: 123456,
    madeBy: 'admin',
    lessons: {
      Понедельник: [],
      Вторник: [
        {
          name: 'Проектирование баз данных',
          teacher: 'Матвеев М.В.',
          room: 'Л4',
          time: '13:25-15:00',
          weekModificator: 'odd',
        },
        {
          name: 'МиСПИС',
          teacher: 'Власов С.В.',
          room: 'Л2',
          time: '15:10-16:45',
          weekModificator: 'any',
        },
        {
          name: 'Информационные технологии',
          teacher: 'Лысачёв П.С.',
          room: '381',
          time: '16:55-18:30',
          weekModificator: 'edd',
        },
      ],
      Среда: [
        {
          name: 'Физвоспитание',
          teacher: '-',
          room: ['-', '-'],
          time: '8:00-9:35',
          weekModificator: 'any',
        },
        {
          name: 'Теория информации',
          teacher: 'Борисов Д.Н.',
          room: '479',
          time: '9:45-11:20',
          weekModificator: 'any',
        },
        {
          name: 'Электродинамика',
          teacher: 'Запрягаев С.А.',
          room: '479',
          time: '11:30-13:05',
          weekModificator: 'any',
        },
        {
          name: 'Электродинамика технологии',
          teacher: 'Борзунов С.В.',
          room: '307П',
          time: '13:25-15:00',
          weekModificator: 'any',
        },
        {
          name: 'Теория Информации',
          teacher: 'Борисов Д.Н.',
          room: '293',
          time: '15:10-16:45',
          weekModificator: 'odd',
        },
      ],
      Четверг: [
        {
          name: 'Информационные технологии',
          teacher: 'Черменев Д.А.',
          room: '292',
          time: '9:45-11:20',
          weekModificator: 'odd',
        },
        {
          name: 'ТИПиС',
          teacher: 'Алгазинов Э.К.',
          room: '479',
          time: '11:30-13:05',
          weekModificator: 'any',
        },
        {
          name: 'Операционные системы',
          teacher: 'Савинков А.Ю.',
          room: '387',
          time: '13:25-15:00',
          weekModificator: 'any',
        },
        {
          name: 'МиСПИС',
          teacher: 'Власов С.В.',
          room: '479',
          time: '15:10-16:45',
          weekModificator: 'any',
        },
      ],
      Пятница: [
        {
          name: 'Физвоспитание',
          teacher: '-',
          room: ['-', '-'],
          time: '8:00-9:35',
          weekModificator: 'any',
        },
        {
          name: 'Проектирование БД',
          teacher: 'Матвеев М.В.',
          room: 'Л3',
          time: '9:45-11:20',
          weekModificator: 'edd',
        },
        {
          name: 'Операционные системы',
          teacher: 'Савинков А.Ю.',
          room: '479',
          time: '11:30-13:05',
          weekModificator: 'edd',
        },
        {
          name: 'ТИПиС',
          teacher: 'Ермаков М.В.',
          room: '293',
          time: '11:30-13:05',
          weekModificator: 'odd',
        },
        {
          name: 'ТИПиС',
          teacher: 'Ермаков М.В.',
          room: '387',
          time: '13:25-15:00',
          weekModificator: 'odd',
        },
      ],
      Суббота: [
        {
          name: 'Разработка мобильных приложений',
          teacher: '???',
          room: 'Л5',
          time: '11:30-13:05',
          weekModificator: 'any',
        },
        {
          name: 'Проектирование БД',
          teacher: 'Чекмарев А.И.',
          room: '479',
          time: '13:25-15:00',
          weekModificator: 'any',
        },
      ],
    },
  };
};

export default timeTable3_1;
