import callApi from './helperApi'

export const getListItem = () => {
    return callApi('/list/hopdonglaodong')
}

export const createItem = data => {
    return callApi('/create/hopdonglaodong', 'POST', JSON.stringify(data))
}

export const updateItem = (data) => {
    return callApi(`/update/hopdonglaodong/${data._id}`, 'PUT', JSON.stringify(data))
}

export const deleteItem = data => {
    return callApi(`/delete/hopdonglaodong//${data}`, 'DELETE')
}

export const detailItem = data => {
    return callApi(`/find/hopdonglaodong/${data}`)
}