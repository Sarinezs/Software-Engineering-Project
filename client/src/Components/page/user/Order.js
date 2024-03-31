import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Order = () => {
    return (
        <><div className='product' >
            <div>
                <nav className='navi' >
                    <ul class="menu_left" >
                        <li>
                            <div class="logo">
                                <a href='/Home'><img src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124"></img></a>
                            </div>
                        </li>
                        <div className='user'>
                            <h1>Ordered</h1>
                        </div>
                    </ul>



                    <ul class="menu_right" >
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
            </div>
            <div>
            </div>

            <br>
            </br>
        </div>
            <Paper
                style={{marginBottom:"100%"}}
                sx={{
                    p: 2,
                    margin: '0px',
                    maxWidth: '100%',
                    flexGrow: 1,
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    boxShadow: 'none',
                    
                }}
            >
                <Grid container spacing={2} sx={{ margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: '#f0f0f0', width: '100%' }}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src="https://static.nike.com/a/images/t_default/01c389c1-2186-4502-8894-ba4ac6de6de4/%E0%B8%96%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%AD-everyday-plus-cushioned-h3Pq0p.png" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Nike NSW Futura 365 Faux Fur Crossbody Bag 1L Black
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    size
                                </Typography>

                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19000.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: '#f0f0f0', width: '100%' }}>
                    <Grid item >
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src="https://static.nike.com/a/images/t_default/01c389c1-2186-4502-8894-ba4ac6de6de4/%E0%B8%96%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%AD-everyday-plus-cushioned-h3Pq0p.png" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Nike NSW Futura 365 Faux Fur Crossbody Bag 1L Black
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    size
                                </Typography>

                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19000.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>







            </Paper></>
    )
}

export default Order