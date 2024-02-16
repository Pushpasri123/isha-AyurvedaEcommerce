import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomesectionCarousel from '../../components/HomeSectionCard/HomesectionCarousel'
import HomeSlider from '../../../HomeSlider/HomeSlider'
import Cardslider from '../../components/Cardslider/Cardslider'

const HomePages = () => {
  return (
    <div>
        <div> <HomeSlider></HomeSlider></div>
        <div> <Cardslider></Cardslider></div>
        
        </div>
    
  )
}

export default HomePages;