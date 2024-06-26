import axios from 'axios'


export const Remove = async(id) =>
    await axios.delete(process.env.REACT_APP_API+'/product/'+id )

export const create = async(data) =>
    await axios.post(process.env.REACT_APP_API + '/product', data)



export const getdata = async(data) =>{
    return await axios.get(process.env.REACT_APP_API + '/product') // pathข้างหลังเอาไว้เชื่อมกับ backend
}


export const read = async(id) =>{
    return await axios.get(process.env.REACT_APP_API + '/product/'+ id)
}

export const update = async(id, data) =>{
    return await axios.put(process.env.REACT_APP_API + '/product/'+ id, data) // <== มาจากparameter
}

////// test ////////

// export const test_register = async(data) =>
//     await axios.post(process.env.REACT_APP_API + '/register', data)

// export const create = async(data) =>
//     await axios.post(process.env.REACT_APP_API + '/login', data)

// export const getdata = async(data) =>{
//     return await axios.get(process.env.REACT_APP_API + '/Checkuser') // pathข้างหลังเอาไว้เชื่อมกับ backend
// }