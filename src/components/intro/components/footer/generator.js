import vacancy from '../../../../assets/logos/name_vacancy.svg';
import money from '../../../../assets/logos/money.svg';
import city from '../../../../assets/logos/city.svg';


export const data = [{
    id: 1,
    text: 'Название вакансии',
    image: vacancy,
  },
  {
    id: 2,
    text: 'Заработная плата',
    image: money,
  },
  {
    id: 3,
    text: 'Город',
    image: city,
  }
]

export const mobile_data = [{
    id: 1,
    text: 'Название вакансии',
    image: vacancy,
  },
]

export const personals = [
  {id: 'footer-admin', text: 'Администратор'},
  {id: 'footer-teller', text: 'Кассир'},
  {id: 'footer-courier', text: 'Курьер'},
  {id: 'footer-waiter',  text: 'Официант'},
];

export const cities = [
  {id: 'footer-nurs', text: 'Нур-Султан'},
];

export const tariffs = [
  {id: 'footer-forSelf', text: 'Для себя'},
  {id: 'footer-forBus', text: 'Для бизнеса'},
  {id: 'footer-forCompany', text: 'Для компаний'},
  {id: 'footer-forTariff', text: 'Свой тариф'},
]