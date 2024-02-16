import React from "react";
import Slider from "react-slick";
import './HomeSlider1.css'
const HomeSlider=()=>{
    var settings = {
        dots: true,
        infinite: false,
          speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
        
        
      };
      return (
        <section className="homeSlider">
            <div className="container-fluid">
        
        <Slider {...settings} className="homeslider_main">
          <div className="item">
            <img src="https://shop.aryavaidyasala.com/pub/media/Plazathemes/bannerslider/images/k/o/kottakkal-2.jpg " className="w-100"/>
            
          </div>
        </Slider>
        </div>
        </section>
        
      );
    }
 

export default HomeSlider;