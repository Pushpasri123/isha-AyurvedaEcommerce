import React from 'react'
import HomeSectionCard from './HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const HomesectionCarousel = () => {
    const responsive={
        0:{item:1},
        720:{item:3},
        1024:{item:4},

    };
    const items=[1,1,1,1,1].map((item)=><HomeSectionCard/>)
  return (
    <div>
        <AliceCarousel
        
        items={items}
        
        
        infinite
        responsive={responsive}

        
    />
    </div>
  )
}

export default HomesectionCarousel;