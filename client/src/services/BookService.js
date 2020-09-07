import API from '../api/api';

const URL_BOOKS = '/books';

const getBooks = async (limit = 10, page = 0) => {
  const response = await API.get(`${URL_BOOKS}?limit=${limit}&page=${page}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const addBook = async (book) => {
  const response = await API.book(`${URL_BOOKS}`, book);
  if (response.error) {
    throw new Error('occurred while is creating');
  }
  return response;
};

const getBook = async (id) => {
  const response = await API.get(`${URL_BOOKS}/${id}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const deleteBook = async (id) => {
  const response = await API.delete(`${URL_BOOKS}/${id}`);
  if (response.error) {
    throw new Error('an error occurred while is deleting');
  }
  return response;
};

const updateBook = async (book) => {
  const response = await API.put(`${URL_BOOKS}/${book.id}`, book);
  if (response.error) {
    throw new Error('an error occurred while is updating');
  }
  return response;
};

export default {
  getBooks,
  getBook,
  addBook,
  deleteBook,
  updateBook,
};
