import React from 'react';
import * as Yup from 'yup';
import cls from 'classnames';
import { Checkbox } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import CollapseSelect from '../../../collapse-select/collapse-select';
import { personals, cities } from './generator';

import './form.scss';



const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Поле, обязательное для заполнения'),
  phone: Yup.string()
    .required('Поле, обязательное для заполнения'),
  personal: Yup.string()
    .required('Пожалуйста выберите'),
  city: Yup.string()
    .required('Пожалуйста выберите'),
})

let map = new Map();

const FormComponent = () => {

  const [ personalList , setPersonalList ] = React.useState([]);
  const [ city, setCity ] = React.useState({ id: '', text: '' });

  const handleCheckbox = (id, labelText) => {
    if (map.has(id)) {
      map.delete(id);
      setPersonalList(Array.from(map));
    }
    else {
      map.set(id, labelText);
      setPersonalList(Array.from(map));
    }
  }

  const handleCity = (id , labelText) => {
    setCity({ id: id, text: labelText })
  }

  let valuePersonal = '';
  for (let i = 0; i < personalList.length; i ++) {
    if (i === personalList.length - 1) {
      valuePersonal += personalList[i][1]
    } else {
      valuePersonal += personalList[i][1] + ', ';
    }
  }

  const onSubmit = (formData) => {
    console.log(formData, city, personalList);
  }
  return (
    <Formik
      initialValues = {{
        name: '',
        phone: '',
        agree: false,
      }}
      onSubmit = {onSubmit}
      validationSchema = {validationSchema}>

      {({ errors ,touched, submitCount }) => (
        <Form className = 'form'>
          <div className = 'form__header'>
            <div className = 'form__title'> Оставить заявку </div>
            <div className = 'form__desc'> Заполните информацию, и мы свяжемся с вами в WhatsApp, чтобы начать работу. </div>
          </div>
          <div className = 'form__group'>
            <Field 
              name = 'name'
              type = 'text' 
              className = {cls('form__input', {'form__input--error': errors.name && touched.name})}
              placeholder = 'Ф.И.О.'
            />
            { errors.name && touched.name && (<div className = 'form__errors'> { errors.name } </div>) }
          </div>

          <div className = 'form__group'>
            <Field 
              name = 'phone'
              type = 'tel'
              className = {cls('form__input', {'form__input--error': errors.phone && touched.phone})}
              placeholder = 'Номер телефона'
            />
            { errors.phone && touched.phone && (<div className = 'form__errors'> { errors.phone } </div>) }
          </div>

          <div className = 'form__group'>
            <CollapseSelect
              checkbox
              map = { map }
              error = { !valuePersonal && submitCount > 0 }
              items = { personals } 
              value = { valuePersonal }
              placeholder = 'Требуемый персонал'
              handleValue = { handleCheckbox }
            />
          </div>

          <div className = 'form__group'>
            <CollapseSelect 
              radiobutton
              error = { !city.text && submitCount > 0 }
              items = { cities }
              value = { city.text }
              placeholder = 'Город'
              selected = { city.id }
              handleValue = { handleCity }
            />
          </div>

          <div className = 'form__group'>
            <Checkbox 
              id = 'agree'
              size = 'small' 
              name = 'agree' 
              className = 'form__check'
              style = {{ padding: 0 }}
              icon = {<CheckBoxOutlineBlankIcon style = {{ color: '#444242' }} fontSize="small" />}
              checkedIcon={<CheckBoxIcon style = {{ color: '#444242' }} fontSize="small" />} />
              <label htmlFor = 'agree' className = 'form__label'> Я соглашаюсь с <span className = 'form__label--indigo'> условями Onayjumys </span> </label>
          </div>

          <div className = 'form__group'>
            <button type = 'submit' className = 'button button__indigo form__button'> Начать сотрудничество </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormComponent;