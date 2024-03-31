import axios from 'axios'

export const cart_create = async(data) =>
    await axios.post(process.env.REACT_APP_API + '/Cart', data)

export const cart_data = async(data) =>{
    return await axios.get(process.env.REACT_APP_API + '/Cart')
}

export const cart_delete = async(id) =>
    await axios.delete(process.env.REACT_APP_API + '/Cart/'+id)