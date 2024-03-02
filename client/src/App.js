import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FormProduct from './Components/FormProduct';
import FormEditProduct from './Components/FormEditProduct';
import Showlistuser from './Components/page/admin/Showuser';

// import Register from './Components/RegisterPage';
// import Login from './Components/LoginPage';

import HeaderBar from './Layout/HeaderBar';
import { CssBaseline, Box, Button } from '@mui/material';
import SideBar from './Layout/SideBar';

import Register from './Components/page/auth/Register';
import Login from './Components/page/auth/Login';

// import Home from './Components/HomePage'
import Home from './Components/page/user/HomePage'

// Routes
import AdminRoutes from './Routes/AdminRoutes';
import TestRedux1 from './Components/TestRedux1';
import TestRedux2 from './Components/TestRedux2';

function App() {

  return (
    <BrowserRouter>
    <>
    <CssBaseline />
        <div>
        <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Home' element={<Home />}/>
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
                      
                      <Route path='/showuser' element={<Showlistuser />}/>
                      <Route path='/product' element={<FormProduct />}/>
                      <Route path='/product/:id' element={<FormEditProduct />}/>
                      </Routes>
                    </Box>
                  </div>
              </main> 
            </div>
          {/* <Button variant="contained">Contained</Button> */}
        
        </>
        {/* <TestRedux1 />
        <hr />
        <TestRedux2 /> */}
    </BrowserRouter>
  );
}

export default App;
