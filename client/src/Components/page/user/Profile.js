import React, { useState, useEffect} from 'react'
import '../../css/Profile.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';

import { update } from '../../../Functions/auth';

import { useDispatch } from 'react-redux';
import { keep_user_id } from '../../../store/store_current_user';


const Profile = () => {
    const navi = useNavigate()
    const dispatch = useDispatch();

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        role: '',
        address: '',
    })

    useEffect(() =>{
        setData(c_user.users.user)
    }, [])

    const c_user = useSelector((state) => ({ ...state }))
    // console.log(data)
    // setData(c_user.users.user)
    // console.log(c_user.users.user)

    const warp = (name) => {
        navi("/" + name)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, " ", value)
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const submit = (data) =>{
        update(data)
            .then((res) => {
                dispatch(keep_user_id(res.data))
                alert("Change Success")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div style={{ marginBottom: "100%" }}>

            <div >
                <div className='brand'>
                    <nav className='navi'>
                        <ul className="menu_left">
                            <li>
                                <div class="logo">

                                    <img onClick={() => { warp("Home") }} src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124" />
                                </div>
                            </li>

                            <div className='user'>
                                <h1>Profile</h1>
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
                    <div className='User'>
                        <div className='menu'>
                            <h3 >Setting</h3>
                            <div onClick={() => { warp("account") }}>Account Details</div><br/>
                            <div onClick={() => { warp("Ordered") }}>Ordered</div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "-800px", marginLeft: "600px" }}>

                    <div className='text'>
                        <div className='first'>
                            <h3>Firstname</h3>
                        </div>

                        <TextField name='firstname' onChange={handleInputChange} value={data.firstname} style={{ width: "400px" }} id="outlined-basic" label="Firstname" variant="outlined" type='text' /><br />
                    </div>

                    <div className='text' >
                        <div className='last'>
                            <h3>Lastname</h3>
                        </div>

                        <TextField name='lastname' onChange={handleInputChange} value={data.lastname} style={{ width: "400px" }} id="outlined-basic" label="Lastname" variant="outlined" type='text' /><br />
                    </div>

                    <div className='text' >
                        <div className='email'>
                            <h3>E-mail</h3>
                        </div>
                        <TextField name='email' onChange={handleInputChange} value={data.email} style={{ width: "400px" }} id="outlined-basic" label="E-mail" variant="outlined" type='email' /><br />
                    </div>

                    <div className='text' >
                        <div className='tel'>
                            <h3>Tel.</h3>
                        </div>
                        <TextField name='phone' onChange={handleInputChange} value={data.phone} style={{ width: "400px" }} id="outlined-basic" label="Tel." variant="outlined" type='tel' /><br />
                    </div>

                    <div className='text' >
                        <div className='address'>
                            <h3>Address</h3>
                        </div>
                        <TextField name='address' onChange={handleInputChange} value={data.address} style={{ width: "400px" }} id="outlined-basic" label="Address" variant="outlined" type='text' /><br />
                    </div>
                    <Button onClick={() => {submit(data)}} variant="contained">Edit</Button>

                </div>
            </div>

        </div>
    )
}

export default Profile