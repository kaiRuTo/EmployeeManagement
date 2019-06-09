import { handleActions } from 'redux-actions'
import { hopDongLaoDongActions as actions } from '../actions'
import { PURGE } from 'redux-persist'

export const name = 'HopDongLaoDong'

const initialState = {
    listHDLD: [],
};

export default handleActions(
    {
        [actions.storeHopDongLaoDong]: (state, action) => {
            const { listHDLD } = action.payload
            return {
                ...state,
                listHDLD: [...listHDLD]
            }
        },
    },
    initialState
)