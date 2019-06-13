
const constants = 'http://172.30.29.206:3001'

export default function callApi(endpoint, method = 'GET', body, header = {
    //Accept: 'application/json',
    'Content-Type': 'application/json',
}) {
    console.log('callApi body ', body, `${constants}${endpoint}`, header, method)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ message: 'Timeout' })
        }, 15000)
        fetch(`${constants}${endpoint}`, {
            headers: header,
            method,
            body: body,
        })
            .then(response => {
                console.log('response api: ', response, )
                if (response.status === 406) {
                    reject({message: 'Hết hạng đăng nhập'})
                }
                return response.json()
                    .then(json => ({ json, response }))
            })
            .then(({ json, response }) => {
                console.log('call api: ', `${constants}${endpoint}`, response, json)
                if (!response.ok) {
                    reject({ status: response.status, msg: json });
                }
                return resolve(json);
            })
            .then(response => response)
            .catch(err => {
                console.log('call api error ', `${constants}${endpoint}`, err)
                reject({ message: err })
            });
    });
}