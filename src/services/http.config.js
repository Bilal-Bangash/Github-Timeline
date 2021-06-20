import http from 'axios';
import { isEmpty } from 'lodash';
import { toast as showToast } from 'react-toastify';

const axios = http.create({
  baseURL: 'https://thingproxy.freeboard.io/fetch/https://api.github.com',
});

//Request
axios.interceptors.request.use((request) => requestHandler(request));

//Response
axios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => responseError(error)
);

//Request Handler
const requestHandler = (request) => {
  return request;
};

//Response Handler
const responseHandler = (response) => {
  return response;
};

//Response error
const responseError = (error) => {
  if (error.response.status === 404) {
    showToast.error(error.response.data.message);
    return Promise.reject(error);
  }

  if (!isEmpty(error.response.data.errors))
    return Promise.reject(error.response.data.errors[0].msg);
  else return Promise.reject(error.response.data.error);
};

export { axios };
