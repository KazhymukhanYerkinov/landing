import React from 'react';
import cls from 'classnames';
import { cities } from '../generator';

import city from '../../../../../assets/logos/city.svg';
import './collapse.scss';

const CityCollapse = () => {

  const activateRef = React.useRef();
  const [ activate, setActivate ] = React.useState(false);
  const [ selected, setSelected ] = React.useState({ id: null, text: null })

  const handleSelected = (id, text) => {
    setSelected({ id: id, text: text });
    setActivate(false);
  }

  const handleActivate = () => {
    setActivate(prevState => !prevState);
  }

  const handleOutsideClickCity = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(activateRef.current)) {
      setActivate(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClickCity);
    return () => {
      document.body.removeEventListener('click', handleOutsideClickCity);
    }
  }, []);

  return (
    <div className = 'collapse' ref = { activateRef }>

      <div className = {cls('collapse__item', {'active': activate})} onClick = { handleActivate }>
        <img src = {city} alt = '' />
        <div className = 'collapse__text'> { selected.text ? selected.text : 'Город' } </div>
      </div>

      <div className = {cls('collapse__content', {'open': activate})}>
        { cities.map(item => (
          <div key = {item.id} className = 'collapse__select-item' onClick = {() => handleSelected(item.id, item.text)}>
            { item.text }
          </div>
        )) }
      </div>
      
    </div>
  )
}

export default CityCollapse;
