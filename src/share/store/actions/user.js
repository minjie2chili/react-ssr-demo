import axios from 'axios';

export const SAVE_USER = 'save_user';

export const fetchUser = () => async dispatch => {
  // Free fake API for testing and prototyping: https://jsonplaceholder.typicode.com
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: SAVE_USER,
    payload: response,
  })
}