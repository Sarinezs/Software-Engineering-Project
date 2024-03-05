import React, {useState, useEffect} from 'react'
import { getuser } from '../../../Functions/showuser'
import { Link } from 'react-router-dom'



const Showuser = () => {

    const [data, setData] = useState([])

    useEffect(() =>{
        loadData()
    }, [])

    const loadData = async () =>{
        getuser()
            .then((res)=> setData(res.data))
            .catch((err)=> console.log(err))
    }


  return (
    <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>No</th>
                    <th scope='col'>Firstname</th>
                    <th scope='col'>Lastname</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    data ? data.map((item, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            {/* <td onClick={() => handleRemove(item._id)}>delete</td>
                            <button onClick={() =>handleRemove(item._id)}>delete</button> */}
                            <button>
                                <Link to={'/showuser' + item._id}>
                                edit
                                </Link>
                                    
                            </button>
                            
                        </tr>
                    ) 
                        : null
                }
            </tbody>
        </table>
  )
}

export default Showuser