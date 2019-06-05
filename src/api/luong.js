import callApi from './helperApi'

export const getListItem = () =>{
    return callApi('/list/luong')
}

export const createItem = data =>{
    return callApi('/create/luong', 'POST', JSON.stringify(data))
}

export const updateItem = (data) =>{
    return callApi('/update/luong', 'PUT', JSON.stringify(data))
}

export const deleteItem = () =>{
    return callApi('/delete/luong')
}
export const detailItem = () =>{
    return callApi('/detail/luong')
}