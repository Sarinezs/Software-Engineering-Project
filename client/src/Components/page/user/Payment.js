import React, { useState } from 'react'
import '../../css/Profile.css'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';


import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { order_create } from '../../../Functions/Order';

const Payment = () => {
    const navi = useNavigate()
    const [formdata, setFormdata] = useState({
        product: {},
        cost: '',
    })

    const { cost } = useSelector((state) => ({ ...state }))
    const { product } = useSelector((state) => ({ ...state }))
    const all_product = product.product.data
    const all_cost = cost.cost.cost + 100
    // console.log(product.product.data)
    console.log(all_cost)
    console.log(all_product.length)
    var i = 0
    
    // console.log(cost.cost.cost)

    const warp = (name) => {
        navi("/" + name)
    }

    // const updateFormData = (newData) => {
    //     setFormdata(prevState => ({
    //         ...prevState,
    //         ...newData
    //     }));
    // };

    const save = () =>{
        for( i = 0; i<all_product.length; i++){
            // console.log(all_product[i])
            order_create(all_product[i])
        }
        alert('Payment Success')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // updateFormData({
        //     product: all_product,
        //     cost: all_cost

        // })
        // console.log(formdata)
        // order_create(formdata)
        //     .then(res => {
        //         console.log(res.data)
        //     })
        //     .catch((err) => console.log("Order Error"))
        save()
    }

    return (
        <div style={{ marginBottom: "100%" }}>

            <div className='brand'>
                <nav className='navi'>
                    <ul className="menu_left">
                        <li>
                            <div class="logo">

                                <img onClick={() => { warp("Home") }} src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124" />
                            </div>
                        </li>

                        <div className='user'>
                            <h1>Payment</h1>
                        </div>


                    </ul>

                    <ul class="menu_right">

                        <li>
                            <svg onClick={() => { warp("account") }} name='profile' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </li>
                        <li>
                            <svg onClick={() => { warp("Cart") }} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z" />
                            </svg>
                        </li>
                        <li>
                            <LogoutIcon onClick={() => { warp("Login") }} />
                        </li>

                    </ul>


                </nav>
            </div>

            <div>
                <img src="https://i.ibb.co/TKgx2MC/IMG-5092.png" width="300" height="300" style={{ marginLeft: "40%", marginTop: "10%" }} />
                <br />
                <h3 style={{ marginLeft: "45%" }}> Total Cost: {cost.cost.cost + 100}</h3>
                <h3 style={{ marginLeft: "43%", marginBottom: "-3%" }}>Product : </h3>
                {
                    all_product ? all_product.map((item, index) =>
                        <div style={{ marginLeft: "49%", marginTop: "-20px" }}>
                            <h4 >{item.name} {item.price}</h4>


                        </div>
                    ) : null
                }

                <div style={{ marginLeft: "49%", marginTop: "-20px" }}>
                    <h4 >ค่าส่ง 100</h4>


                </div>


                <IconButton style={{ marginLeft: "46%" }} color="primary" aria-label="add to shopping cart">
                    <Button onClick={handleSubmit} variant="contained">Confirm</Button>
                </IconButton>
            </div>



        </div>
    )
}

export default Payment