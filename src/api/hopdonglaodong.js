import callApi from './helperApi'

export const getListItem = () =>{
    return callApi('/list/hopdonglaodong')
}

export const createItem = data =>{
    return callApi('/create/hopdonglaodong', 'POST', JSON.stringify(data))
}

export const updateItem = (data) =>{
    return callApi('/update/hopdonglaodong', 'PUT', JSON.stringify(data))
}

export const deleteItem = () =>{
    return callApi('/delete/hopdonglaodong')
}
export const detailItem = () =>{
    return callApi('/detail//hopdonglaodong')
}