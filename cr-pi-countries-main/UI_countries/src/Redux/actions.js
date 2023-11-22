import axios from 'axios';
import { DELETE_ACTIVITY, GET_DATA } from './action-types';

export const getData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://127.0.0.1:3001/getActivities');
      dispatch({
        type: GET_DATA,
        payload: response.data
      });
    } catch (error) {
      console.error('Error getting data', error);
    }
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://127.0.0.1:3001/activity/${id}`);
      dispatch({
        type: DELETE_ACTIVITY,
        payload: id,
      });
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };
};