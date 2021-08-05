import React from 'react';
import { v4 as uuid } from 'uuid';
import { Footer, Form, Header } from './components';
import { SubmitRequest } from '../drawers';
import { personals, cities, tariffs } from './generator';

import intro from '../../assets/images/intro.svg';
import intro2 from '../../assets/images/intro2.svg';
import intro3 from '../../assets/images/intro3.svg';
import intro4 from '../../assets/images/intro4.svg';

import './intro.scss';

// import swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
SwiperCore.use([Autoplay]);

let map = new Map();

const Intro = () => {

  const [drawer, setDrawer] = React.useState(false);
  const [find, setFind] = React.useState(false);

  const handleFind = () => {
    setFind(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const uuidCollapse = {
    personal: uuid(),
    city: uuid(),
    agree: uuid(),
  }

  const activateDrawer = () => {
    setDrawer(true);
  }
  const deactivateDrawer = () => {
    setDrawer(false);
  }

  const handleSmoothScroll = () => {
    const targetElement = document.querySelector(`#find-work`);
    const rectTop = targetElement.getBoundingClientRect().top;
    const offsetTop = window.pageYOffset;

    const top = offsetTop + rectTop - 50;

    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }

  return (
    <div className = 'intro'>
      <div className = 'container__large'>
        <Header handleSmoothScroll = { handleSmoothScroll }/>

        <div className = 'intro__content'>
          <div className = 'intro__subtitle'> / onayjumys </div>

          <div className = 'intro__block'>

            {find 
            ? <div className = 'intro__info'>
              <div className = 'intro__find-title'> 300 администраторов </div>
              <div className = 'intro__find-desc'> подходят под ваши критерии в городе Нур-Султан и готовы приступить к работе уже сегодня! Оставьте заявку чтобы попробовать наш сервис для легкого и быстрого нахождения работников. </div>
            </div>
            : <div className = 'intro__info'>
               
              <Swiper allowTouchMove = {false} centeredSlides = {true} autoplay = {{ "delay": 4000, "disableOnInteraction": false }}> 

                <SwiperSlide>
                  <div className = 'intro__title'>
                    Найдите <br className = 'intro__title-br'/> <span className = 'intro__title intro__title--indigo'> администратора</span> <br /> всего за 1 день 
                  </div> 
                </SwiperSlide>

                <SwiperSlide>
                  <div className = 'intro__title'>
                    Найдите <br className = 'intro__title-br'/> <span className = 'intro__title intro__title--indigo'> кассира </span> <br /> всего за 1 день 
                  </div> 
                </SwiperSlide>

                <SwiperSlide>
                  <div className = 'intro__title'>
                    Найдите <br className = 'intro__title-br'/> <span className = 'intro__title intro__title--indigo'> курьера </span> <br /> всего за 1 день 
                  </div> 
                </SwiperSlide>

                <SwiperSlide>
                  <div className = 'intro__title'>
                    Найдите <br className = 'intro__title-br'/> <span className = 'intro__title intro__title--indigo'> официантов </span> <br /> всего за 1 день 
                  </div> 
                </SwiperSlide>
              </Swiper>

              <div className = 'intro__mobile'>
                <div className = 'intro__desc'> Оставьте заявку, и мы свяжемся с вами в <br /> WhatsApp чтобы начать работу. </div>
                <div> <button className = 'button button__indigo intro__button' onClick = { activateDrawer }> Оставить заявку </button> </div>
                <div> <button className = 'button button__outline intro__button' onClick = { handleSmoothScroll }> Найти работу </button> </div>
              </div>
              
              <Swiper allowTouchMove = {false} centeredSlides = {true} autoplay = {{ "delay": 4000, "disableOnInteraction": false }}>
                <SwiperSlide> <img className = 'intro__image' src = {intro} alt = '' /> </SwiperSlide>
                <SwiperSlide> <img className = 'intro__image' src = {intro2} alt = '' /> </SwiperSlide>
                <SwiperSlide> <img className = 'intro__image' src = {intro3} alt = '' /> </SwiperSlide>
                <SwiperSlide> <img className = 'intro__image' src = {intro4} alt = '' /> </SwiperSlide>
              </Swiper>
            </div>}

            <div className = 'intro__form'>
              <Form />
            </div>

            <div>
              <SubmitRequest 
                map = { map }
                personals = { personals }
                cities = { cities }
                tariffs = { tariffs }
                drawer = {drawer} 
                uuidCollapse = { uuidCollapse }
                deactivateDrawer = { deactivateDrawer }
              />
            </div>

          </div>
        </div>

        <Footer handleFind = { handleFind }/>
      </div>
    </div>
  )
}

export default Intro;