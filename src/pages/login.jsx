import React, { useRef, useState } from 'react'
import axios from '../axios'
import { useCookies } from 'react-cookie'

export default function Login() {
    const password = useRef()
    const email = useRef()
    const [cookie, setCookie] = useCookies("")

    const alert = (icon, msg) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: icon,
            title: msg
          });
    }

    const submitForm = (e) => {
        e.preventDefault()
        var submitbtn = document.querySelector(".submitbtn")
        submitbtn.innerHTML =  `processing <div class="spinner-border spinner-border-sm"></div>`
        axios.post("/user/owner", {
            password : password.current.value,
            email : email.current.value,
        })
        .then(res => {
            console.log(res)
            alert("success", "User Login")
            setCookie("owner",res.data)
            window.location.href = "/my-dashboard"
        })
        .catch(err => {
            alert("error", "invalid credentials")
            submitbtn.innerHTML =  `Continue`
            console.log(err)
        })
    }

  return (
    <div className='page pt-5'>
        <h3 className="fw-bold text-center mt-5">Login into your Account</h3>
        <p className="text-center text-muted">Owner account only</p>

       <form className='mt-5' onSubmit={submitForm}>
            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                <input ref={email} required type="Email" class="form-control" placeholder="Enter your email address"/>
            </div>
            
            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-lock"></i></span>
                <input ref={password} required type="password" class="form-control" placeholder="Enter your password"/>
            </div>

            <div className="text-center">
                <button className='btn submitbtn btn-primary border-none'>Continue</button>
            </div>


        </form>
    </div>
  )
}
