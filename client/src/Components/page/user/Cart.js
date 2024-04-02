import React, { useState, useEffect } from 'react'
import '../../css/Cart.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { getdata } from '../../../Functions/product';
import { cart_data, cart_delete } from '../../../Functions/cart';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { total_cost } from '../../../store/store_current_cost';
import { total_product } from '../../../store/store_current_product';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});



const Cart = () => {

    const [data, setData] = useState([])
    const [form, setForm] = useState({})
    const navi = useNavigate()
    const dispatch = useDispatch()
    var i = 0, cost = 0

    useEffect(() => {
        loadData()

    }, [])

    const loadData = async () => {
        cart_data()
            .then((res) => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch((err) => console.log(err))
    }
    for (i in data) {
        cost += data[i].price
    }

    const warp = (name) => {
        navi("/" + name)
    }

    const pay = (name, all_cost, product) =>{
        dispatch(total_cost(all_cost))
        dispatch(total_product(product))
        console.log(data)
        navi("/"+name)
    }


    const handleRemove = async (id) => {
        cart_delete(id)// บวก string
            .then((res) => {
                console.log(res)
                loadData()
            })
            .catch((err) => console.log(err))
    }

    return (

        <>
            <div className='product'>
                <div>
                    <nav className='navi'>
                        <ul class="menu_left">
                            <li>
                                <div class="logo">
                                    <img onClick={() => { warp("Home") }} src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124"></img>
                                </div>
                            </li>
                            <div className='user'>
                                <h1>Cart</h1>
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

                <br>
                </br>
            </div>
            <div className='all-grid'>
                <Paper

                    style={{ marginBottom: "100%" }}
                    sx={{
                        p: 2,
                        margin: '0px',
                        maxWidth: '100%',
                        flexGrow: 1,
                        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        boxShadow: 'none',
                    }}
                >
                    <div className='cart-grid'>

                        {
                            data ? data.map((item, index) =>
                                <Grid container spacing={2} sx={{ margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: '#f0f0f0', width: '70%' }}>
                                    <Grid item>
                                        <ButtonBase sx={{ width: 128, height: 128 }}>
                                            <Img src={'http://localhost:5000/' + item.file} height={250} width={250} style={{ marginRight: "10px", marginTop: "-10px" }} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    size {item.size}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    {item.description}
                                                </Typography>

                                            </Grid>
                                            <Grid item>
                                                <IconButton onClick={() => handleRemove(item._id)} aria-label="delete" size="large">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" component="div">
                                                ฿ {item.price}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    {/* {cost += item.price} */}
                                </Grid>
                            ) : null
                        }
                    </div>

                    <div className='result-grid'>
                        <Grid container spacing={2} sx={{ margin: '10px 0 10px 72%', marginTop: '-351px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: '#f0f0f0', width: '25%' }}>
                            <Grid item>

                            </Grid>
                            <Grid item xs={6} sm container>
                                <Grid item xs container direction="column" spacing={2} textAlign={'left'}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            ราคาสินค้า
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            จัดส่งสินค้า
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            ยอดรวมสุทธิ
                                        </Typography>

                                    </Grid>
                                    <Grid item sx={{ margin: '15px' }} textAlign={'center'}>
                                        <Button onClick={() => { pay("Payment", {cost}, {data}) }} variant="contained">ยืนยันคำสั่งซื้อ</Button>
                                      
                                    </Grid>
                                </Grid>

                                <Grid item textAlign={'left'} >
                                    <Typography variant="subtitle1" component="div">
                                        ฿ {cost}
                                    </Typography>
                                    <Typography variant="subtitle1" component="div">
                                        ฿ 100  
                                    </Typography>
                                    <Typography variant="subtitle1" component="div">
                                        ฿ {cost + 100}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>





                </Paper >
            </div>
        </>
    );
}

export default Cart;