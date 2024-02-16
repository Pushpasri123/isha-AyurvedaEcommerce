import React from 'react'
import Cardslider from '../customer/components/Cardslider/Cardslider';
import Marquee from "react-fast-marquee";
import ProductSlider from './ProductSlider';
import BlogCard from './BlogCard';
import ProductCart from '../customer/components/ProductCart';
import ExploreBest from '../customer/components/ExploreBest';
import { countries } from '../customer/components/ExploreBestData';




const Home = () => {
  
  

  return <>
  <section className='home-wrapper-1py- '>
    
  <div className='main-banner-contentn p-4'>
    <ExploreBest images={countries}/></div>
        
  </section>

  <div> <Cardslider></Cardslider></div>
  <section>
  
  </section>

  <section className='blog wrapper py-5 home-wrapper-2 '>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>
            Featured Products
          </h3>
        </div>
        <ProductCart></ProductCart>
       </div>
    </div>
 </section>

  
<section className='Product_slider_heading'>
  
    <h1 className='slider_title' >Best Seller</h1>
    
  <ProductSlider  >
    

   
  </ProductSlider>
  </section>
  
  <section className='blog wrapper py-5 home-wrapper-2 '>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>
            Our Latest Blogs
          </h3>
        </div>
        
        

      </div>
       <div className='row'>
        <div className='col-3'>
        <BlogCard></BlogCard>
        
        </div>
        <div className='col-3'>
        <BlogCard></BlogCard>
        
        </div>
        <div className='col-3'>
        <BlogCard></BlogCard>
        
        </div>
        <div className='col-3'>
        <BlogCard></BlogCard>
        
        </div>
       </div>
    </div>

  </section>
 

  
  </>;
  
};

export default Home;