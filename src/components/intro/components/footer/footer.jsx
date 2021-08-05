import React from 'react';
import { v4 as uuid } from 'uuid';
import { mobile_data, personals, cities, tariffs } from './generator';
import search from '../../../../assets/logos/search.svg';
import { SearchDrawer, SubmitRequest } from '../../../drawers'

import './footer.scss';
import VacancyCollapse from './collapse/vacancy-collapse';
import SalaryCollapse from './collapse/salary-collapse';
import CityCollapse from './collapse/city-collapse';


let map = new Map();
const Footer = ({ handleFind }) => {
  const [ drawer, setDrawer ] = React.useState(false);
  const [ requestDrawer, setRequestDrawer ] = React.useState(false);


  const uuidCollapse = {
    personal: uuid(),
    city: uuid(),
    agree: uuid(),
  }


  const activateRequestDrawer = () => {
    setRequestDrawer(true);
  }
  const deactivateRequestDrawer = () => {
    setRequestDrawer(false);
  }

  const activateDrawer = () => {
    setDrawer(true);
  }
  const deactivateDrawer = () => {
    setDrawer(false);
  }

  return (
    <div className = 'footer'>
      <div className = 'footer__inner'>
        <div className = 'footer__desc'> Сколько кандидатов ищут работу <br /> под мои критерии? </div>

        <div className = 'footer__items'>

          <VacancyCollapse />
          <SalaryCollapse />
          <CityCollapse />

          <button className = 'button button__indigo' onClick = { handleFind }> Найти </button>
        </div>

        <div className = 'footer__items-mobile' onClick = { activateDrawer }>
          { mobile_data.map(item => (
            <div className = 'footer__mobile-item' key = {item.id}>
              <img src = {item.image} alt = '' />
              <div className = 'footer__text'> {item.text} </div>
            </div>
          )) }
          <button className = 'footer__button'> 
            <img src = { search } alt = '' />
          </button>
        </div>

      </div>
      <SearchDrawer 
        drawer = { drawer }
        deactivateDrawer = { deactivateDrawer } 
        activateRequestDrawer = { activateRequestDrawer } />

      <SubmitRequest 
        map = { map }
        personals = { personals }
        cities = { cities }
        tariffs = { tariffs }
        drawer = {requestDrawer} 
        deactivateDrawer = { deactivateRequestDrawer }
        uuidCollapse = { uuidCollapse } />

    </div>
  )
}

export default Footer;