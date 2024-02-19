import React from 'react'
import './register.css';
import { Link } from 'react-router-dom';
import Login from './login';


const login = () => {




  return (
    <div>
        <header>
            <h1>sketchuw</h1>
        </header>
        <form>
        <div class="login-form">
            <h1 class="form-title">ลงทะเบียน</h1>

           
              <div class="input-container">
                
                <input type="text" name="firstname" id="firstname" placeholder="Firstname" required />
              </div>

              <div class="input-container">
                
                <input type="text" name="lastname" id="lastname" placeholder="Lastname" required />
              </div>

              <div class="input-container">
                
                <input type="tel" name="phone" id="phone" placeholder="Phone number" required />
              </div>

              <div class="input-container">
                
                <input type="email" name="email" id="email" placeholder="Email" required />
              </div>

              <div class="input-container">
                
                <input type="password" name="password" id="password" placeholder="Password" required />
              </div>

              

              <input type="submit" value="สมัครสมาชิก" />
    

            <p>
              หากเป็นสมาชิกแล้ว <Link to="/login">เข้าสู่ระบบ</Link>
            </p>

            
        </div>
    

        </form>
    </div>
    
  )
}

export default login