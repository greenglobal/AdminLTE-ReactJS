import React, {PropTypes} from 'react';
import {LoginLayout} from 'components/layouts/login';

class Login extends React.Component {
  componentDidMount() {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  }
  render() {
    return (
      <LoginLayout>
        <form action="../../index2.html" method="post">
          <div className="form-group has-feedback">
            <input type="email" className="form-control" placeholder="Email"/>
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input type="password" className="form-control" placeholder="Password"/>
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox icheck">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
              </div>
            </div>
            <div className="col-xs-4">
              <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
          </div>
        </form>
      </LoginLayout>
    );
  }
}

export default Login;
