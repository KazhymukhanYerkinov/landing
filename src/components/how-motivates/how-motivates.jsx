import { data } from './generator';
import './how-motivates.scss';

const HowMotivates = () => {
  return (
    <div className = 'how-motiv'>
      <div className = 'container__medium'>
        <div className = 'how-motiv__inner'>

          <div className = 'how-motiv__content'>
            <div className = 'how-motiv__subtitle'> { data.subtitle } </div>
            <div className = 'how-motiv__title'> { data.title } </div>
            <div className = 'how-motiv__mobile-title'> Onay Jumys контролирует <br />каждый этап приема на работу </div>
            <div className = 'how-motiv__desc'> { data.description } </div>
          </div>

          <div className = 'how-motiv__items'>

            { data.items.map(item => (
              <div className = 'how-motiv__item' key = {item.id}>
                <img src = { item.image } alt = '' />
                <div className = 'how-motiv__block'> 
                  <div className = 'how-motiv__text'> {item.text} </div>
                </div>
              </div>
            )) }
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowMotivates;