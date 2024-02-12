import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FormProduct from './Components/FormProduct';
import FormEditProduct from './Components/FormEditProduct';

function App() {

  return (
    <BrowserRouter>
    <div className="">
        <h1>hello world</h1>
        <Routes>
          
          <Route path='/' element={<FormProduct />}/>
          <Route path='/edit/:id' element={<FormEditProduct />}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
