import callApi from './helperApi'

export const getListItem = () => {
    return callApi('/list/luong')
}

export const createItem = data => {
    return callApi(`/create/luong`, 'POST', JSON.stringify(data))
}

export const updateItem = data => {
    return callApi(`/update/luong/${data._id}`, 'PUT', JSON.stringify(data))
}

export const deleteItem = data => {
    return callApi(`/delete/luong/${data}`, 'DELETE')
}

export const detailItem = data => {
    return callApi(`/find/luong/${data}`)
}