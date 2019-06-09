import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

////
//import reduders here
import chucVuReducers, { name as nameOfChucVuReducers } from './chucVuReducers'
import hopDongLaoDongReducers, {name as nameOfHopDongLaoDongReducers} from './hopDongLaoDongReducers'
import luongReducers, {name as nameOfLuongReducers} from './luongReducers'
import nhanVienReducers, {name as nameOfNhanVienReducers } from './nhanVienReducers'
import phongBanReducers,{name as nameOfPhongBanReducers} from './phongBanReducers'
import trinhDoHocVanReducers, {name as nameOfTrinhDoHocVanReducers} from './trinhDoHocVanReducers'
////



const rootPersisConfig = {
    key: 'root',
    storage: storage,
    debug: true,
    timeout: null,
};

const reducers = {
    [nameOfChucVuReducers]:chucVuReducers,
    [nameOfHopDongLaoDongReducers]:hopDongLaoDongReducers,
    [nameOfLuongReducers]: luongReducers,
    [nameOfNhanVienReducers]: nhanVienReducers,
    [nameOfPhongBanReducers]: phongBanReducers,
    [nameOfTrinhDoHocVanReducers]: trinhDoHocVanReducers
}

////search here Object.assign(reducers,{form: fromReducer})
const rootReducer = combineReducers(
    Object.assign(reducers)
);

export default persistReducer(rootPersisConfig, rootReducer);

export {
    nameOfChucVuReducers,
    nameOfHopDongLaoDongReducers,
    nameOfLuongReducers,
    nameOfNhanVienReducers,
    nameOfPhongBanReducers,
    nameOfTrinhDoHocVanReducers
}