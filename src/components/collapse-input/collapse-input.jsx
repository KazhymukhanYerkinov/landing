import React from 'react';

import CheckboxComponent from '../checkbox/checkbox';
import downCircle from '../../assets/logos/down-circle.svg';
import RadioButtonComponent from '../radio-button/radio-button';
import { smoothCollapse, smoothRotate } from '../../utils/smoothCollapse';

import './collapse-input.scss';


const CollapseInput = ({ 
  id, items, value, handleValue, 
  placeholder, checkbox, radiobutton,
  selected, error, map }) => {

  const handleCollapse = () => {
    smoothCollapse(`collapse-input__items-${id}`);
    smoothRotate(`collapse-input__image-${id}`);
  }

  return (
    <React.Fragment>
      <div className = 'collapse-input'>
        <div className = 'collapse-input__content' onClick = {handleCollapse}>

          { value 
          ? <div className = 'collapse-input__text'> { value } </div>
          : <div className = 'collapse-input__place'> { placeholder } </div>} 
          
          <img id = {`collapse-input__image-${id}`} className = 'collapse-input__image' src = { downCircle } alt = '' />
        </div>

        {checkbox && <div className = 'collapse-input__items' id = {`collapse-input__items-${id}`}> 
          { items.map(item => (
            <CheckboxComponent
              id = { item.id }
              key = { item.id }
              map = { map }
              labelText = { item.text }
              handleCheckbox = { handleValue } 
            />
          )) }
        </div>}

        {radiobutton && <div className = 'collapse-input__items' id = {`collapse-input__items-${id}`}>
          { items.map(item => (
            <RadioButtonComponent 
              id = { item.id }
              key = { item.id }
              selected = { selected }
              labelText = { item.text }
              handleRadioButton = { handleValue }
            />
          )) }
        </div>}
      </div>
      { error && <div className = 'form__errors'> Пожалуйста, выберите </div> }
    </React.Fragment>
  )
}

export default CollapseInput;