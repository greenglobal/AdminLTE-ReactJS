import { Auth, User } from 'api';
import cookie from 'react-cookie';

function login(username, password, isRememberMe) {
  return function(dispatch) {

    return Auth.actions.signin.request(null, {
      data: {
        email: username,
        password: password
      }
    }).then(res => {
      if (res && res.data) {
         let expiresParams = {path: '/'};
         if (isRememberMe) {
           expiresParams = {path: '/', maxAge: 3600*24*365};
         }

         cookie.save('accessToken', 'Bearer '+res.data.data.attributes.accessToken, expiresParams);

         return dispatch(getUserInfo());
      } else {
        console.log('something');
      }
    }).catch( (errors) => {
      return {
        isAuthenticated: false,
        data: errors.response
      }
    });
  }
}

function getUserInfo() {
  return function(dispatch) {
    return User.actions.me.request().then(res => {
       if (res.data.data.attributes.roles == 'super_admin') {
         // luu thong tin user

         return {
           isAuthenticated: true
         };
       }
       else {
         return {
           isAuthenticated: false
         };
       }
    }).catch( (errors) => {
      return {
        isAuthenticated: false,
        data: errors
      }
   });
  }
}

function logout() {
  return function(dispatch) {
    return Auth.actions.signout.request().then(response => {
      cookie.remove('accessToken', {path: '/'});
    });
  }
}

export {login, getUserInfo, logout};
