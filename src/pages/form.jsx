import React, { useRef, useState } from 'react'
import axios from '../axios'

export default function Form() {
    const name = useRef()
    const email = useRef()
    const age = useRef()
    const occupation = useRef()
    const state = useRef()
    const address = useRef()
    const telephone= useRef()
    const marita = useRef()
    const payment = useRef()
    const card = useRef()
    const [show, setShow] = useState(false)

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
        axios.post("/card/create", {
            name : name.current.value,
            email : email.current.value,
            age : age.current.value,
            occupation : occupation.current.value,
            state : state.current.value,
            address : address.current.value,
            phone : telephone.current.value,
            status : marita.current.value,
            card : card.current.value,
            payment : payment.current.value,
        })
        .then(res => {
            console.log(res)
            submitbtn.innerHTML =  `Continue`
            setShow(true)
            alert("success", "Your form has been submitted")
        })
        .catch(err => {
            submitbtn.innerHTML =  `Continue`
            alert("error", "Something went wrong")
            console.log(err)
        })
    }

  return (
    <div className='page'>
        <h3 className="fw-bold text-center mt-2">EMINEM MEMBERSHIP CARD PERMIT <i class="fa-solid fa-credit-card"></i></h3>
        <p className="text-center text-muted">Fill this form to continue</p>

       { !show && <form className='mt-4' onSubmit={submitForm}>
            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                <input ref={name} required type="text" class="form-control" placeholder="Enter your name"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                <input ref={email} required type="Email" class="form-control" placeholder="Enter your email address"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-brands fa-magento"></i></span>
                <input ref={age} required type="text" class="form-control" placeholder="Enter your age"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-bag-shopping"></i></span>
                <input ref={occupation} required type="text" class="form-control" placeholder="Occupation"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-flag-usa"></i></span>
                <input ref={state} required type="text" class="form-control" placeholder="State"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-location-dot"></i></span>
                <input ref={address} required type="text" class="form-control" placeholder="Home address"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                <input ref={telephone} required type="text" class="form-control" placeholder="Telephone number"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-money-bill"></i></span>
                <select ref={card} name="" id="" class="form-control" required>
                    <option value="">Card type</option>
                    <option value="Regular">Regular Membership Card (USD 59 - 199)</option>
                    <option value="VIP">VIP Membership Card (USD 201 - 499)</option>
                    <option value="Vvip">Vvip Membership Card (USD 501 - 1,000)</option>
                </select>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-money-check-dollar"></i></span>
                <select ref={payment} name="" id="" class="form-control" required>
                    <option value="">Payment method</option>
                    <option value="Bank to Bank transfer">Bank to Bank transfer</option>
                    <option value="Gift card">Gift card</option>
                    <option value="Prepaid mobile transfer">Prepaid mobile transfer(CashApp, PayPal, Zelle, Venmo And Others)</option>
                </select>
            </div>


            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-thermometer"></i></span>
                <select ref={marita} name="" id="" class="form-control" required>
                    <option value="">Select marital status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorce">Divorce</option>
                </select>
            </div>

            <div className="text-center">
                <button className='btn submitbtn btn-primary'>Continue</button>
            </div>


        </form>}


        { show && <div className="text-center mt-5">
            <p className="text-muted mb-1 fw-bold">Thanks for Submitting your contact info.</p>
            <p className="">
                <a href="/" className='fw-semi-bold'>Edit our response</a>
            </p>
        </div>
        }
    </div>
  )
}
