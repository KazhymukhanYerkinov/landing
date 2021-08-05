import insta from '../../assets/logos/insta.svg';
import tiktok from '../../assets/logos/tiktok.svg';
import telegram from '../../assets/logos/telegram.svg';
import whatsapp from '../../assets/logos/whatsapp.svg';


import './footer.scss';

const Footer = () => {
  return (
    <div className = 'foo'>
      <div className = 'container__large'>
        <div className = 'foo__inner'>

          <div className = 'foo__items'>
            <div className = 'foo__title'> onayjumys </div>
            <div className = 'foo__link'> Платформа для оптимизации найма <br /> линейного персонала. </div>
          </div>

          <div className = 'foo__items'>
            <div className = 'foo__subtitle'> Onay Jumys </div>
            <div className = 'foo__link'> О компании </div>
            <div className = 'foo__link'> Условия использования </div>
            <div className = 'foo__link'> Политика конфиденциальности </div>
          </div>

          <div className = 'foo__items'>
            <div className = 'foo__subtitle'> Поддержка </div>
            <div className = 'foo__link'> Быстрый чат </div>
          </div>

          <div className = 'foo__items'>
            <div className = 'foo__subtitle'> Связаться с нами </div>
            <div className = 'foo__link'> Telegram </div>
            <div className = 'foo__link'> WhatsApp </div>
          </div>

        </div>

        <div className = 'foo__footer'>
          <div className = 'foo__copy'> © 2021 Onay Jumys </div>
          <div className = 'foo__logos'>
            <img src = {insta} alt = '' />
            <img src = {tiktok} alt = '' />
            <img src = {telegram} alt = '' />
            <img src = {whatsapp} alt = '' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;