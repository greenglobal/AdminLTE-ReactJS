// import axios from 'axios';

// export default function customFetch(url, options) {
//   // return a promise of axios
//   return axios(url, options);
// }
import axios from 'axios';
import cookie from 'react-cookie';

export default function customFetch(url, options) {
  // return a promise of axios
  let at = cookie.load('accessToken');
  if (at) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${at}`;
  }

  return new Promise((resolve, reject) => {
    axios(url, options).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}
