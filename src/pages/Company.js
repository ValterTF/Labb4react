// Company page of the webbsite glappfri.nu
// Valter Thomas Fyrbeerg, vath0008@ad.umu.se
import React from 'react';
import { NavLink } from 'react-router-dom';

import style2 from "../assets/css/style2.module.css";
import carTrackImage from '../assets/HTML/images/bilväg.png'; 
import eketornImage from '../assets/HTML/images/image2.png';  
import glappfriImage from '../assets/HTML/images/glappfri.nu.png'; 

class Company extends React.Component {
  render() {
    return (
    <main>
        <div className={style2.container2}>
            <div className={style2.box1}>
                <p id={style2.company}>Företaget</p>
                <div id={style2.line1}></div>
                <div id={style2.line2}></div>
                <NavLink to="/" id ={style2.glappfri}>
                    <img src={glappfriImage} alt="Glappfri.nu" id={style2.Glappfrinu}></img>
                </NavLink>
                <a href="http://www.eketorn.se/" target="_blank" id={style2.eketorn}>
                    <img src={eketornImage} alt="Eketorn Trailer" id={style2.pic1} width="300px" height="90px"></img>
                </a>
                <div className={style2.infobox}>
                    <ul className={style2.information}>
                        <li><p>glappfri.nu är en del av Eketorn Trailer AB, ett Sundsvallsföretag startat 2009</p></li>
                        <li><p>Eketorn trailer är också återförsäljare av Lööve Aluminiumtrailer</p></li>
                        <li><p>OBS! Vi har ingen butik, besök endast efter överenskommelse</p></li>
                        <li><p>Vi garanterar leverans inom givet tidsintervall!</p></li>
                        <li><p>Kontakt: 070-515 11 50 SMS och Ring (kvällar och helger inga problem) E-mail: trailer@eketorn.se</p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={style2.container3}>
            <img src={carTrackImage} alt="cartrack" id={style2.cartrack}></img>
            <img src={carTrackImage} alt="cartrack" id={style2.cartrack2}></img>
            <img src={carTrackImage} alt="cartrack" id={style2.cartrack3}></img>
            <img src={carTrackImage} alt="cartrack" id={style2.cartrack4}></img>
            <img src={carTrackImage} alt="cartrack" id={style2.cartrack5}></img>
        </div>
    </main>
    );
  }
}

export default Company;
