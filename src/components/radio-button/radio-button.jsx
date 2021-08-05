import React from 'react';
import Radio from '@material-ui/core/Radio';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import './radio-button.scss';



const RadioButtonComponent = ({id, labelText, handleRadioButton, selected}) => {
  return (
    <div className = 'radio-button'>
      <Radio
        id = {id}
        size = 'small'
        value = {id}
        checked = { selected === id }
        className = 'radio-button__item' 
        onChange = {() => handleRadioButton(id, labelText)}
        icon = {<RadioButtonUncheckedIcon style = {{ color: '#444242' }} fontSize = 'medium' />}
        checkedIcon = {<CheckCircleIcon style={{ color: '#444242' }} fontSize="medium" />} />
        <label htmlFor = {id} className = 'radio-button__label'> { labelText } </label>
    </div>
  )
}

export default RadioButtonComponent;