import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FormProduct from './Components/FormProduct';
import FormEditProduct from './Components/FormEditProduct';

import Register from './Components/RegisterPage';
import Login from './Components/LoginPage';

import Home from './Components/HomePage'

// Routes
import AdminRoutes from './Routes/AdminRoutes';

function App() {

  return (
    <BrowserRouter>
    <div>
        <Routes>
          
          
          <Route path='/Register' element={<Register />}/>
          <Route path='/Login' element={<Login />}/>

          
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

        
        
    </div>
    </BrowserRouter>
  );
}

export default App;
