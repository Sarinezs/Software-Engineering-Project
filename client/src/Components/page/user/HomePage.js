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
import ProductList from './ProductList';


const HomePage = () => {
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
            <ProductList/>
        </div>


    )
}

export default HomePage