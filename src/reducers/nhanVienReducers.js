import { handleActions } from 'redux-actions'
import { nhanVienActions as actions } from '../actions'
import { PURGE } from 'redux-persist'

export const name = 'NhanVien'

const initialState = {
    listNhanVien: [],
};

export default handleActions(
    {
        [actions.storeNhanVien]: (state, action) => {
            const { listNhanVien } = action.payload
            return {
                ...state,
                listNhanVien: [...listNhanVien]
            }
        },
    },
    initialState
)