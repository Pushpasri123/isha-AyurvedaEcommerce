import React from 'react'
import Bradcumb from './Bradcumb';
import {Helmet} from "react-helmet";
import BlogCard from './BlogCard';
const Blog = () => {
  return (
    <>
    <meta title={"Blogs"} />
  <Bradcumb title="Blogs "></Bradcumb>
  <div className='blog-wrapper home-wrapper-2 py-5'>

    <div className="container-xxl">
      <div className='row'>
        <div className='col-3'>
          <div className='filter-card mb-3'>
            <h3 className='filter-title'>
              Shop
            </h3>
            <div>
              <ul className='ps-0'>
                <li> SkinCare </li>
                <li> 
                  Face care
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className='col-9'>
            <div className='row'>
              <div className='col-6' mb-2>
              <BlogCard/>
              </div>
              <div className='col-6' mb-2>
              <BlogCard/>
              </div>
              <div className='col-6' mb-2>
              <BlogCard/>
              </div>

            </div>
        
        </div>
      </div>
    </div>

  </div>
    </>
  )
}

export default Blog;