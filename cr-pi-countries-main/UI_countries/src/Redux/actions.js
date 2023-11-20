import axios from 'axios';
import { FETCH_ACTIVITIES_FAILURE, FETCH_ACTIVITIES_SUCCESS } from './action-types';

export const fetchActivities = () => async (dispatch) => {
  try {
    const response = await axios.get('http://127.0.0.1:3001/getActivities');
    dispatch({ type: FETCH_ACTIVITIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ACTIVITIES_FAILURE, payload: error.message });
  }
};
