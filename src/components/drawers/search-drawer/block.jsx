import React from 'react';

import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles, createStyles, alpha } from '@material-ui/core/styles';

import RadioButtonComponent from '../../radio-button/radio-button';


const CustomSlider = withStyles({
  thumb: {
    backgroundColor: '#ffffff',
    border: '1px solid #777373',
    width: 30,
    height: 30,
    marginTop: -14,
    marginLeft: -14,
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



const SearchDrawerBlock = ({ id, labelText, handleSelected, selected }) => {

  const [slider, setSlider] = React.useState({min: 20, max: 80});

  const handleSlider = (item) => {
    setSlider({min: item[0], max: item[1]});
  }

  const handleMin = (value) => {
    setSlider({ min: value.substring(2), max: slider.max });
  }

  const handleMax = (value) => {
    setSlider({ min: slider.min, max: value.substring(2) });
  }

  return (
    <div className = 'search-drawer__item'>

      <div className = 'search-drawer__radio'>
        <RadioButtonComponent 
          id = {`search-drawer__${id}`} 
          labelText = {labelText} 
          handleRadioButton = {handleSelected}
          selected = { selected }
        />
      </div>

      <div className = 'search-drawer__collapse' id = {`search-drawer__${id}-collapse`}>
        <div className = 'search-drawer__collapse-title'> Заработная плата: </div>
        <div className = 'search-drawer__collapse-desc'> Средняя зарплата администратора 200,000 ₸  </div>
        <div className = 'search-drawer__slider'>
          <CustomSlider 
            onChange = {(e, val) => handleSlider(val)}
            defaultValue = {[20, 80]}
          />
        </div>

        <div className = 'search-drawer__price'>
          <RedditTextField 
            value = {`₸ ${slider.min}`}
            label = 'мин. плата'
            variant = 'filled'
            onChange = {(e) => handleMin(e.target.value)}
          />
          <div className = 'search-drawer__divider'> - </div>
          <RedditTextField 
            value = {`₸ ${slider.max}`}
            label = 'макс. плата'
            variant = 'filled'
            onChange = {(e) => handleMax(e.target.value)}
          />
        </div>
        
      </div>

    </div>
  )
}

export default SearchDrawerBlock;