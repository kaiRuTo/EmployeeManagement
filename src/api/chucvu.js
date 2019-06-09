import callApi from './helperApi'

export const getListItem = () => {
    return callApi('/list/chucvu')
}

export const createItem = data => {
    return callApi('/create/chucvu', 'POST', JSON.stringify(data))
}

export const updateItem = data => {
    return callApi(`/update/chucvu/${data._id}`, 'PUT', JSON.stringify(data))
}

export const deleteItem = data => {
    return callApi(`/delete/chucvu/${data}`, 'DELETE')
}

export const detailItem = data => {
    return callApi(`/find/chucvu/${data}`)
}