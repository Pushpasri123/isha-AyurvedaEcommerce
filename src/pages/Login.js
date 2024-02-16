import React from 'react'
import Bradcumb from '../Home_MainNavigation/Bradcumb';
import Meta from '../Home_MainNavigation/Meta';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
const Login = () => {
  return (
    <>
     <section class="gry-bg py-5">
        <div class="profile">
            <div class="login-container">
                <div class="row">
                    <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 mx-auto">
                        <div class="card">
                            <div class="text-center px-35 pt-5">
                                <h1 class="heading heading-4 strong-400">
                                    Login to your account.
                                </h1>
                            </div>
                            <div class="px-5 py-3 py-lg-4">
                                <div class="">
                                    <form class="form-default" role="form" action="https://go/login" method="POST">
                                        <input type="hidden" name="_token" value="7SOiVFXRUbmaC5GvY1yvKCpgvbPme3sn3qq3tmd8"/>                                                                                <div class="form-group">
                                            <div class="input-group input-group--style-1">
                                                  <input type="email" class="form-control form-control-sm " value="" placeholder="Email" name="email"/>
                                                     <span class="input-group-addon">
                                                    <i class="text-md la la-user"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="input-group input-group--style-1">
                                                <input type="password" class="form-control " placeholder="Password" name="password" id="password"/>
                                                <span class="input-group-addon">
                                                    <i class="text-md la la-lock"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <div class="checkbox pad-btm text-left">
                                                        <input id="demo-form-checkbox" class="magic-checkbox" type="checkbox" name="remember"/>
                                                        <label for="demo-form-checkbox" class="text-sm">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6 text-right">
                                               {/* <a href="https://gok/password/reset" class="link link-xs link--style-3">Forgot password?</a> */}
                                               <Link to="/ForgotPassword">Forgot password?</Link>
                                               
                                            </div>
                                        </div>


                                        <div class="text-center">
                                            <button type="submit" class="btn btn-styled btn-base-1 btn-md w-100">Login</button>
                                        </div>
                                    </form>
                                                                    </div>
                            </div>
                            <div class="text-center px-35 pb-3">
                                <p class="text-md">
                                    Need an account? {/*<a href="https://go/users/regi" class="strong-600">Register Now</a> */}
                                    <Link to='/SignUp'>  Register Now </Link>
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

export default Login;