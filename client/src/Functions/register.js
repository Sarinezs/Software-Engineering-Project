import axios from 'axios'

export const Regis = async(data) =>
    await axios.post(process.env.REACT_APP_API + '/register', data)