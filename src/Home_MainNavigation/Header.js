import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";



const Header = () => {
  return (
    <>
    <header className='header-top-strip py-3'>
       <div className='container-xxl'>
        <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0' > 
            WELCOME ISHANAYURVEDA  
               </p>
            </div>
                <div className='col-6'>
                    <p className='text-end text-white mb-0' > 
                        HOTLINE :<a href='tel:+98987978'>+91  98987978</a></p>

                
            </div>
            <div>

            </div>

        </div>
       </div>
    </header>
    <header className='header-upper py-3'>
        <div className='container-xxl'>
            <div className='row align-items-center'>
                <div className='col-2'>
                                <h2  >
                                    <Link className='textcolor'>
                                      ISHAN 
                                      <h3 className='texth3'>  AYURVEDA</h3>
                                    </Link>
                                </h2>
            </div>
                   <div className='col-5'>
                   <div className="input-group mb-3">
  <input type="text" className="form-control py-2" placeholder="Search Here" aria-label="Search Here" aria-describedby="basic-addon2"/>
  <span className="input-group-text " id="basic-addon2">SEARCH</span>
</div>
                   </div>
              <div className='col-5' >
               <div className='header-upper-link d-flex align-items-center justify-content-between '>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                  <img src="images/wishlist.jpg" alt="wishlist" />
                  <div className='d-flex flex-column'>
                   <h6> <span className='wishlist badge bg-secondary'>0</span></h6>
                    <span className='wishlist'>wishlist</span>
                    </div>
                  </Link>
                  
                </div>
               <div>
                <Link to='/Login' className='d-flex align-items-center gap-10'>
                <img src="images/register.jpg" alt="cart" />
                  <div className='d-flex flex-column'>
                  <span className=' '>Log In <br/> My Account
                  </span>
                  </div>

                </Link>
               </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                  <img src="images/cart.jpg" alt="cart" />
                  <div className='d-flex flex-column'>
                    <span className=' cart badge bg-secondary'>0</span>
                    <p>cart</p>
                  </div>
                  
                  </Link>
                </div>
                
                
                </div> 

              </div>

                    
            </div>
        </div>
    </header>
    
     <header className="header-bottom py-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
  <div className="Menu-bottom d-flex align-items-center gap-80">
          <div>
          
          
          <div class="dropdown">
          
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span className='dropdown'>SHOP CATEGORIES</span>
    <i class="fa fa-heart"></i>
    
  </button>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li>
    <Link className="dropdown-item " to="#">Ayurvedic Products</Link></li>
    <li>
    <Link className="dropdown-item" href="#">Swarna Meda </Link>
    </li>
    <li>
    <Link className="dropdown-item" href="#">Face Care</Link>
    </li>
    <li>
    <Link class="dropdown-item" href="#">Skin care</Link>
    </li>
  </ul>
</div>

          
          


    
 </div>
          <div className='menu-links'>
            <div className='d-flex align-items-center gap-30'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/store"> Our Store</NavLink>
              <NavLink to="/Blogs"> Blogs</NavLink>
               <NavLink to="/contact"> Contact</NavLink>
              
            </div>
          </div>
          

               


              </div>
          </div>
        </div>
      </div>
     </header>
    </>
  )
}

export default Header;