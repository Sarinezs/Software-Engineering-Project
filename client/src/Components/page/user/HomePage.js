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
    
    return (
        <div className='brand' style={{ marginBottom: "100%" }}>
            <ProductList/>
        </div>


    )
}

export default HomePage