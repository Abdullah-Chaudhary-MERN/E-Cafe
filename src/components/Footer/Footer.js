import React from 'react'

export default function Footer() {
  return (
//     <div>
//       <header>
//   {/* <!-- Content --> */}
// </header>

// <main>
//   {/* <!-- Content --> */}
// </main>
<div>

<footer class="footer bg-dark">  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Opening Hours</h2>

      <ul class="nav__ul">
        <li>
          <p  href="#">Monday   9:00 - 24:00</p>
        </li>

        <li>
          <p href="#">Tuesday 9:00 - 24:00</p>
        </li>
            
        <li>
          <p href="#">Wednesday 9:00 - 24:00</p>
        </li>
        <li>
          <p href="#">Thursday  9:00 - 24:00</p>
        </li>
        <li>
          <p href="#">Thursday  9:00 - 24:00</p>
        </li>
        <li>
          <p href="#">Thursday  9:00 - 24:00</p>
        </li>
        <li>
          <p href="#">Sunday  9:00 - 02:00</p>
        </li>
      </ul>
    </li>
  </ul>

  <div class="footer__addr">
        
    <h2 class="nav__title" style={{marginTop:"-1px"}}>We Are Located At !!</h2>
    
    <address>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.1945756373725!2d74.34335827450823!3d31.51881544722081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905f12cb2fdcb%3A0x2a7e6bad217e222c!2sTim%20Hortons!5e0!3m2!1sen!2s!4v1685691222815!5m2!1sen!2s" width="700" height="250" style={{border:"0" }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
      <a class="footer__btn" href="mailto:Abdullahramy7@gmail.com">Email Us</a>
    </address>
  </div>
  <div class="legal" >
    <p>&copy; Created with 💖 By | Code Mavericks</p>
  </div>
</footer>
    </div>
  )
}
