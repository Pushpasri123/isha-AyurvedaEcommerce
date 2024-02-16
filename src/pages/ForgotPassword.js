import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="row">
      <div className="col-md-12 offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
            <div className="reset-password-text-center">
                <h1 className="h3">Reset Password</h1>
                <p className="pad-btm">
                  Enter your email address to recover your password.
                </p>
              </div>
              <form
                method="POST"
                action="https://ishan.co.in/password/email"
                className="form-horizontal"
              >
                <input type="hidden" name="_to" value=" " />
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    value="email"
                    placeholder="Email"
                    name="email"
                    fdprocessedid="2oe9c"
                  />
                </div>
                <div className="form-group text-right">
                  <button
                    className="btn btn-danger btn-lg btn-block"
                    type="submit"
                    fdprocessedid="eaml39"
                  >
                    Send Password Reset Link
                  </button>
                </div>
              </form>
              <div className="text-center">
                <Link to="/Login">Back to Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span id="PING_IFRAME_FORM_DETECTION" style={{ display: 'none' }}></span>
    </div>
  );
};

export default ForgotPassword;
