import callApi from './helperApi'

export const getListItem = () => {
    return callApi('/list/phongban')
}

export const createItem = data => {
    return callApi('/create/phongban', 'POST', JSON.stringify(data))
}

export const updateItem = data => {
    return callApi(`/update/phongban/${data._id}`, 'PUT', JSON.stringify(data))
}

export const deleteItem = data => {
    return callApi(`/delete/phongban/${data}`, 'DELETE')
}

export const detailItem = data => {
    return callApi(`/find/phongban/${data}`)
}