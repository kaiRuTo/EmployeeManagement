import callApi from './helperApi'

export const getListItem = () => {
    return callApi('/list/chucvu')
}

export const createItem = data => {
    return callApi('/create/chucvu', 'POST', JSON.stringify(data))
}

export const updateItem = (data) => {
    return callApi('/update/chucvu', 'PUT', JSON.stringify(data))
}

export function deleteItem (){
    return callApi('/delete/chucvu')
}
export const detailItem = () => {
    return callApi('/detail/chucvu')
}