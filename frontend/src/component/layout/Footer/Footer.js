import React from 'react';

import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
  return (
   <footer id="footer">
   <div class="leftFooter">
       <h4>DOWNLOAD OUR APP</h4>
       <p>Download App for Android and IOS mobile phone</p>
       <img src={playStore} alt="PlayStore" />
       <img src={appStore} alt="AppStore" />
   </div>

   <div class="midFooter">
       <h1>Ecommerce</h1>
       <p>High Quality is our first priority</p>
       <p>Copyrights 2021 &copy; Anwar</p>
   </div>

   <div class="rightFooter">
     <h4>Follow Us</h4>

    <a href="https://mail.google.com/mail/u/0/#inbox">Instragram</a>
    <a href="https://mail.google.com/mail/u/0/#inbox">Youtube</a>
    <a href="https://mail.google.com/mail/u/0/#inbox">Facebook</a>


   </div>
   
   </footer>
  )
}

export default Footer