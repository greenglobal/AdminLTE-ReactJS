// import axios from 'axios';

// export default function customFetch(url, options) {
//   // return a promise of axios
//   return axios(url, options);
// }
import axios from 'axios';
import cookie from 'react-cookie';
import {store} from 'base/reducers';

export default function customFetch(url, options) {
  // return a promise of axios
  let at = cookie.load('accessToken');
  if (at) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${at}`;
  }

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (401 === error.response.status) {
      // Force logout
      cookie.remove('accessToken', {path: '/'});

      window.location.href = "/";

    } else {
      return Promise.reject(error);
    }
  });

  return new Promise((resolve, reject) => {
    axios(url, options).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}
