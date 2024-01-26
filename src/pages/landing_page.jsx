import React, { useRef, useState } from 'react'

export default function Landing_page() {
    const name = useRef()
    const email = useRef()
    const age = useRef()
    const occupation = useRef()
    const state = useRef()
    const address = useRef()
    const telephone= useRef()
    const marita = useRef()
    const [show, setShow] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        var submitbtn = document.querySelector(".submitbtn")
        submitbtn.innerHTML =  `processing <div class="spinner-border spinner-border-sm"></div>`
        setTimeout(()=>{
            setShow(true)
        },4000)
    }

  return (
    <div className='page'>
        <h3 className="fw-bold text-white text-center mt-2">EMINEM MEMBERSHIP CARD PERMIT <i class="fa-solid fa-credit-card text-white"></i></h3>

       { !show && <form className='mt-4' onSubmit={submitForm}>
            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                <input required type="text" class="form-control" placeholder="Enter your name"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                <input required type="Email" class="form-control" placeholder="Enter your email address"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-brands fa-magento"></i></span>
                <input required type="text" class="form-control" placeholder="Enter your age"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-bag-shopping"></i></span>
                <input required type="text" class="form-control" placeholder="Occupation"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-flag-usa"></i></span>
                <input required type="text" class="form-control" placeholder="State"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-location-dot"></i></span>
                <input required type="text" class="form-control" placeholder="Home address"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                <input required type="text" class="form-control" placeholder="Telephone number"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-thermometer"></i></span>
                <input required type="text" class="form-control" placeholder="Marita status"/>
            </div>

            <div className="text-center">
                <button className='btn submitbtn btn-info text-dark'>Continue</button>
            </div>


        </form>}


        { show && <div className="text-center mt-5">
            <p className="text-white mb-1 fw-bold">Thanks for Submitting your contact info.</p>
            <p className="">
                <a href="/" className='fw-semi-bold'>Edit our response</a>
            </p>
        </div>
        }
    </div>
  )
}
