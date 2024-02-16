import React from 'react';

const ProductCart = () => {
  return (
    <div id="section_home_categories">
      <section className="mb-4">
        <div className="container">
          <div className="px-2 py-4 p-md-4 bg-white shadow-sm">
            <div className="section-title-1 clearfix">
              <h3 className="heading-5 strong-700 mb-0 float-lg-left">
                <span className="mr-4">Featured Products</span>
              </h3>
              <ul className="inline-links float-lg-right nav mt-3 mb-2 m-lg-0">
                <li>
                  <div className='viewmorechil-container'>
                  <div className="d-flex justify-content-between align-items-center">
                  <div className="view-more">
                  <a href="https://gokulayurveda.co.in" className="btn btn-info">
                    View More
                  </a>
                  </div>
                  </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Product Container */}
            <div className="row">
              {/* Product 1 */}
              <div className="col-md-3">
                <div className="productcartchild-container" style={{ border: '1px solid red', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  {/* Product Box 1 */}
                  <div className="product-box-2 bg-white alt-box my-2">
                    <a href="https://goku" className="d-block product-image h-100 text-center" tabIndex="-1">
                      <img
                        style={{ width: '100%', height: 'auto' }}
                        src="images/baby_glow_soap.jpg"
                        alt="baby soap"
                      />
                    </a>
                    <div className="product-btns clearfix">
                      
                      <div className="d-flex justify-content-between align-items-center">
                       
                        <div className="product-details text-center">
                          <div className="p-md-3 p-2">
                            <div className="price-box mb-2">
                              <span className="product-price strong-600">Rs230.000</span>
                            </div>
                            <h2 className="product-title p-0 mb-2">
                              <a href="https://gokulay" className="text-truncate" tabIndex="-1">
                                Baby soap 500gms
                              </a>
                            </h2>
                         

                        {/* Add to Cart and Buy Now Buttons */}
                        <div className="product-buttons">
                          <div className="d-flex">
                            <button className="btn btn-primary mx-1">Add to Cart</button>
                            <button className="btn btn-success mx-1">Buy Now</button>
                            </div>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="col-md-3">
                <div className="productcartchild-container" style={{ border: '1px solid red', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  {/* Product Box 2 */}
                  <div className="product-box-2 bg-white alt-box my-2 text-center">
                    <a href="https://gokulay" className="d-block product-image h-100 text-center" tabIndex="-1">
                      <img
                        style={{ width: '100%', height: 'auto' }}
                        src="images/dasamularishtam.jpg"
                        alt="product 2"
                      />
                    </a>
                    <div className="product-btns clearfix"></div>
                    <div className="p-md-3 p-2">
                      <div className="price-box text-center mb-2">
                        <span className="product-price strong-600">Rs230.000</span>
                      </div>
                      <h2 className="product-title p-0 mb-2">
                        <a href="https://gokulayur" className="text-truncate" tabIndex="-1">
                          Product 2
                        </a>
                      </h2>
                      <div className="product-buttons">
                          <div className="d-flex">
                            <button className="btn btn-primary mx-1">Add to Cart</button>
                            <button className="btn btn-success mx-1">Buy Now</button>
                            </div>
                            </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="col-md-3">
                <div className="productcartchild-container" style={{ border: '1px solid red', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  {/* Product Box 3 */}
                  <div className="product-box-2 bg-white alt-box my-2 text-center">
                    <a href="https://gokulayur" className="d-block product-image h-100 text-center" tabIndex="-1">
                      <img
                        style={{ width: '100%', height: 'auto' }}
                        src="images/samskritamadhu.jpg"
                        alt="product 3"
                      />
                    </a>
                    <div className="product-btns clearfix"></div>
                    <div className="p-md-3 p-2">
                      <div className="price-box text-center mb-2">
                        <span className="product-price strong-600">Rs230.000</span>
                      </div>
                      <h2 className="product-title p-0 mb-2">
                        <a href="https://gok" className="text-truncate" tabIndex="-1">
                          Product 3
                        </a>
                      </h2>
                      <div className="product-buttons">
                          <div className="d-flex">
                            <button className="btn btn-primary mx-1">Add to Cart</button>
                            <button className="btn btn-success mx-1">Buy Now</button>
                            </div>
                            </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="col-md-3">
                <div className="productcartchild-container" style={{ border: '1px solid red', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  {/* Product Box 4 */}
                  <div className="product-box-2 bg-white alt-box my-2 text-center">
                    <a href="https://gokulayurv" className="d-block product-image h-100 text-center" tabIndex="-1">
                      <img
                        style={{ width: '100%', height: 'auto' }}
                        src="images/baby_glow_soap.jpg"
                        alt="product 4"
                      />
                    </a>
                    <div className="product-btns clearfix"></div>
                    <div className="p-md-3 p-2">
                      <div className="price-box text-center mb-2">
                        <span className="product-price strong-600">Rs230.000</span>
                      </div>
                      <h2 className="product-title p-0 mb-2">
                        <a href="https://gokulayu" className="text-truncate" tabIndex="-1">
                          Product 4
                        </a>
                      </h2>
                      <div className="product-buttons">
                          <div className="d-flex">
                            <button className="btn btn-primary mx-1">Add to Cart</button>
                            <button className="btn btn-success mx-1">Buy Now</button>
                            </div>
                            </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more product containers as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCart;
