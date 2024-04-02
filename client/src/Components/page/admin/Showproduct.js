import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Remove, create, getdata } from '../../../Functions/product'
import "../../css/Showproduct.css"


const FormProduct = () => {

    const [data, setData] = useState([])
    const [form, setForm] = useState({
        name: '',
        price: '',
        type: '',
        size: '',
        description: '',
        file: []
    })
    const [d, setd] = useState('')

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        getdata()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        console.log(e.target.files)
        // console.log(e.target.name, e.target.value)


        if (e.target.name == 'file') {
            console.log("lakshfg")

            setForm({
                ...form,
                [e.target.name]: e.target.files[0]
            })
        }
        else {

            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }



    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formWithImageData = new FormData()
        for (const key in form) {
            formWithImageData.append(key, form[key])
        }
        // console.log(formWithImageData)
        create(formWithImageData)
            .then(res => {
                console.log(res.data)
                setForm({
                    name: '',
                    price: '',
                    type: '',
                    size: '',
                    description: '',
                    file: []
                })
                loadData()
            })
            .catch((err) => console.log(err))
    }

    const handleRemove = async (id) => {
        Remove(id)// บวก string
            .then((res) => {
                console.log(res)
                loadData()
            })
            .catch((err) => console.log(err))
    }

    // const regis = async (e) =>{
    //     e.preventDefault()
    //     test_register(form)
    //         .then(res =>{
    //             console.log(res.data)
    //             loadData()
    //         })
    // }

    return (
        <div>


            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <input value={form.name} type='text' name='name' onChange={e => handleChange(e)} placeholder='name' /><br />
                <input value={form.price} type='number' name='price' onChange={e => handleChange(e)} placeholder='price' /><br />
                <input value={form.type} type='text' name='type' onChange={e => handleChange(e)} placeholder='type' /><br />
                <input value={form.size} type='text' name='size' onChange={e => handleChange(e)} placeholder='size' /><br />
                <input value={form.description} type='text' name='description' onChange={e => handleChange(e)} placeholder='description' /><br />
                <input type='file' name='file' onChange={e => handleChange(e)} /><br />
                <button>Submit</button>
            </form>


            <table className='table' style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                <thead >
                    <tr >
                        <th className='table_th' scope='col' style={{ border: '1px solid black' }}>#</th>
                        <th className='table_th' scope='col'>name</th>
                        <th className='table_th' scope='col'>price</th>
                        <th className='table_th' scope='col'>type</th>
                        <th className='table_th' scope='col'>size</th>
                        <th className='table_th' scope='col'>description</th>
                        <th className='table_th' scope='col'>file</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        data ? data.map((item, index) =>
                            <tr key={index}>
                                <td className='table_td'>{index + 1}</td>
                                <td className='table_td'>{item.name}</td>
                                <td className='table_td'>{item.price}</td>
                                <td className='table_td'>{item.type}</td>
                                <td className='table_td'>{item.size}</td>
                                <td className='table_td'>{item.description}</td>
                                <td className='table_td'>{item.file}</td>
                                <td className='table_button'>
                                    <button onClick={() => handleRemove(item._id)}>delete</button>
                                </td>
                                {/* <button>
                                    <Link to={'/product/' + item._id}>
                                        edit
                                    </Link>

                                </button> */}

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