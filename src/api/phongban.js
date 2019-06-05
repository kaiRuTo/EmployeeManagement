import callApi from './helperApi'

export const getListItem = () =>{
    return callApi('/list/phongban')
}

export const createItem = data =>{
    return callApi('/create/phongban', 'POST', JSON.stringify(data))
}

export const updateItem = data =>{
    return callApi('/update/phongban', 'POST', JSON.stringify(data))
}

export const deleteItem = () =>{
    return callApi('/delete/phongban')
}

export const detailItem = () =>{
    return callApi('/detail/phongban')
}