import callApi from './helperApi'

export const getListItem = () =>{
    return callApi('/list/trinhdohocvan')
}

export const createItem = data =>{
    return callApi('/create/trinhdohocvan', 'POST', JSON.stringify(data))
}

export const updateItem = (data) =>{
    return callApi('/update/trinhdohocvan', 'PUT', JSON.stringify(data))
}

export const deleteItem = () =>{
    return callApi('/delete/trinhdohocvan')
}
export const detailItem = () =>{
    return callApi('/detail/trinhdohocvan')
}