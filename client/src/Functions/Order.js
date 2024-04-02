import axios from 'axios'

export const order_create = async(data) =>
    await axios.post(process.env.REACT_APP_API + '/Order', data)

export const order_data = async(data) =>{
    return await axios.get(process.env.REACT_APP_API + '/Order')
}