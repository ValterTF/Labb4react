// Item page of the webbsite glappfri.nu
// Valter Thomas Fyrbeerg, vath0008@ad.umu.se
import React from 'react';
import style6 from "../assets/css/style6.module.css";
import { NavLink, Link } from 'react-router-dom';

import H4sats from '../assets/HTML/images/H4sats.jpg';
import elips from '../assets/HTML/images/Ellipse 22.png';
import video from '../assets/HTML/lysenvideo.mp4';


class Item extends React.Component {
  render() {
    return (
    <main>
        <div className={style6.container2}>
        <div className={style6.box1}>
            <img src={H4sats} alt="H4sats" id={style6.H4}></img>
        </div>
        <div className={style6.box2}>
            <p id={style6.H4sats}>H4-sats, ombyggnad hytt</p>
            <div id={style6.line1}></div>
            <img src={elips} alt="grön" id={style6.elips}></img>
            <p id={style6.lager}>5 st i lager</p>
            <p id={style6.fit}>Passar: 621/641/622/642(ej tidiga smalhytt, aggr.nr -992/621 och -2532/641)</p>
            <p id={style6.price}>1 895 kr/sats</p>
            <h6 id={style6.OBS}>Observera, alla priser är exkl. moms och frakt.</h6>
            <p id={style6.note}>Anmärkning: Ref H4-0623Hella H4 insatser, fästplåtar i 2 mm rostfritt, rostfria monteringsskruvar och monteringsanvisning</p>
            <div id={style6.line2}></div>
            <p id={style6.order_text}>Beställning görs via Telefon eller mail (<NavLink to="/company" id="contact">kontakt </NavLink>)</p>
            <p id={style6.order_text2}>Instruktioner för beställning finns på <NavLink to="/support" id="support">Support </NavLink></p>
        </div>
    </div>

    <div className={style6.container3}>
        <div className={style6.box3}>
            <p id={style6.support_text}>Demo Video</p>
            <div id={style6.line3}></div>
            <p id={style6.video_text}>Denna video visar produkten i användning</p>
            <div id={style6.line4}></div>
            <div className={style6.videobox}>
                <video controls src={video} width="100%" height="100%"></video>
            </div>
        </div>
    </div>
    </main>
    );
  }
}

export default Item;