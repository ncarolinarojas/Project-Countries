import { DELETE_ACTIVITY } from "./action-types"

export const deleteActivity = (IdActivity) => {
    return {
        type: DELETE_ACTIVITY,
        payload: IdActivity
    }
}