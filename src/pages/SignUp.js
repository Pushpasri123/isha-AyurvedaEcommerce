import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>

<section className="gry-bg py-4">
        <div className="profile">
            <div className="Signup-container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
                        <div className="card">
                            <div className="text-center px-35 pt-5">
                                <h1 className="heading heading-4 strong-500">
                                    Create an account.
                                </h1>
                            </div>
                            <div className="px-5 py-3 py-lg-4">
                                <div className="">
                                    <form className="form-default" role="form" action="https:in/register" method="POST">
                                        <input type="hidden" name="_token" value="7SOiVFXRUbmaC5GvY1yvKCpgvbPme3sn3qq3tmd8"/>                                        <div class="form-group">
                                            <div className="input-group input-group--style-1">
                                                <input type="text" class="form-control" value="" placeholder="Name" name="name" fdprocessedid="ohp1lg"/>
                                                <span className="input-group-addon">
                                                    <i className="text-md la la-user"></i>
                                                </span>
                                                                                            </div>
                                        </div>

                                                                                    <div className="form-group">
                                                <div className="input-group input-group--style-1">
                                                    <input type="email" class="form-control" value="" placeholder="Email" name="email" fdprocessedid="ifd87a"/>
                                                    <span className="input-group-addon">
                                                        <i className="text-md la la-envelope"></i>
                                                    </span>
                                                                                                    </div>
                                            </div>
                                        
                                        <div className="form-group">
                                          
                                            <div className="input-group input-group--style-1">
                                                <input type="password" class="form-control" placeholder="Password" name="password" fdprocessedid="p5ik"/>
                                                <span className="input-group-addon">
                                                    <i className="text-md la la-lock"></i>
                                                </span>
                                                                                            </div>
                                        </div>

                                        <div className="form-group">
                                            {/*<label>confirm_password</label> -->*/}
                                            <div className="input-group input-group--style-1">
                                                <input type="password" class="form-control" placeholder="Confirm Password" name="password_confirmation" fdprocessedid="eazrz"/>
                                                <span className="input-group-addon">
                                                    <i className="text-md la la-lock"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="g-recaptcha" data-sitekey="">
                                                                                            </div>
                                        </div>


                                        <div className="checkbox pad-btm text-left">
                                            <input className="magic-checkbox" type="checkbox" name="checkbox_example_1" id="checkboxExample_1a" required=""/>
                                            <label for="checkboxExample_1a" className="text-sm">By signing up you agree to our terms and conditions.</label>
                                        </div>

                                        <div className="text-right mt-3">
                                            <button type="submit" className="btn btn-styled btn-base-1 w-100 btn-md" fdprocessedid="dzuuom">Create Account</button>
                                        </div>
                                    </form>
                                                                    </div>
                            </div>
                            <div className="text-center px-35 pb-3">
                                <p className="text-md">
                                    Already have an account?{/*<a href="https://users/login" className="strong-600">Log In</a>*/}
                                    <Link to="/Login">Log In</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SignUp;