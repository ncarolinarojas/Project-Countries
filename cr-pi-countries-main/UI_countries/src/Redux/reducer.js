import { DELETE_ACTIVITY } from "./action-types";

const initialState = {
    activities: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.filter((idAct) => {
                    idAct.id !== Number(action.payload)
                })
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer