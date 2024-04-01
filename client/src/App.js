import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import FormProduct from './Components/FormProduct';
// import FormEditProduct from './Components/FormEditProduct';
import FormProduct from './Components/page/admin/Showproduct';
import FormEditProduct from './Components/page/admin/Editproduct';

import Showlistuser from './Components/page/admin/Showuser';
import Showimage from './Components/page/image/showimage';

// import Register from './Components/RegisterPage';
// import Login from './Components/LoginPage';

import HeaderBar from './Layout/HeaderBar';
import { CssBaseline, Box, Button } from '@mui/material';
import SideBar from './Layout/SideBar';

import Register from './Components/page/auth/Register';
import Login from './Components/page/auth/Login';

// import Home from './Components/HomePage'
import Home from './Components/page/user/HomePage'
import Cart from './Components/page/user/Cart';
import Productdetail from './Components/page/user/ProductDetail';

// Routes
import AdminRoutes from './Routes/AdminRoutes';
import TestRedux1 from './Components/TestRedux1';
import TestRedux2 from './Components/TestRedux2';
import Profile from './Components/page/user/Profile';
import Order from './Components/page/user/Order';
import Payment from './Components/page/user/Payment';


function App() {

  return (
    <BrowserRouter>
      <>
        <CssBaseline />
        <div>
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Productdetail/:id' element={<Productdetail />} />
            <Route path='/account' element={<Profile />} />
            <Route path='/Ordered' element={<Order />} />
            <Route path='/Payment' element={<Payment />} />
            
          </Routes>
        </div>

        {/* <Route path='/admin/viewable' element={
              <AdminRoutes>
                <FormProduct />
              </AdminRoutes>

            }/>
            
            <Route path='/edit/:id' element={
              
              <AdminRoutes>
                <FormEditProduct />
              </AdminRoutes>

            }/>
        </Routes> */}


        <div className='app'>
          <SideBar />
          <main>
            {/* <HeaderBar /> */}
            <div>
              <Box m="50px">
                <Routes>

                  <Route path='/showuser' element={<Showlistuser />} />
                  <Route path='/product' element={<FormProduct />} />
                  <Route path='/product/:id' element={<FormEditProduct />} />
                  <Route path='/getImage' element={<Showimage />} />
                </Routes>
              </Box>
            </div>
          </main>
        </div>
        {/* <Button variant="contained">Contained</Button> */}

      </>
      {/* <TestRedux1 /> */}
        {/* <hr /> */}
        {/* <TestRedux2 /> */}
    </BrowserRouter>
  );
}

export default App;
