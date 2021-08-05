import check from '../../assets/logos/check.svg'
import none from '../../assets/logos/none.svg';

import mobile_check from '../../assets/logos/mobile-check.svg';
import mobile_none from '../../assets/logos/mobile-none.svg';

export const data = [
  { 
    id: 'price-forSelf',
    title: 'Для себя',
    description: 'Стартовый тариф для малого бизнеса. Отлично подходит для бла-бла.',
    helper: '* Вакансия активна и работает только для одного заведения ',
    price: '40,000 ₸',
    items: [
      {
        id: 1,
        image: check,
        mobile: mobile_check,
        text: 'Поиск работников по 1 вакансии *'
      },
      {
        id: 2,
        image: check,
        mobile: mobile_check,
        text: 'До 100 подходящих кандидатов'
      },
      {
        id: 3,
        image: check,
        mobile: mobile_check,
        text: 'Доступ к базе кандидатов 3 дня'
      },
      {
        id: 4,
        image: check,
        mobile: mobile_check,
        text: 'Рассылка кандидатов в Telegram'
      },
      {
        id: 5,
        image: none,
        mobile: mobile_none,
        text: 'Рассылка кандидатов в WhatsApp'
      }
    ]
  },
  {
    id: 'price-forBus',
    title: 'Для бизнеса',
    description: 'Стартовый тариф для малого бизнеса. Отлично подходит для бла-бла.',
    helper: '* Вакансия активна и работает только для одного заведения ',
    price: '120,000 ₸',
    items: [
      {
        id: 1,
        image: check,
        mobile: mobile_check,
        text: 'Поиск работников по 4 вакансиям *'
      },
      {
        id: 2,
        image: check,
        mobile: mobile_check,
        text: 'До 400 подходящих кандидатов'
      },
      {
        id: 3,
        image: check,
        mobile: mobile_check,
        text: 'Доступ к базе кандидатов весь месяц'
      },
      {
        id: 4,
        image: check,
        mobile: mobile_check,
        text: 'Рассылка кандидатов в Telegram'
      },
      {
        id: 5,
        image: check,
        mobile: mobile_check,
        text: 'Рассылка кандидатов в WhatsApp'
      },
    ]
  },
  {
    id: 'price-forCompany',
    title: 'Для компаний',
    description: 'Тариф для крупных компаний ищущих сотрудников в нескольких городах.',
    helper: '',
    price: '120,000 ₸',
    items: [
      {
        id: 1,
        image: check,
        mobile: mobile_check,
        text: 'Поиск работников по 4 вакансиям *',
      },
      {
        id: 2,
        image: check,
        mobile: mobile_check,
        text: 'До 400 подходящих кандидатов',
      },
      {
        id: 3,
        image: check,
        mobile: mobile_check,
        text: 'Доступ к базе кандидатов весь месяц',
      },
      {
        id: 4,
        image: check,
        mobile: mobile_check,
        text: 'Рассылка кандидатов в Telegram',
      },
      {
        id: 5,
        image: check,
        mobile: mobile_check,
        text: 'Рассылка кандидатов в WhatsApp',
      },
    ]
  }
]

export const personals = [
  {id: 'price-admin', text: 'Администратор'},
  {id: 'price-teller', text: 'Кассир'},
  {id: 'price-courier', text: 'Курьер'},
  {id: 'price-waiter',  text: 'Официант'},
];

export const cities = [
  {id: 'price-nurs', text: 'Нур-Султан'},
];

export const tariffs = [
  {id: 'price-forSelf', text: 'Для себя'},
  {id: 'price-forBus', text: 'Для бизнеса'},
  {id: 'price-forCompany', text: 'Для компаний'},
  {id: 'price-forTariff', text: 'Свой тариф'},
]



