import callApi from './helperApi'

export const getListItem = () =>{
    return callApi('/list/nhanvien')
}

export const createItem = data =>{
    return callApi('/create/nhanvien', 'POST', JSON.stringify(data))
}

export const updateItem = data =>{
    return callApi('/update/nhanvien', 'POST', JSON.stringify(data))
}

export const deleteItem = () =>{
    return callApi('/delete/nhanvien')
}

export const detailItem = () =>{
    return callApi('/detail/nhanvien')
}

