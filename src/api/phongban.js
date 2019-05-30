import callApi from './helperApi'

export const getListPhongban = () =>{
    return callApi('./list/_phongban')
}

export const createPhongban = () =>{
    return callApi('./create/_phongban')
}

export const updatePhongban = () =>{
    return callApi('./update/_phongban')
}

export const deletePhongban = () =>{
    return callApi('./delete/_phongban')
}

export const detailPhongban = () =>{
    return callApi('./detail/_phongban')
}