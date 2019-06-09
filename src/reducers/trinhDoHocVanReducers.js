import { handleActions } from 'redux-actions'
import { trinhDoHocVanActions as actions } from '../actions'
import { PURGE } from 'redux-persist'

export const name = 'TrinhDoHocVan'

const initialState = {
    listTDHV: [],
};

export default handleActions(
    {
        [actions.storeTrinhDoHocVan]: (state, action) => {
            const { listTDHV } = action.payload
            return {
                ...state,
                listTDHV: [...listTDHV]
            }
        },
    },
    initialState
)