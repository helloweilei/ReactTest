import Axios from 'axios'

const request = Axios.create({
    baseURL: '/',
    timeout: 6000
})

request.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data
    }
    throw Error('Error request')
}, err => {
    throw err
})

export default request