import React, { useState, useEffect } from 'react'
import '../../css/HomePage.css'
import { useParams, useNavigate } from 'react-router-dom';
import { getdata, read } from '../../../Functions/product'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { cart_create } from '../../../Functions/cart';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';



const Productdetail = () => {
    const navi = useNavigate()


    const [data, setData] = useState({
        name: '',
        price: '',
        type: '',
        size: '',
        description: '',
        file: '',
    })
    const params = useParams()

    useEffect(() => {
        loadData(params.id)
    }, [])

    const loadData = async (id) => {
        read(id)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        cart_create(data)
            .then(res => {
                console.log(res.data)
                loadData()
            })
            .catch((err) => console.log("item has already in cart"))
    }

    const warp = (name) => {
        navi("/" + name)
    }



    return (
        <div className='brand' style={{ marginBottom: "100%" }}>
            <div>
                <nav className='navi'>
                    <ul className="menu_left">
                        <li>
                            <div class="logo">

                                <img onClick={() => { warp("Home") }} src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124" />
                            </div>
                        </li>

                        <div className='user'>
                            <h1>{data.name}</h1>
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
                <div>
                    <div >
                        <div className='cover' style={{ marginTop: "50px" }}>

                            <Paper
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                    maxWidth: '100%',
                                    flexGrow: 1,
                                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2#027' : '#fff',
                                }}

                            >
                                <Grid container spacing={2}>
                                    <Grid item>

                                        <ButtonBase sx={{ width: 500, height: 500 }} style={{ margin: "10px" }}>
                                            {/* <Img alt="complex" src="https://d2cva83hdk3bwc.cloudfront.net/nike-mac-attack-qs-sp-travis-scott-1.jpg" /> */}
                                            <img src={'http://localhost:5000/' + data.file} height={400} width={400} style={{ marginRight: "auto" }} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <br />
                                                <br />
                                                <Typography gutterBottom variant="h3" component="div">
                                                    {data.name}
                                                </Typography>
                                                <Grid item>
                                                    <Typography variant="h4" component="div">
                                                        ฿{data.price}
                                                    </Typography>
                                                </Grid>
                                                <Typography variant="subtitle1" gutterBottom>
                                                    size {data.size}
                                                </Typography>

                                            </Grid>
                                            <IconButton onClick={handleSubmit} style={{ marginLeft: "350px" }} color="primary" aria-label="add to shopping cart">
                                                <Button variant="contained">Add to Cart</Button>
                                            </IconButton>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default Productdetail