import React from 'react';
import success from '../../../assets/images/success.svg';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import './success-drawer.scss';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
    backgroundColor: '#F5F7FC'
  },
}));

const SuccessDrawer = ({ drawer, onMainPage, withoutImage, onSearchPage, activateRequestDrawer }) => {

  const classes = useStyles();

  const activate = () => {
    onMainPage();
    activateRequestDrawer();
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

        <div className = 'success-drawer'>
          <div className = 'success-drawer__inner'>
            <div className = 'success-drawer__title'> Вы успешно <br /> оставили заявку! </div>
            <div className = 'success-drawer__desc'> 
              На номер + 7 - (778) - 1673-345 в WhatsApp 
              было отправлено подвтерждение об успешной заявке.
              Наша команда свяжется с вами в ближайшее время. 
            </div>
            {!withoutImage
            ? <React.Fragment>
                <button className = 'button button__indigo success-drawer__button' onClick = { onMainPage }> На главную страницу </button>
                <img src = {success} alt = '' className = 'success-drawer__image' />
              </React.Fragment>
            : <React.Fragment>
                <button className = 'button button__indigo success-drawer__button' onClick = { activate }> Оставить заявку </button>
                <button className = 'button button__outline success-drawer__button' onClick = { onSearchPage }> Новый поиск </button>
                <button className = 'button button__outline success-drawer__button' onClick = { onMainPage }> На главную страницу </button>
              </React.Fragment>}
          </div>
        </div>

    </Drawer>
  )
}

export default SuccessDrawer;