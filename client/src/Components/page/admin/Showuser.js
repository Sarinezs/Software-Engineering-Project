import React, { useState, useEffect } from 'react'
import { getuser } from '../../../Functions/showuser'
import { Link } from 'react-router-dom'
import SideBar from '../../../Layout/SideBar'



const Showuser = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        getuser()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }


    return (
        <table className='table' style={{ borderCollapse: 'collapse', border: '1px solid black' }}>

            <thead>
                <tr>
                    <th className='table_th' scope='col'>No</th>
                    <th className='table_th' scope='col'>Firstname</th>
                    <th className='table_th' scope='col'>Lastname</th>
                    <th className='table_th' scope='col'>Phone</th>
                    <th className='table_th' scope='col'>Email</th>
                    <th className='table_th' scope='col'>role</th>
                    <th className='table_th' scope='col'>address</th>
                </tr>
            </thead>
            <tbody>
                {
                    data ? data.map((item, index) =>
                        <tr key={index}>
                            <td className='table_td'>{index + 1}</td>
                            <td className='table_td'>{item.firstname}</td>
                            <td className='table_td'>{item.lastname}</td>
                            <td className='table_td'>{item.phone}</td>
                            <td className='table_td'>{item.email}</td>
                            <td className='table_td'>{item.role}</td>
                            <td className='table_td'>{item.address}</td>
                            {/* <td onClick={() => handleRemove(item._id)}>delete</td>
                            <button onClick={() =>handleRemove(item._id)}>delete</button> */}
                            {/* <td className='table_td'>
                                <button>
                                    <Link to={'/showuser' + item._id}>
                                        edit
                                    </Link>

                                </button>
                            </td> */}

                        </tr>
                    )
                        : null
                }
            </tbody>
        </table>
    )
}

export default Showuser