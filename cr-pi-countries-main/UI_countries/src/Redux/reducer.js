const initialState = {
    activities: [],
    loading: false,
    error: null,
  };
  
  const activitiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ACTIVITIES_SUCCESS':
        return {
          ...state,
          activities: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_ACTIVITIES_FAILURE':
        return {
          ...state,
          activities: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default activitiesReducer;
  