import React, {useState, useEffect} from 'react'
import axios from 'axios'
const FormProduct = () => {

    const [data, setData] = useState([])
    const [form, setForm] = useState({})

    useEffect(() =>{
        loadData()
    }, [])

    const loadData = async () =>{
        await axios.get('http://localhost:5000/api/product')
            .then((res)=> setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleChange = (e) =>{
        // console.log(e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await axios.post('http://localhost:5000/api/product', form)
            .then(res => {
                console.log(res.data)
                loadData()
            })
            .catch((err) => console.log(err))
    }

    const handleRemove = async (id) =>{
        console.log(id)
        await axios.delete('http://localhost:5000/api/product/'+id ) // บวก string
            .then((res) => {
                console.log(res)
                loadData()
            })
            .catch((err) => console.log(err))
    }

  return (
    <div>

    <form on onSubmit={handleSubmit}>
        <input type='text' name='name' onChange={e => handleChange(e)} placeholder='name' /><br/>
        <input type='text' name='detail' onChange={e => handleChange(e)} placeholder='detail' /><br/>
        <input type='number' name='price' onChange={e => handleChange(e)} placeholder='price' /><br/>
        <button>Submit</button>
    </form>

        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>name</th>
                    <th scope='col'>detail</th>
                    <th scope='col'>price</th>
                    <th scope='col'>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data ? data.map((item, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.detail}</td>
                            <td>{item.price}</td>
                            {/* <td onClick={() => handleRemove(item._id)}>delete</td> */}
                            <button onClick={() =>handleRemove(item._id)}>delete</button>
                            
                        </tr>
                    ) 
                        : null
                }
            </tbody>
        </table>
        
    </div>
  )
}

export default FormProduct