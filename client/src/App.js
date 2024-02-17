import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FormProduct from './Components/FormProduct';
import FormEditProduct from './Components/FormEditProduct';

import Login from './Components/Login';

function App() {

  return (
    <BrowserRouter>
    <div className="">
        <Routes>
          
          {/* <Route path='/' element={<FormProduct />}/> */}
          <Route path='/edit/:id' element={<FormEditProduct />}/>
          <Route path='/' element={<Login />}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
