import React from 'react';
import Bradcumb from './Bradcumb';
import {Helmet} from "react-helmet";

const OurStore = () => {
  return <>
  <meta title={"our Store"} />
  <Bradcumb title="our Store "></Bradcumb>
  <div className='store-wrapper home-wrapper-2  py-5'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-3'>
                <div className='filter-card mb-3'>
                  <h3 className='filter-title'>
                     Shop By Categories
                  </h3>
                  <div>
                    <ul className='px-0'>
                      <li>Ayurvedic Products</li>
                      <li> Swarna Meda</li>
                      <li> Face care</li>
                    </ul>
                  </div>
                </div>
                <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                  Filter By</h3>
                  <div>
                    <h5 className='sub-title'>Availabilty</h5>
                    <div className='form-check'>
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className='form-check-label' htmlFor="">
                        In Stock
                      </label>


                    </div>
                    <div className='form-check'>
                      <input className="form-check-input" type="checkbox" value="" id=""/>
                      <label className='form-check-label' htmlFor="">
                        Out Of  Stock
                      </label>


                    </div>
                  </div>
                  <h5 className='sub-title' >Price</h5>
                </div>
                <div className='filter-card mb-3'>
                <h3 className='filter-title'>
                    Product Tags
                    </h3>
                </div>

                </div>
            <div className='col-9'>

              <div className='filter-sort-grid'>
                <div className='d-flex-align-items-center gap-10'>
                  <p className='mb-0'>Sort By </p>
                  <select name=''className='form-control form-select' id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">Best Selling</option>
                    <option value="price-ascending"> Price, low to high</option>
                    <option value ="price-descending"> price, high to low</option>
                  </select>
                </div>
              </div>

            </div>
        </div>
    </div>
  </div>

 
                
                
   
  </>
}

export default OurStore;
