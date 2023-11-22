import { DELETE_ACTIVITY, GET_DATA } from './action-types';

const initialState = {
  activities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        activities: action.payload,
      };
    case DELETE_ACTIVITY:
      return {
        ...state, 
        activities: state.activities.filter((activity) => 
          activity.id !== Number(action.payload)
        )
      }
    default:
      return state;
  }
};

export default reducer;