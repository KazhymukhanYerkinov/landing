import React from 'react';
import cls from 'classnames';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles, createStyles, alpha } from '@material-ui/core/styles';

import money from '../../../../../assets/logos/money.svg';
import './collapse.scss';


const CustomSlider = withStyles({
  thumb: {
    backgroundColor: '#ffffff',
    border: '1px solid #777373',
    width: 20,
    height: 20,
    marginTop: -10,
    marginLeft: -10,
  },
  rail: {
    color: '#444242'
  }
})(Slider);



const useStylesReddit = makeStyles((theme) =>
  createStyles({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
  }),
);

const RedditTextField = (props) => {
  const classes = useStylesReddit();
  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}


const SalaryCollapse = () => {

  const activateRef = React.useRef();
  const [ activate, setActivate ] = React.useState(false);
  const [slider, setSlider] = React.useState({min: 0, max: 100});
  const [ value, setValue ] = React.useState(null);

  const handleSlider = (item) => {
    setSlider({min: item[0], max: item[1]});
  }
  const handleMin = (value) => {
    setSlider({ min: value.substring(2), max: slider.max });
  }
  const handleMax = (value) => {
    setSlider({ min: slider.min, max: value.substring(2) });
  }
  const handleClearSlider = () => {
    setSlider({ min: 0, max: 100 });
    setValue(null);
  }
  const handleSaveSlider = () => {
    setValue({ min: slider.min, max: slider.max });
    setActivate(false);
  }

  const handleActivate = () => {
    setActivate(prevState => !prevState);
  }

  const handleOutsideClickSalary = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(activateRef.current)) {
      setActivate(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClickSalary);
    return () => {
      document.body.removeEventListener('click', handleOutsideClickSalary);
    }
  }, []);

  return (
    <div className = 'collapse' ref = { activateRef }>

      <div className = {cls('collapse__item', {'active': activate})} onClick = { handleActivate }>
        <img src = {money} alt = '' />
        <div className = 'collapse__text'> {value ? `${value.min} - ${value.max} ₸`: 'Заработная плата'} </div>
      </div>

      <div className = {cls('collapse__content', 'collapse__content--large', {'open': activate})}>
        <div className = 'collapse__content-desc'> Средняя зарплата администратора 200,000 ₸  </div>
        <div className = 'collapse__content-slider'>
          <CustomSlider 
            value = {[slider.min, slider.max]}
            onChange = {(e, val) => handleSlider(val)}
            defaultValue = {[0, 100]}
          />
        </div>
        <div className = 'collapse__content-price'>
          <RedditTextField 
            value = {`₸ ${slider.min}`}
            label = 'мин. плата'
            variant = 'filled'
            onChange = {(e) => handleMin(e.target.value)}
          />

          <div className = 'collapse__content-divider'> - </div>

          <RedditTextField 
            value = {`₸ ${slider.max}`}
            label = 'макс. плата'
            variant = 'filled'
            onChange = {(e) => handleMax(e.target.value)}
          />
        </div>

        <div className = 'collapse__content-buttons'>
          <div className = 'collapse__content-clear' onClick = { handleClearSlider }> Сбросить </div>
          <button className = 'button button__outline' onClick = { handleSaveSlider }> Сохранить </button>
        </div>
      </div>

    </div>
  )
}

export default SalaryCollapse;