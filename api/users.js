import reduxApi from 'redux-api';
import customFetch from 'api/axios';
import CONFIG from 'base/constants/config';
import { API_URL } from 'base/constants/config';

const limit = 20;

// Example
const rest = reduxApi({
  me: {
    url: 'users/me',
    options: {
      method: "GET"
    }
  }
})
.use('fetch', customFetch)
.use("rootUrl", CONFIG.API_URL);

export default rest;
