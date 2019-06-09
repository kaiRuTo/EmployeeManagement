import { handleActions } from 'redux-actions'
import { chucVuActions as actions } from '../actions'
import { PURGE } from 'redux-persist'

export const name = 'ChucVu'

const initialState = {
    listChucVu: [],
};

export default handleActions(
    {
        [actions.storeChucVu]: (state, action) => {
            const { listChucVu } = action.payload
            return {
                ...state,
                listChucVu: [...listChucVu]
            }
        },
    },
    initialState
)