import Axios from 'axios'

const axios = Axios.create({
    baseURL : 'http://52.66.206.251/api'
})

export default axios