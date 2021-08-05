import React from 'react';
import classNames from 'classnames';
import CheckboxComponent from '../checkbox/checkbox';
import RadioButtonComponent from '../radio-button/radio-button';
import down from '../../assets/logos/down-circle.svg';

import './collapse-select.scss';

const CollapseSelect = ({ 
  radiobutton, checkbox, map, items, 
  handleValue, value, placeholder, selected, error}) => {

  const selectedRef = React.useRef();
  const [ select, setSelect ] = React.useState(false);

  const handleSelected = () => {
    setSelect((prevState) => !prevState);
  }

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(selectedRef.current)) {
      setSelect(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);


  return (
    <div className = 'collapse-select' ref = {selectedRef}>
      <div className = {classNames('collapse-select__content', {'collapse-select__content--error': error})} onClick = { handleSelected }>
        {value 
        ? <div className = 'collapse-select__text'> 
          { value }
        </div>
        : <div className = 'collapse-select__place'>
          { placeholder }
        </div>}
        <div className = 'collapse-select__logo'> 
          <img className = 'collapse-select__image' src = { down } alt = '' /> 
        </div>
      </div>

      {checkbox && <div>
        <div className = {classNames('collapse-select__toggle', {'open': select})}>
          <div className = 'collapse-select__items'>
          { items.map(item => (
            <CheckboxComponent 
              map = { map }
              key = { item.id }
              id = { item.id }
              labelText = { item.text }
              handleCheckbox = {  handleValue}
            />
          )) }
          </div>
          <button type = 'button' className = 'button button__outline collapse-select__button' onClick = {() => setSelect(false)}> Выбрать </button>
        </div>
      </div>}

      {radiobutton && <div>
          <div className = {classNames('collapse-select__toggle', {'open': select})}>
            <div className = 'collapse-select__items'>
            { items.map(item => (
              <RadioButtonComponent 
                key = { item.id }
                id = { item.id }
                selected = { selected }
                labelText = { item.text }
                handleRadioButton = { handleValue }
              />
            )) }
            </div>
            <button type = 'button' className = 'button button__outline collapse-select__button' onClick = {() => setSelect(false)}> Выбрать </button>
          </div>
      </div>}
      { error && <div className = 'form__errors'> Пожалуйста, выберите </div> }
    </div>
  )
}

export default CollapseSelect;