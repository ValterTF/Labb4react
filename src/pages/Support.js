// Support page of the webbsite glappfri.nu
// Valter Thomas Fyrbeerg, vath0008@ad.umu.se
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import style3 from "../assets/css/style3.module.css";

import phoneIcon from '../assets/HTML/images/phone.png';
import mailIcon from '../assets/HTML/images/mail.png';
import chatIcon from '../assets/HTML/images/chatt.png';
import facebookIcon from '../assets/HTML/images/facebook.png';
import truckIcon from '../assets/HTML/images/Truck.png';
import tractorIcon from '../assets/HTML/images/Tractor.png';
import craneIcon from '../assets/HTML/images/Crane.png';
import cartrack from '../assets/HTML/images/bilväg.png';

class Support extends React.Component {
  render() {
    return (
    <main>
        <div className={style3.container2}>
            <div className={style3.box1}>
                <p id={style3.support}>Support</p>
                <div id={style3.line1}></div>
                <div id={style3.line2}></div>
                <div id={style3.line3}></div>
                <div className={style3.comicons}>
                    <NavLink to="/company">
                        <img src={phoneIcon} alt="phone" className={style3.phone}></img>
                    </NavLink>
                    <NavLink to="/company">
                        <img src={mailIcon} alt="mail" className={style3.mail}></img>
                    </NavLink>
                    <NavLink to="/support">
                        <img src={chatIcon} alt="chatt" className={style3.chatt}></img>
                    </NavLink>
                    <a href="https://m.facebook.com/profile.php/?id=100069404354807&name=xhp_nt__fb__action__open_user" target="_blank">
                        <img src={facebookIcon} alt="facebook" className={style3.facebook}></img>
                    </a>
                    <div className={style3.thetrucks}>
                        <img src={truckIcon} alt="Truck" id={style3.Truck}></img>
                        <img src={tractorIcon} alt="Tractor" id={style3.Tractor}></img>
                        <img src={craneIcon} alt="Crane" id={style3.Crane}></img>
                    </div>
                </div>

                <div className={style3.infobox}>
                    <ul className={style3.information}>
                        <li><p>För att få kontakt med oss klicka ikonerna till vänster eller besök kontakt sidan</p></li>
                        <li><p>Du får sedan en förskottsfaktura via mail, så fort den är betald skickas delarna (gäller lagervaror). Har du beställt något som vi behöver ta hem så får du besked om leveranstid</p></li>
                        <li><p>DHL Servicepoint leverans är standard, men även DHL Paket till företag där det finns någon på plats dagtid som kan ta emot leveranser</p></li>
                        <li><p>Du kan även får leverans mot efterkrav ("postförskott"), men då tillkommer 100 kr vilket är den avgift DHL tar ut av oss för att de förmedlar betalningen. (Observera att moms och frakt alltid tillkommer på våra priser)</p></li>
                        <li><p>Formulär för att kontakta oss finns nedan. Annars går det att ringa samt sms:a</p></li>
                        <li><p>Vanliga frågor och funderingar samt hur du beställer presenteras nedan:</p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={style3.container3}>
            <img src={cartrack} alt="cartrack" id={style3.cartrack}></img>
            <img src={cartrack} alt="cartrack" id={style3.cartrack2}></img>
            <img src={cartrack} alt="cartrack" id={style3.cartrack3}></img>
            <img src={cartrack} alt="cartrack" id={style3.cartrack4}></img>
            <img src={cartrack} alt="cartrack" id={style3.cartrack5}></img>
        </div>


        <div className={style3.container4}>    
            <div className={style3.box2}>
                <p id={style3.to_order}>Hur beställer jag? Vad ska jag ange för information?</p> 
                <div id={style3.line4}></div>
                <p id={style3.to_order_text}>Du är alltid välkommen med din beställning eller förfrågan via mail, telefon eller SMS. (Kontaktuppgifter, <a href="company.html">kontakt </a>)</p>
                <p id={style3.to_order_text2}>Din beställning behöver innehålla följande:</p>

                <ul className={style3.question}>
                    <li><p>Vilka artiklar du önskar och antal av respektive artikel</p></li>
                    <li><p>Ev. företag</p></li>
                    <li><p>Namn</p></li>
                    <li><p>Adress</p></li>
                    <li><p>Mobilnummer</p></li>
                    <li><p>E-postadress</p></li>
                </ul>
            </div>
        </div>

        <div className={style3.container5}>
            <div className={style3.box3}>
                <div className={style3.contact_container}>
                    <form action="" className={style3.contact_left}>
                        <div className={style3.contact_left_title}>
                            <p>Kontakt</p>
                            <hr /> 
                        </div>
                    
                        <input type="text" name="name" placeholder="Namn, Ev. företag, Adress" className={style3.contact_inputs} required />
                        <input type="email" name="email" placeholder="E-postadress, Mobilnummer" className={style3.contact_inputs} required />
                        <textarea name="message" placeholder="Artiklar, m.m " className={style3.contact_inputs} required></textarea>
                        <button type="submit" >Skicka <img src={truckIcon} alt=""></img></button>
                    </form> 
                    <div className={style3.contact_right}></div>
                </div>
            </div>
        </div>
    </main>
    );
  }
}

export default Support;