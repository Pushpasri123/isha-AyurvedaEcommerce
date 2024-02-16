import React from "react";
import './Cardslider.css'
import Slider from "react-slick";
const Cardslider=()=>{
    var settings = {
        dots: true,
        infinite: false,
          speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1
        
        
      };
    return(
        <>
      <div  className="cardSliderSection">
        <div className="container-fluid">
            <h2 className="hd"> Our Expertise in Ayurveda Healthcare </h2>
        <Slider {...settings} className="cardslider_Main">
            <div className="item">
                <div className="info">
                    < img src="https://www.deepayurveda.in/cdn/shop/files/OIP_1.jpg?v=1678290070&width=550"/>
                    <h4>Consultation</h4>
                    <h5>Consult Now</h5>
                </div>
                

            </div>
            <div className="item">
            <div className="info">
                < img src="https://www.deepayurveda.in/cdn/shop/files/capsules.jpg?v=1677572698&width=550"/>

                    <h4>400+ Products</h4>
                    <h5> Know more</h5>
                </div>
            

            </div>
            <div className="item">
            <div className="info">
                < img src="https://www.deepayurveda.in/cdn/shop/files/homeopathy2-768x512.jpg?v=1678289433&width=550"/>

                    <h4>Ayurvedic Treatment</h4>
                    <h5> Get Treatment Know</h5>
                </div>
            

            </div>
            <div className="item">
            <div className="info">
                <div>
            </div>
                <img src="https://www.deepayurveda.in/cdn/shop/files/VEDAXRY_BRAND.jpg?v=1691542928&width=550"/>
                <span>
                    <h4>Skin & Hair Care</h4>
                    </span>
                    <h5> Know more</h5>
                </div>
            

            

            </div>

            </Slider>

        </div>
      </div>
      <br/> <br/> <br/> <br/>
      </>
        
    )

}
export default Cardslider;