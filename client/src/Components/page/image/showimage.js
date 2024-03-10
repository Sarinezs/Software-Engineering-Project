import React, { useState, useEffect } from 'react'
import { getImage } from '../../../Functions/getimage'

const Showimage = () => {

    const [data, setData] = useState([])
    
    var name 

    useEffect(() => {
        loadImage()
    }, [])

    const loadImage = async () => {
        getImage()
            .then((res) => setData(res.data))
            // .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }


    return (
        <div>
            {/* {data} */}
            <table className='table'>
                <thead>
                    <tr>

                        <th scope='col'>name</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map((item, index) =>
                            
                            <tr key={index}>
                                <td>
                                    {name = 'http://localhost:5000/'+item.file}
                                    <img src={name} height={200} width={200} />
                                    {/* {item.file} */}
                                </td>
                            </tr>
                        ) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Showimage