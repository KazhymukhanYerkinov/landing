import React from 'react';
import { v4 as uuid } from 'uuid';
import { data, personals, cities, tariffs } from './generator';
import Block from './block/block';
import './price-list.scss';
import TariffCollect from '../tariff-collect/tariff-collect';
import { SubmitRequest } from '../drawers';



let map = new Map();

const PriceList = () => {

  const [ tariff, setTariff ] = React.useState({id: '', text: ''});
  const [ drawer, setDrawer ] = React.useState(false);

  const handleTariff = (id, label) => {
    setTariff({ id: id, text: label })
  }

  const handleTariffClear = () => {
    setTariff({ id: '', text: '' });
  }

  const uuidCollapse = {
    personal: uuid(),
    city: uuid(),
    tariff: uuid(),
    agree: uuid(),
  }

  const activateDrawer = (id, label) => {
    setTariff({ id: id, text: label })
    setDrawer(true)
  }
  const deactivateDrawer = () => {
    setDrawer(false);
  }

  const smoothTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <React.Fragment>
      <div className='price-list'>
        <div className='container__medium'>
          <div className='price-list__title'> Готовые пакеты <br /> для вашего бизнеса </div>
          <div className='price-list__items'>

            {data.map(item => (
              <div className='price-list__item' key={item.id}>
                <div className = 'price-list__info'>
                  <div>
                    <div className = 'price-list__subtitle'> {item.title} </div>
                    <div className = 'price-list__desc'> { item.description } </div>
                  </div>
                  
                  <button className = 'button button__indigo price-list__button-mobile' onClick = {() => activateDrawer(item.id, item.title)}> Узнать цену </button>
                  <button className = 'button button__indigo price-list__button' onClick = { smoothTop }> Оставить заявку и узнать цену </button>

                  

                  <div className = 'price-list__mobile-steps'>
                    { item.items.map((val, index) => (
                      <div className = 'price-list__mobile-flex' key = {index}>
                          <img src = {val.mobile} alt = '' className = 'price-list__mobile-image' />
                          <div className = 'price-list__mobile-text'> {val.text} </div>
                      </div>
                    )) }
                    <div className = 'price-list__helper'> * Вакансия активна и работает только для одного заведения </div>
                  </div>
                </div>

                <div className = 'price-list__steps'>
                  <Block items = { item.items } />
                  <div className = 'price-list__helper'> * Вакансия активна и работает только для одного заведения </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <SubmitRequest 
        isTariff
        map = { map }
        personals = { personals }
        cities = { cities }
        tariffs = { tariffs }
        tariff = { tariff }
        uuidCollapse = { uuidCollapse }
        handleTariff = { handleTariff }
        handleTariffClear = { handleTariffClear }
        drawer = { drawer } 
        deactivateDrawer = { deactivateDrawer } />

      <TariffCollect activateDrawer = { activateDrawer }/>
    </React.Fragment>
  )
}


export default PriceList;