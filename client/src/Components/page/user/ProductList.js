import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../../css/ProductList.css'
import '../../css/HomePage.css'
import { getdata } from '../../../Functions/product'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const ProductList = () => {
    const [data, setData] = useState([])
    const navi = useNavigate()

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        getdata()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const check = (name) =>{
        navi("/Productdetail/"+name)
    }



    return (
        <div className='brand' style={{ marginBottom: "100%" }}>
            <div>
                <nav className='navi'>
                    <ul class="menu_left">
                        <li>
                            <div class="logo">
                                <a href='/Home'><img src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124"></img></a>
                            </div>
                        </li>


                        <li>
                            <a href="/Home">ALL PRODUCT</a>
                        </li>


                        <li>
                            <a href="/Footwear">FOOTWEAR</a>

                        </li>


                        <li>
                            <a href="/Bag">BAGS</a>
                            <ul class="drop-menu">

                            </ul>
                        </li>


                        <li>
                            <a href="/access">ACCESSORIES</a>
                        </li>




                    </ul>



                    <ul class="menu_right">
                        <li>

                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                </svg>

                            </a>
                        </li>
                        <li>
                            <a href="/account">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                                </svg>

                            </a>
                        </li>
                        <li>
                            <a href="/cart">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z" />
                                </svg>

                            </a>
                        </li>

                    </ul>


                </nav>
                <div>
                    <div className="cover" style={{marginTop:"20px"}}>
                        
                            

                            {
                                data ? data.map((item, index) =>
                                <div style={{maxWidth:"200px", marginRight:"160px  "} }> {/* เพิ่ม className เพื่อใช้สไตล์ CSS สำหรับ ProductList */}
                                <ButtonBase onClick={() => {check(item._id)}}>
                                <ul>
                                        {/* <a href="/show"> */}
                                        <ul>
                                            <img src= {'http://localhost:5000/'+item.file} height={250} width={250} />
                                            <div>
                                                <h3>{item.name}</h3>
                                                <p>{item.description}</p>
                                                <p>Price: ฿{item.price}</p>
                                            </div>
                                        </ul>
                                        {/* </a> */}
                                </ul>
                                </ButtonBase>
                                
                                    {/* <Paper
                                    
                                        sx={{
                                            p: 3,
                                            margin: 'auto',
                                            maxWidth: 450,
                                            flexGrow: 1,
                                            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                        style={{ marginTop: "30px", marginLeft: "80px" }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <ButtonBase onClick={() => {check(item._id)}} sx={{ width: 128, height: 128} }>
                                                    <img src={'http://localhost:5000/'+item.file} height={150} width={150} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={1}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1" component="div">
                                                            {item.name}
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom>
                                                            size:{item.size}
                                                        </Typography>

                                                    </Grid>
                                                    
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        ${item.price}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper> */}
                                    </div>
                                ) : null
                            }
                      


                    </div>

                </div>

            </div>
            
        </div>


    )
}

export default ProductList