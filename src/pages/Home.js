// Home page of the webbsite glappfri.nu
// Valter Thomas Fyrbeerg, vath0008@ad.umu.se
import React from 'react';
import style from "../assets/css/style.module.css";
import { NavLink, Link } from 'react-router-dom';

import carTrackImage from '../assets/HTML/images/bilväg.png';
import eketornImage from '../assets/HTML/images/image2.png';
import phoneIcon from '../assets/HTML/images/phone.png';
import mailIcon from '../assets/HTML/images/mail.png';
import chatIcon from '../assets/HTML/images/chatt.png';
import facebookIcon from '../assets/HTML/images/facebook.png';
import bussningarImage from '../assets/HTML/images/bussningar.png';
import lampaImage from '../assets/HTML/images/lampa1.png';
import brytareImage from '../assets/HTML/images/brytare1.png';
import filterIcon from '../assets/HTML/images/filter.png';

class Home extends React.Component {
  render() {
    return (

    <main>
      <div className={style.container2}>
        <div className={style.box1}>
            <div id={style.rectangle}></div>
            <div id={style.Glappfrinu}>Glappfri.nu</div>
            <div id={style.line1}></div>
            <p id={style.hemtext}>Vi löser dina tunga reservdelsbehov</p>
            <p id={style.order}>Beställ här!</p> 
      </div> 

        <div className={style.box2}>
            <a href="http://www.eketorn.se/" className={style.eketornse} target="_blank">
            <img src={eketornImage} alt="Eketorn Trailer" className={style.pic1} id={style.image2}></img>
            </a>
            <p id={style.EketornTrailer}>Eketorn Trailer AB</p>
            <p id={style.Sundsvall}>Sundssvallsföretag sedan 2009</p>
        </div>
      </div>

      <div className={style.container3}>
        <img src={carTrackImage} alt="cartrack" className={style.cartrack}></img>
        <img src={carTrackImage} alt="cartrack" className={style.cartrack2}></img>
        <img src={carTrackImage} alt="cartrack" className={style.cartrack3}></img>
        <img src={carTrackImage} alt="cartrack" className={style.cartrack4}></img>
        <img src={carTrackImage} alt="cartrack" className={style.cartrack5}></img>

        <div className={style.com_icons}>
            <NavLink to="/company">
              <img src={phoneIcon} alt="phone" className={style.phone}></img>
            </NavLink>
            <NavLink to="/company">
              <img src={mailIcon} alt="mail" className={style.mail}></img>
            </NavLink>
            <NavLink to="/support">
              <img src={chatIcon} alt="chatt" className={style.chatt}></img>
            </NavLink>
            <a href="https://m.facebook.com/profile.php/?id=100069404354807&name=xhp_nt__fb__action__open_user" target="_blank">
              <img src={facebookIcon} alt="facebook" className={style.facebook}></img>
            </a>
        </div>
      </div>

      <div className={style.container4}>
        <div className={style.box3}>
            <p id={style.erbjuder}>Vad erbjuder vi?</p>
            <div id={style.line2}></div>
            <div id={style.rectangle3}></div>
        </div>

        <div className={style.box4}>
            <div id={style.rectangle2}></div>
            <NavLink to="/products" id={style.baklastare}>Baklastare tappar & bussningar</NavLink>
            <NavLink to="/products" id={style.baklastare_lager}>Baklastare lagervaror</NavLink>
            <NavLink to="/products" id={style.Volvo}>Volvo LV lagervaror</NavLink>

            <div id={style.rectangle4}></div>
            <div id={style.rectangle5}></div>
            <div id={style.rectangle6}></div>
        </div>

        <div className={style.pictures}>
          <img src={bussningarImage} alt="bussningar" className={style.bussningar}></img>
          <img src={lampaImage} alt="lampa" className={style.lampa}></img>
          <img src={brytareImage} alt="brytare" className={style.brytare}></img>
            <NavLink to="/company" className={style.filterbox}>
              <img src={filterIcon} alt="filter" className={style.filter}></img>
            </NavLink>
            <p id={style.filtertext}>Vi kan även leverera Donaldsson och Mann filter till de flesta tillämpningar. Skicka din förfrågan till oss</p>
        </div>
      </div>

    </main>
    );
  }
}

export default Home;
