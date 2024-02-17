import './css/login.css';
import React, {useState, useEffect} from 'react'
import { Regis } from '../Functions/register';

const Login = () => {

    const [form, setForm] = useState({})

    const handleChange = (e) =>{
      console.log(e.target.name, e.target.value)
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

    const regis_submit = async (e) =>{
      e.preventDefault()
      Regis(form)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }



  return (
    <div>
      <form onSubmit={regis_submit}>
        <div class="login-form">
          <h1 class="form-title">
            ลงทะเบียน
          </h1>
          <div class="input-container">
            <input type="text" onChange={e => handleChange(e)}  name="firstname" id="firstname" placeholder="Firstname" required />
          </div>

          <div class="input-container">
            <input type="text" onChange={e => handleChange(e)} name="lastname" id="lastname" placeholder="Lastname" required />
          </div>

          <div class="input-container">
            <input type="text" onChange={e => handleChange(e)}  name="phone" id="phone" placeholder="Phone number" required />
          </div>

          <div class="input-container">
            <input type="text" onChange={e => handleChange(e)} name="email" id="email" placeholder="Email" required />
          </div>

          <div class="input-container">
            <input type="password" onChange={e => handleChange(e)}  name="password" id="password" placeholder="Password" required />
          </div>



          {/* <input type="submit" value="สมัครสมาชิก" /> */}
          <button>สมัครสมาชิก</button>

          {/* <p>
            หากเป็นสมาชิกแล้ว <a href="#">เข้าสู่ระบบ</a>
          </p> */}
        </div>
      </form>
    </div>

  )
}

export default Login