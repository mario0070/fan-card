import React from 'react'

export default function Landing_page() {
  return (
    <div className='page'>
        <h2 className="fw-bold text-white text-center mt-2">EMINEM MEMBERSHIP CARD PERMIT</h2>
        <form className='mt-4'>
            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                <input type="text" class="form-control" placeholder="Enter your name"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                <input type="text" class="form-control" placeholder="Enter your email address"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-brands fa-magento"></i></span>
                <input type="text" class="form-control" placeholder="Enter your age"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-bag-shopping"></i></span>
                <input type="text" class="form-control" placeholder="Occupation"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-flag-usa"></i></span>
                <input type="text" class="form-control" placeholder="State"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-location-dot"></i></span>
                <input type="text" class="form-control" placeholder="Home address"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                <input type="text" class="form-control" placeholder="Telephone number"/>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fa-solid fa-thermometer"></i></span>
                <input type="text" class="form-control" placeholder="Marita status"/>
            </div>

            <div className="text-center">
                <button className='btn btn-dark text-dark'>Continue</button>
            </div>


        </form>
    </div>
  )
}
