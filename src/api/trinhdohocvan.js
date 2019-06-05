import callApi from './helperApi'

export const getListItem = () => {
    return callApi('/list/trinhdohocvan')
}

export const createItem = data => {
    return callApi('/create/trinhdohocvan', 'POST', JSON.stringify(data))
}

export const updateItem = data => {
    return callApi(`/update/trinhdohocvan${data._id}`, 'PUT', JSON.stringify(data))
}

export const deleteItem = data => {
    return callApi(`/delete/trinhdohocvan/${data}`, 'DELETE')
}

export const detailItem = data => {
    return callApi(`/find/trinhdohocvan/${data}`)
}