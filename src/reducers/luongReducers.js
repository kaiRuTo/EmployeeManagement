import { handleActions } from 'redux-actions'
import { luongActions as actions } from '../actions'
import { PURGE } from 'redux-persist'

export const name = 'Luong'

const initialState = {
    listLuong: [],
};

export default handleActions(
    {
        [actions.storeLuong]: (state, action) => {
            const { listLuong } = action.payload
            return {
                ...state,
                listLuong: [...listLuong]
            }
        },
    },
    initialState
)