import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../css/ProductList.css'
import '../../css/HomePage.css'
import { getdata } from '../../../Functions/product'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { useSelector, useDispatch } from 'react-redux';
import { keep_user_id } from '../../../store/store_current_user';

import LogoutIcon from '@mui/icons-material/Logout';


const ProductList = () => {
    const [data, setData] = useState([])
    const navi = useNavigate()
    const dispatch = useDispatch();
    const c_user = useSelector((state) => ({ ...state }))
    const [query, setQuery] = useState("");
    // console.log(c_user)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        getdata()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const check = (name) => {
        navi("/Productdetail/" + name)
    }

    const warp = (data, name) => {
        navi("/" + name)
    }



    return (
        <div className='brand' style={{ marginBottom: "100%" }}>
            <div>
                <nav className='navi'>
                    <ul class="menu_left">
                        <li>
                            <div class="logo">
                                <img onClick={() => { warp(c_user, "Home") }} src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124"></img>
                            </div>
                        </li>

                        <div className='user'>
                            <h1>Home</h1>
                        </div>



                    </ul>



                    <ul class="menu_right">

                        <li>

                            <input
                                type="text"
                                placeholder="Search"
                                className="search"
                                onChange={(e) => setQuery(e.target.value)}

                            />


                        </li>
                        <li>
                            <svg onClick={() => { warp(c_user, "account") }} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                            </svg>

                        </li>
                        <li>

                            <svg onClick={() => { warp(c_user, "Cart") }} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z" />
                            </svg>

                        </li>
                        <li>
                            <LogoutIcon onClick={() => { warp(c_user, "Login") }} />
                        </li>

                    </ul>


                </nav>
                <div>
                    <div className="cover" style={{ marginTop: "20px" }}>

                        {/* {
                            data.filter((product) => product.name.toLowerCase().includes(query)).map((product) => (
                                <h3>{product.name}</h3>
                            ))
                        } */}

                        {/* {
                            data ? data.map((item, index) =>
                                
                                <div style={{ maxWidth: "200px", marginRight: "160px  " }}>

                                    <ButtonBase onClick={() => { check(item._id) }}>

                                        <ul>
                                            <ul>

                                                <img src={'http://localhost:5000/' + item.file} height={250} width={250} />
                                                <div>
                                                    <h3>
                                                        {item.name}

                                                    </h3>

                                                    <p>{item.description}</p>
                                                    <p>Price: ฿{item.price}</p>

                                                </div>
                                            </ul>
                                        </ul>
                                    </ButtonBase>


                                </div>
                            ) : null
                        } */}
                        {/* {data[0].name} */}

                        {
                            data ? data.filter((product) => product.name.toLowerCase().includes(query)).map((item, index) =>

                                <div style={{ maxWidth: "200px", marginRight: "160px  " }}>

                                    <ButtonBase onClick={() => { check(item._id) }}>

                                        <ul>
                                            <ul>

                                                <img src={'http://localhost:5000/' + item.file} height={250} width={300} />
                                                <div>
                                                    <h3>
                                                        {item.name}

                                                    </h3>

                                                    <p>{item.description}</p>
                                                    <p>Price: ฿{item.price}</p>

                                                </div>
                                            </ul>
                                        </ul>
                                    </ButtonBase>


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