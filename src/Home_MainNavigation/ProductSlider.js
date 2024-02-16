import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  {
    url:
      "https://www.netmeds.com/images/product-v1/150x150/15920/dabur_shilajit_gold_capsule_20s_0_1.jpg",
    price: "Price: $10.99"
  },
  {
    url:
      "https://www.netmeds.com/images/product-v1/150x150/821307/kapiva_wheat_grass_juice_1_ltr_61053_0_6.jpg",
    price: "Price: $15.99"
  },
  {
    url:
      "https://www.netmeds.com/images/product-v1/150x150/921409/lama_isobael_granules_200_gm_0_0.jpg",
    price: "Price: $20.99"
  },
  {
    url:
      "https://www.netmeds.com/images/product-v1/150x150/986167/dr_vaidyas_shilajit_gold_capsule_pack_of_2_x_30s_0_0.jpg",
    price: "Price: $25.99"
  },
  {
    url:
      "https://www.netmeds.com/images/product-v1/150x150/821279/kapiva_get_slim_juice_1_ltr_61046_0_9.jpg",
    price: "Price: $19.99"
  }
];

const ProductsSlider = () => {
  const customTransition = "all 0.5s ease"; // Adjust the duration as needed

  return (
    <div className="parent-container">
      <div className="main-box">
        {/* Your main parent container */}
        <div className="carousel-container">
          {/* Box for carousel */}
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
            customTransition={customTransition}
          >
            {sliderImageUrl.map((item, index) => {
              return (
                <div className="slider" key={index}>
                  <div className="image-container">
                    <img src={item.url} alt="product" className="small-image" />
                    <div className="price">{item.price}</div>
                    <p className="best_seller_paragraph">Nagarjuna tooth powder</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
