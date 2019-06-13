import callApi from './helperApi'

export const luong = () => {
    return callApi('/thongke/nhanvien/luong')
}
