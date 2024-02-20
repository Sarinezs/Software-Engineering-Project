import React, { useState, useEffect } from 'react'

import { register } from '../../../Functions/auth'

const Register = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const tam = {
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            phonenumber: data.get("phonenumber"),
            email: data.get("email"),
            password: data.get("password")
        }

        register(tam)
        .then((res) => {
            console.log(res)
            alert(res.data)

        })
        .catch((err) =>{
            console.log(err)
        })

    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="login-form">
          <h1 class="form-title">
            ลงทะเบียน
          </h1>
          <div class="input-container">
            <input type="text"  name="firstname" id="firstname" placeholder="Firstname" required />
          </div>

          <div class="input-container">
            <input type="text"  name="lastname" id="lastname" placeholder="Lastname" required />
          </div>

          <div class="input-container">
            <input type="tel"  name="phone" id="phone" placeholder="Phone number" required />
          </div>

          <div class="input-container">
            <input type="email"  name="email" id="email" placeholder="Email" required />
          </div>

          <div class="input-container">
            <input type="password"  name="password" id="password" placeholder="Password" required />
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

export default Register