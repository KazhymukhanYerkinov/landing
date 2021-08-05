import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { cities } from './generator';

import './search-city.scss';
import RadioButtonComponent from '../../radio-button/radio-button';
import SuccessDrawer from '../success-drawer/success-drawer';


const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
  },
}))

const SearchCity = ({ drawer, deactivateDrawer, deactivateDrawerSearch, activateRequestDrawer, clear }) => {

  const classes = useStyles();
  const [selected, setSelected] = React.useState(null);
  const [successDrawer, setSuccessDrawer] = React.useState(false);

  const activateSuccessDrawer = () => {
    setSuccessDrawer(true);
  }

  const deactivateSuccessDrawer = () => {
    setSuccessDrawer(false);
  }

  const onSearchPage = () => {
    setSelected(null)
    clear();
    deactivateDrawer();
    deactivateSuccessDrawer();
  }

  const onMainPage = () => {
    deactivateDrawerSearch()
    onSearchPage();
  }


  const handleSelected = (id, label) => {
    setSelected(id)
  }

  React.useEffect(() => {
    if (drawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [drawer]);

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='right'
      open={drawer}
      classes={{ paper: classes.drawerPaper }}>

      <div className='search-city'>

        <div className='search-city__header' onClick={deactivateDrawer}>
          <div className='search-city__back-logo'>
            <ArrowBackIosIcon style={{ color: '#444242' }} />
          </div>
          <div className='search-city__back-text'>
            Название вакансии
          </div>
        </div>

        <div className = 'search-city__items'>
          { cities.map(item => (
            <div className = 'search-city__item' key = {item.id}>
              <RadioButtonComponent 
                id = {`search-city__${item.id}`}
                labelText = {item.label}
                handleRadioButton = { handleSelected }
                selected = { selected }
              />
            </div>
          )) }
        </div>

        <button className = 'button button__indigo search-city__button' onClick = { activateSuccessDrawer }> Найти кандидатов </button>

        <SuccessDrawer 
          withoutImage
          activateRequestDrawer = { activateRequestDrawer }
          drawer = { successDrawer }
          onMainPage = { onMainPage }
          onSearchPage = { onSearchPage }
        />
      </div>

    </Drawer>
  )
}

export default SearchCity;