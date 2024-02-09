import React from 'react'

export default function Canvas() {
  return (
    <div class="offcanvas offcanvas-start" id="menu">
        <div class="offcanvas-header">
            <h1 class="offcanvas-title">Fan Card</h1>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body mt-5">
            <p><a href="/"><i class="fa-solid fa-house"></i>Home</a></p>
            <p><a href="/card-collections"><i class="fa-solid fa-arrow-right"></i>Card Collections</a></p>
            <p><a href="/enrollment"><i class="fa-solid fa-share"></i>Buy Card</a></p>
            <p><a href="/contact-us"><i class="fa-solid fa-message"></i>Contact</a></p>
            <p><a href="/about-us"><i class="fa-solid fa-eject"></i>About Us</a></p>
            <p><a href="/blogs"><i class="fa-solid fa-blog"></i>Blogs</a></p>
            <p><a href="/"><i class="fa-solid fa-percent"></i>Promo</a></p>
        </div>
    </div>
  )
}
