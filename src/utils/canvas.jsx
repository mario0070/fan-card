import React, { useEffect } from 'react'

export default function Canvas() {
  const navs = [
    {
      name : "Home",
      url : "/"
    },
    {
      name : "Card Collections",
      url : "/card-collections"
    },
    {
      name : "Buy Card",
      url : "/enrollment"
    },
    {
      name : "Contact",
      url : "/contact-us"
    },
    {
      name : "About Us",
      url : "/about-us"
    },
    {
      name : "Blogs",
      url : "/blogs"
    },
    {
      name : "Promo",
      url : "/promo"
    },
  ]

  useEffect(() => {
    var links = document.querySelectorAll(".links")
    links.forEach((val, index) => {
      if(window.location.pathname == navs[index].url){
        val.classList.add("active")
      }
    })
  },[])

  return (
    <div class="offcanvas offcanvas-start" id="menu">
        <div class="offcanvas-header">
            <h1 class="offcanvas-title">Fan Card</h1>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body mt-5">
            <p className='links'><a href="/"><i class="fa-solid fa-house"></i>Home</a></p>
            <p className='links'><a href="/card-collections"><i class="fa-solid fa-arrow-right"></i>Card Collections</a></p>
            <p className='links'><a href="/enrollment"><i class="fa-solid fa-share"></i>Buy Card</a></p>
            <p className='links'><a href="/contact-us"><i class="fa-solid fa-message"></i>Contact</a></p>
            <p className='links'><a href="/about-us"><i class="fa-solid fa-eject"></i>About Us</a></p>
            <p className='links'><a href="/blogs"><i class="fa-solid fa-blog"></i>Blogs</a></p>
            <p className='links'><a href="/promo"><i class="fa-solid fa-percent"></i>Promo</a></p>
        </div>
    </div>
  )
}
