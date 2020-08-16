import API from '../api/api';

const URL_AUTH = '/auth';

const doLogin = async (credentials) => {
  const response = await API.post(`${URL_AUTH}`, credentials);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

export default {
  doLogin,
};
