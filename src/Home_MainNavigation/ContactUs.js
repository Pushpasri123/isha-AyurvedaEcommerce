import React from 'react'
import { Link } from 'react-router-dom'


const ContactUs = () => {
  return (
    <div>ContactUs
   <div className='col-3'>
  <Link className="product-card position-relative border rounded p-3">
    <div className='wishlist-icon position-absolute'>
      
    </div>

    <div className='product-image'>
      <img src="https://static.kamaayurveda.in/cdn-cgi/image/width=640,format=auto/pub/media/catalog/product/r/o/rose-_-jasmine-body-moisturiser-200ml.png" alt="product cart" className="img-fluid" />
    </div>

    <div className='product-details mt-3'>
      <h6 className='brand'>Syrup</h6>
      <h5 className='product-title'>
        Ayurvedic Pain Relief Oil for Arthritis, Spondylosis & Rheumatism Pain
      </h5>

      <div className="action-bar position-absolute">
        <div className='d-flex flex-column gap-3'>
          <Link to="#" className="text-dark">
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </Link>
          <Link to="#" className="text-dark">
            <button className="btn btn-success btn-sm">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  </Link>
</div>

</div>

  )
}

export default ContactUs;