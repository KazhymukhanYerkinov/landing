import React from 'react';
import './checkbox.scss';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';


const CheckboxComponent = ({ id, labelText, handleCheckbox, map }) => {
  return (
    <div className = 'checkbox'>
      <Checkbox
        id = {id}
        size = 'small'
        className = 'checkbox__item'
        checked = {map.has(id)}
        value = {id}
        onChange = {() => handleCheckbox(id, labelText)}
        icon = {<CheckBoxOutlineBlankIcon style = {{ color: '#444242' }} fontSize="medium" />}
        checkedIcon={<CheckBoxIcon style = {{ color: '#444242' }} fontSize="medium" />} />
        <label htmlFor = {id} className = 'checkbox__label'> {labelText} </label>
    </div>
  )
}

export default CheckboxComponent;