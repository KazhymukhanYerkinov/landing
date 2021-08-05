import React from 'react';
import Block from './block';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { vacancies } from './generator';
import { smoothCollapse } from '../../../utils/smoothCollapse';

import './search-drawer.scss';
import SearchCity from '../search-city/search-city';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
  },
}))

const SearchForm = ({ drawer, deactivateDrawer, activateRequestDrawer }) => {

  const classes = useStyles();

  const [selected, setSelected] = React.useState(null);
  const [drawerCity, setDrawerCity] = React.useState(false);

  const activateDrawerCity = () => {
    setDrawerCity(true);
  }
  const deactivateDrawerCity = () => {
    setDrawerCity(false);
  }

  const handleSelected = (id, labelText) => {
    if (!!selected) {
      smoothCollapse(`${selected}-collapse`);
      setSelected(id);
      smoothCollapse(`${id}-collapse`);
    } else {
      setSelected(id);
      smoothCollapse(`${id}-collapse`);
    }
  }

  const handleSubmit = () => {
    if (!!selected) {
      activateDrawerCity();
    }
  }

  const clear = () => {
    if (!!selected) {
      smoothCollapse(`${selected}-collapse`);
      setSelected(null)
    }
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
      className = {classes.drawer}
      variant='persistent'
      anchor='right'
      open = { drawer }
      classes = {{paper: classes.drawerPaper}}>

        <div className = 'search-drawer'>

          <div className = 'search-drawer__header' onClick = { deactivateDrawer }>
            <div className = 'search-drawer__back-logo'>
              <ArrowBackIosIcon style = {{ color: '#444242' }}/>
            </div>
            <div className = 'search-drawer__back-text'> 
              Название вакансии  
            </div>
          </div>

          <div className = 'search-drawer__items'>
            {vacancies.map(item => (
              <Block 
                id = {item.id}
                key = {item.id}
                labelText = {item.label}
                handleSelected = { handleSelected }
                selected = { selected }
              />
            ))}
          </div>

          <button className = 'button button__indigo search-drawer__button' onClick = { handleSubmit }> Далее </button>
          <SearchCity 
            drawer = { drawerCity } 
            clear = { clear }
            activateRequestDrawer = { activateRequestDrawer }
            deactivateDrawer = { deactivateDrawerCity }
            deactivateDrawerSearch = { deactivateDrawer } />
        </div>
    </Drawer>
  )
}

export default SearchForm;