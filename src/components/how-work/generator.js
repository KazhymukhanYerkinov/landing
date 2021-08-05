import step1 from '../../assets/logos/step1.svg';
import step2 from '../../assets/logos/step2.svg';
import step3 from '../../assets/logos/step3.svg';

import mobile_step1 from '../../assets/logos/mobile-step1.svg';
import mobile_step2 from '../../assets/logos/mobile-step2.svg';
import mobile_step3 from '../../assets/logos/mobile-step3.svg';


export const data = {
  title: 'Как работает платформа Onay Jumys?',
  subtitle: '/ Для компаний',
  button: ' Оставить заявку',
  items: [
    {
      id: 1,
      title: 'Шаг 1',
      description: 'Заполните заявку на сайте, наша команда свяжется с вами в WhatsApp.',
      image: step1,
      mobile: mobile_step1,
    },
    {
      id: 2,
      title: 'Шаг 2',
      description: 'Мгновенно получите список из 10-15 подходящих кандидатов.',
      image: step2,
      mobile: mobile_step2,
    },
    {
      id: 3,
      title: 'Шаг 3',
      description: 'Ежедневно получайте новых кандидатов по WhatsApp и Telegram.',
      image: step3,
      mobile: mobile_step3,
    }
  ]
}

