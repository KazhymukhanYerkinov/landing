import { data } from './generator';
import './how-find.scss';


const HowFind = () => {
  return (
    <div className = 'how-find'>
      <div className = 'container__medium'>
        <div className = 'how-find__inner'>

          <div className = 'how-find__block'>
            <img className = 'how-find__image' src = { data.image } alt = '' />
          </div>

          <div className = 'how-find__content'>
            <div className = 'how-find__subtitle'> { data.subtitle } </div>
            <div className = 'how-find__title'> { data.title } </div>
            <div className = 'how-find__mobile-title'> Получайте кандидатов сразу <br className = 'how-find__title-br'/> из нескольких источников. </div>
            <div className = 'how-find__desc'> { data.description } </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowFind;