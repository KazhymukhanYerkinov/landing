import { data } from './generator';
import './how-work.scss';


const HowWork = () => {
  const smoothTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className = 'how-work'>
      <div className = 'container__large'>
        <div className = 'how-work__inner'>

          <div className = 'how-work__info'>
            <div className = 'how-work__subtitle'> { data.subtitle } </div>
            <div className = 'how-work__title'> Как работает <br /> платформа Onay Jumys? </div>
            <button className = 'button button__outline how-work__button' onClick = { smoothTop }>  { data.button } </button>
          </div>

          <div className = 'how-work__items'>
            { data.items.map(item => (
              <div className = 'how-work__item' key = {item.id}>
                <div className = 'how-work__mobile-head'>
                  <img src = {item.mobile} alt = '' className = 'how-work__mobile-image'/>
                  <div className = 'how-work__mobile-step'> { item.title } </div>
                </div>

                <img className = 'how-work__image' src = {item.image} alt = '' />
                <div className  = 'how-work__content'>
                  <div className = 'how-work__step'> {item.title} </div>
                  <div className = 'how-work__desc'> {item.description} </div>
                </div>
              </div>
            )) }
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowWork;