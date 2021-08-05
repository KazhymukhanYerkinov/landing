import smooth from 'smoothscroll-polyfill';
import find_work from '../../assets/images/find-work.svg';
import find_mobile from '../../assets/images/find-work-mobile.svg';
import top_arrow from '../../assets/logos/top-right.svg'; 
import './find-work.scss'


smooth.polyfill();

const FindWork = () => {
  return (
    <div className = 'find-work' id = 'find-work'>
      <div className = 'container__medium'>
        <div className = 'find-work__inner'>
          
          <div className = 'find-work__content'>
            <div className = 'find-work__title'> Найдите  <span className = 'find-work__title--indigo'> работу </span> <br /> всего за 1 день, и не только </div>

            <ul className = 'find-work__items'>
              <li className = 'find-work__item'> Оставьте заявку в Telegram и ежедневно получайте предложения о работe. </li>
              <li className = 'find-work__item'> Приглашайте друзей, и получите приятный бонус: сытный обед вd KFC, Hardees, McDonalds, или Burger King, а также билеты в кино на двоих. </li>
            </ul>

            <div className = 'find-work__mobile'>
              <img className = 'find-work__mobile-image' src = { find_mobile } alt = ''/>
              <div className = 'find-work__mobile-desc'> Оставьте заявку в Telegram и ежедневно получайте предложения о работe, <br className = 'find-work__desc-br' /> а также бонусы за каждого приглашенного друга. </div>
            </div>

            <div className = 'find-work__padding'>
              <a href = 'https://t.me/RecruitAiBot' className = 'button button__indigo find-work__button'> Перейти в Telegram <img className = 'find-work__arrow' src = {top_arrow} alt = '' /> </a>
            </div>
          </div>

          <div className = 'find-work__block'>
            <img className = 'find-work__image' src = { find_work } alt = ''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindWork;