import axios from 'axios'

export const getImage = async(data) =>{
    return await axios.get(process.env.REACT_APP_API + '/getImage')
        // .then(res => console.log(res.data[0].file))
        // .catch(err => console.log(err))
}