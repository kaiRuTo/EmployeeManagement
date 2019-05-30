import callApi from './helperApi'

export const getListNhanvien = () =>{
    return callApi('./list/_nhanvien')
}

export const createNhanvien = () =>{
    return callApi('./create/_nhanvien')
}

export const updateNhanvien = () =>{
    return callApi('./update/_nhanvien')
}

export const deleteNhanvien = () =>{
    return callApi('./delete/_nhanvien')
}

export const detailNhanvien = () =>{
    return callApi('./detail/_nhanvien')
}

