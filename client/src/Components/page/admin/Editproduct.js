import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// import { read, update } from '../Functions/product'
import { read, update } from '../../../Functions/product'

const FormEditProduct = () => {

    const params = useParams()
    const navigate = useNavigate()


    const [data, setData] = useState({
        name: '',
        detail: '',
        price: ''
    })

    useEffect(() => {
        loadData(params.id)
    }, [])

    const loadData = async (id) => {
        read(id)
            .then((res) => {
                setData(res.data)
            })
    }

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setData({
            ...data, // จาก usestate
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        update(params.id, data)
            .then(res => {
                console.log(res.data)
                navigate('/product')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>FormEditProduct555
            <form on onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    onChange={e => handleChange(e)}
                    placeholder='name'
                    value={data.name}
                /> <br />

                <input
                    type='number'
                    name='price'
                    onChange={e => handleChange(e)}
                    placeholder='price'
                    value={data.price}
                /> <br />

                <input
                    type='number'
                    name='type'
                    onChange={e => handleChange(e)}
                    placeholder='type'
                    value={data.type}
                /> <br />

                <input
                    type='number'
                    name='size'
                    onChange={e => handleChange(e)}
                    placeholder='size'
                    value={data.size}
                /> <br />

                <input
                    type='number'
                    name='description'
                    onChange={e => handleChange(e)}
                    placeholder='description'
                    value={data.description}
                /> <br />










                <button>Submit</button>
            </form>
        </div>

    )
}

export default FormEditProduct