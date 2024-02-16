import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    
    
        <div className='blog-card'>
           <img src="https://www.shrichyawanayurved.com/cdn/shop/articles/Safed_Musli_FI-min.jpg?v=1706787855&width=1100" className='img-fluid w-100' alt="blog"/>


    
       <div className='blog-content' >
       <h5 className='title'>Safed Musli: A Natural Elixir for Vitality with number .....</h5>
        <p className='desc'>Safed Musli, scientifically known as Chlorophytum borivilianum, is an herb deeply rooted in Ayurvedic traditions for its potential health benefits...........</p>
        <Link to="/Blogs/:id" className="button">Read More</Link>

       
       </div>

       </div>

    
  )
}

export default BlogCard;