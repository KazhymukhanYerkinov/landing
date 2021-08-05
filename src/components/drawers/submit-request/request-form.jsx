import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

// material ui
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

// manual codes
import CollapseInput from '../../collapse-input/collapse-input';
import { normalizePhone } from '../../../utils/normalize';
import { closeCollapse, closeRotate } from '../../../utils/smoothCollapse';

const validation = Yup.object().shape({
  name: Yup.string().required('Поле, обязательное для заполнения'),
  phone: Yup.string().required('Поле, обязательное для заполнения'),
})

const useStyles = makeStyles((theme) => ({
  customTextField: {
    "& input::placeholder": {
      fontSize: '14px'
    }
  }
}))


const RequestForm = ({ 
  map, onSubmit, isTariff, uuidCollapse, 
  personals, cities, tariffs, tariff, handleTariff,
  handleTariffClear }) => {

  const classes = useStyles();
  const [ personalList, setPersonalList ] = React.useState([]);
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

  const submit = (formData, formik) => {
    closeCollapse(`collapse-input__items-${uuidCollapse.personal}`);
    closeCollapse(`collapse-input__items-${uuidCollapse.city}`);
    closeRotate(`collapse-input__image-${uuidCollapse.personal}`);
    closeRotate(`collapse-input__image-${uuidCollapse.city}`);
    if (uuidCollapse.tariff) {
      closeCollapse(`collapse-input__items-${uuidCollapse.tariff}`);
      closeRotate(`collapse-input__image-${uuidCollapse.tariff}`);
    }
    if (isTariff) {
      handleTariffClear();
    }
    
    formik.resetForm();
    console.log(formik)
    setPersonalList([]);
    setCity({ id: '', text: '' });
    map.clear();
    onSubmit(formData);
  }

  return (
    <Formik
      initialValues = {{
        name: '',
        phone: '',
        agree1: false,
      }}
      onSubmit = {submit}>
        {({ errors, touched, values, handleChange, submitCount }) => {

          return (
            <Form className = 'submit-request__form'>
              <div className = 'submit-request__desc'> Оставьте заявку, и мы свяжемся с вами в <br /> WhatsApp чтобы начать работу. </div>

              {isTariff &&
              <div className = 'submit-request__form-group'>
                <CollapseInput 
                  radiobutton
                  id = {uuidCollapse.tariff}
                  error = { !tariff.text &&  submitCount > 0}
                  placeholder = 'Тариф'
                  value = { tariff.text }
                  selected = { tariff.id }
                  items = { tariffs }
                  handleValue = { handleTariff }
                />
              </div>}

              <div className = 'submit-request__form-group'>
                <TextField
                  error = { errors.name && touched.name }
                  name = 'name'
                  type = 'text' 
                  classes = {{ root:  classes.customTextField }}
                  className = 'submit-request__input'
                  placeholder = 'Ф.И.О.'
                  value = { values.name }
                  onChange = {handleChange}
                />
                { errors.name && touched.name && (<div className = 'form__errors'> { errors.name } </div>) }
              </div>

              <div className = 'submit-request__form-group'>
                <TextField
                  error = { errors.phone && touched.phone }
                  name = 'phone'
                  type = 'tel' 
                  className = 'submit-request__input'
                  placeholder = 'Номер телефона'
                  value = { values.phone }
                  onChange = { (e) => {
                    e.target.value = normalizePhone(e.target.value, values.phone)
                    handleChange(e);
                  }}
                />
                { errors.phone && touched.phone && (<div className = 'form__errors'> { errors.phone } </div>) }
              </div>

              <div className = 'submit-request__form-group'>
                <CollapseInput 
                  checkbox
                  id = {uuidCollapse.personal}
                  error = { !valuePersonal && submitCount > 0 }
                  placeholder = 'Требуемый персонал'
                  map = { map }
                  value = { valuePersonal }
                  items = { personals }
                  handleValue = { handleCheckbox }
                />
              </div>

              <div className = 'submit-request__form-group'>
                <CollapseInput
                  radiobutton 
                  id = { uuidCollapse.city }
                  error = { !city.text && submitCount > 0 }
                  placeholder = 'Город'
                  value = { city.text }
                  selected = { city.id }
                  items = { cities }
                  handleValue = { handleCity }
                />
              </div>

              <div className = 'submit-request__form-group'>
                <Checkbox 
                  id = {uuidCollapse.agree}
                  size = 'medium' 
                  name = 'agree1' 
                  value = { values.agree1 }
                  onChange = { handleChange }
                  style = {{ padding: 0 }}
                  className = 'submit-request__form-check'
                  icon = {<CheckBoxOutlineBlankIcon style = {{ color: '#444242' }} fontSize="medium" />}
                  checkedIcon={<CheckBoxIcon style = {{ color: '#444242' }} fontSize="medium" />} />
                  <label htmlFor = {uuidCollapse.agree} className = 'form__label'> Я соглашаюсь с <span className = 'form__label--indigo'> условями Onayjumys </span> </label>
              </div>
              
              <button type = 'submit' className = 'button button__indigo submit-request__button'> Далее </button>
            </Form>
          )}}
    </Formik>
  )
}



export default RequestForm;