import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FormProduct from './Components/FormProduct';
import FormEditProduct from './Components/FormEditProduct';

// import Register from './Components/RegisterPage';
// import Login from './Components/LoginPage';

import Register from './Components/page/auth/Register';
import Login from './Components/page/auth/Login';

import Home from './Components/HomePage'

// Routes
import AdminRoutes from './Routes/AdminRoutes';
import TestRedux1 from './Components/TestRedux1';
import TestRedux2 from './Components/TestRedux2';

function App() {

  return (
    <BrowserRouter>
    <div>
        <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Home' element={<Home />}/>

          
            <Route path='/admin/viewable' element={
              <AdminRoutes>
                <FormProduct />
              </AdminRoutes>

            }/>
            
            <Route path='/edit/:id' element={
              
              <AdminRoutes>
                <FormEditProduct />
              </AdminRoutes>

            }/>
        </Routes>
        {/* <TestRedux1 />
        <hr />
        <TestRedux2 /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
