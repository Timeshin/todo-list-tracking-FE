import axios from 'axios'

const fetchInstance = axios.create({
	baseURL: process.env.REACT_APP_URL
})

export default fetchInstance
