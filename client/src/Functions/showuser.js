import axios from "axios"

export const getuser = async(data) =>
    await axios.get(process.env.REACT_APP_API + '/getuser')