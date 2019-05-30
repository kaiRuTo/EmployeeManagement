import callApi from './helperApi'

export const getListLuong = () =>{
    return callApi('./list/_luong')
}

export const createLuong = data =>{
    return callApi('./create/_luong', 'POST', data)
}

export const updateLuong = () =>{
    return callApi('./update/_luong')
}

export const deleteLuong = () =>{
    return callApi('./delete/_luong')
}
export const detailLuong = () =>{
    return callApi('./detail/_luong')
}