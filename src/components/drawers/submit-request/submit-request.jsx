import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import RequestForm from './request-form';
import './submit-request.scss';
import SuccessDrawer from '../success-drawer/success-drawer';


const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%'
  },
}))


const SubmitRequest = ({ 
  map, drawer, deactivateDrawer, tariff,
  handleTariff, isTariff, uuidCollapse, personals,
  cities, tariffs, handleTariffClear }) => {

  const classes = useStyles();

  const [ successDrawer, setSuccessDrawer ] = React.useState(false);

  const activateSuccessDrawer = () => {
    setSuccessDrawer(true)
  }
  const deactivateSuccessDrawer = () => {
    setSuccessDrawer(false);
  }

  const onSubmit = (formData) => {
    console.log(formData)
    activateSuccessDrawer();
  }

  const onMainPage = () => {
    deactivateDrawer();
    deactivateSuccessDrawer();
  }

  React.useEffect(() => {
    if (drawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [drawer])

  return (
    <Drawer
      className = {classes.drawer}
      variant="persistent"
      anchor="right"
      open = { drawer }
      classes = {{paper: classes.drawerPaper}}>

        <div className = 'submit-request'>

          <div className = 'submit-request__header' onClick = { deactivateDrawer }>
            <div className = 'submit-request__back-logo'>
              <ArrowBackIosIcon style = {{ color: '#444242' }}/>
            </div>
            <div className = 'submit-request__back-text'> 
              Оставить заявку  
            </div>
          </div>

          <div className = 'submit-request__content'>
            <RequestForm 
              map = { map }
              personals = { personals }
              cities = { cities }
              tariffs = { tariffs }
              uuidCollapse = { uuidCollapse }
              isTariff = { isTariff } 
              tariff = { tariff }
              handleTariff = { handleTariff }
              handleTariffClear = { handleTariffClear }
              onSubmit = { onSubmit } />
          </div>

          <SuccessDrawer drawer = { successDrawer } onMainPage = { onMainPage }/>

        </div>
    </Drawer>
  )
}

export default SubmitRequest;