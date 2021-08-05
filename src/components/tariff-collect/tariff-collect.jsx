import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

import './tariff-collect.scss';

const DesktopSlider = withStyles({
  thumb: {
    color: '#02B478',
  },
  track: {
    color: '#02B478'
  },
  rail: {
    color: '#777373'
  }
})(Slider);


const MobileSlider = withStyles({
  thumb: {
    backgroundColor: '#ffffff',
    border: '1px solid #777373',
    width: 40,
    height: 40,
    marginTop: -19,
    marginLeft: -13,
  }
})(Slider);



const TariffCollect = ({ activateDrawer }) => {
  const [countVacancy, setCountVacancy] = React.useState(1);
  const [weekActive, setWeekActive] = React.useState(1);

  const smoothTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className = 'tariff'>
      <div className = 'container__medium'>
        <div className = 'tariff__inner'>
          <div className = 'tariff__info'>
            <div>
              <div className = 'tariff__title'> Свой тариф </div>
              <div className = 'tariff__desc'> Не подходит ни один из готовых тарифов? Создайте свой тариф для вашего бизнеса. </div>
            </div>
            <button className = 'button button__indigo tariff__button' onClick = { smoothTop }> Оставить заявку и узнать цену </button>
          </div>

          <div className = 'tariff__content'>
            <div className = 'tariff__block'>
              <div className = 'tariff__flex'>
                <div className = 'tariff__text'> Количество вакансий: </div>
                <div className = 'tariff__count'> { countVacancy } </div>
              </div>
              
              <div className = 'tariff__slider'>
                <DesktopSlider
                  min = {1}
                  max = {5}
                  onChange = {(e, val) => setCountVacancy(val)}
                  aria-label="custom thumb label"
                  value = {countVacancy}
                />
              </div>

              <div className = 'tariff__slider-mobile'>
                <MobileSlider
                  min = {1}
                  max = {5}
                  onChange = {(e, val) => setCountVacancy(val)}
                  aria-label="custom thumb label"
                  value = {countVacancy}
                />
              </div>
            </div>

            <div className = 'tariff__block'>

              <div className = 'tariff__flex'>
                <div className = 'tariff__text'> Сколько недель будет активна ваша вакансия:  </div>
                <div className = 'tariff__count'> { weekActive } </div>
              </div>

              <div className = 'tariff__slider'>
                <DesktopSlider
                  min = {1}
                  max = {5}
                  onChange = { (e, val) => setWeekActive(val) }
                  aria-label="custom thumb label"
                  value = {weekActive}
                />
              </div>
              <div className = 'tariff__slider-mobile'>
                <MobileSlider
                  min = {1}
                  max = {5}
                  onChange = { (e, val) => setWeekActive(val) }
                  aria-label="custom thumb label"
                  value = {weekActive}
                />
              </div>
            </div>

            <div className = 'tariff__footer'>
              <button className = 'button button__indigo tariff__button-mobile' onClick = {() => activateDrawer('price-forTariff', 'Свой тариф')}> Узнать цену </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TariffCollect;