import callApi from './helperApi'

export const getListItem = () => {
    return callApi('/list/nhanvien')
}

export const createItem = data => {
    return callApi('/create/nhanvien', 'POST', JSON.stringify(data))
}

export const updateItem = data => {
    return callApi(`/update/nhanvien/${data._id}`, 'PUT', JSON.stringify(data))
}

export const deleteItem = data => {
    return callApi(`/delete/nhanvien${data}`, 'DELETE')
}

export const detailItem = data => {
    return callApi(`/find/nhanvien/${data}`)
}

