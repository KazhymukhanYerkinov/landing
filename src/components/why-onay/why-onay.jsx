import { data } from './generator';
import './why-onay.scss';

const WhyOnay = () => {
  return (
    <div className = 'why-onay'>
      <div className = 'container__medium'>

        <div className = 'why-onay__header'>
          <div className = 'why-onay__title'> Почему Onay Jumys поможет <br /> найти Вам сотрудников? </div>
        </div>

        <div className = 'why-onay__items'>
          {data.items.map((item) => (
            <div className = 'why-onay__item' key = {item.id}>
              <img className = 'why-onay__image' src = {item.image} alt = '' />
              <div className = 'why-onay__content'>
                <div className = 'why-onay__sub'> {item.title} </div>
                <div className = 'why-onay__desc'> {item.description} </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default WhyOnay;