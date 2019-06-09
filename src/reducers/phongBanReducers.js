import { handleActions } from 'redux-actions'
import { phongBanActions as actions } from '../actions'
import { PURGE } from 'redux-persist'

export const name = 'PhongBan'

const initialState = {
    listPhongBan: [],
};

export default handleActions(
    {
        [actions.storePhongBan]: (state, action) => {
            const { listPhongBan } = action.payload
            return {
                ...state,
                listPhongBan: [...listPhongBan]
            }
        },
    },
    initialState
)