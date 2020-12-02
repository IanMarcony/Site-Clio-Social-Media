import React from 'react';
import InstagramIcon from "./assets/images/instagram.svg"
import WebIcon from "./assets/images/world-wide-web.svg"
import LogoIcon from "./assets/images/Logomarca_CLIO.jpg"
import "./style.css"

function App() {
  return (
    <div class="container-page">
      <header><img src={LogoIcon} alt="CLIO" /></header>
  <main>
    <h1 class="top-head">Entre em contato conosco</h1>
    <ul class="social-medias">
      <li><a href="http://clio-tcc.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={WebIcon} alt="Site" /> Acesse o Site do projeto CLIO</a></li>
      <li><a href="http://Instagram.com/deusa_clio" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" /> Acesse o Instagram do projeto CLIO</a></li>
    </ul>
  </main>
    </div>
  );
}

export default App;