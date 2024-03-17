// Products page of the webbsite glappfri.nu
// Valter Thomas Fyrbeerg, vath0008@ad.umu.se
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import style5 from "../assets/css/style5.module.css";

import clearIcon from '../assets/HTML/images/clear.png';
import lampaIcon from '../assets/HTML/images/lampa1.png';
import h4Icon from '../assets/HTML/images/H4sats.jpg';
import w27Icon from '../assets/HTML/images/27W-1.jpg';
import hellaledIcon from '../assets/HTML/images/Hellaled-1.jpg';


class Products extends React.Component {
  render() {
    return (
    <main>
        <div className={style5.container2}>
            <div className={style5.box1}>
                <p id={style5.products1}>Produkter</p>
                <div id={style5.line1}></div>
                <div id={style5.line2}></div>
                <div id={style5.rectangle}></div>
                <p id={style5.OBS}>OBS! Vi har ingen fysisk butik, besök endast efter överenskommelse</p>

                <div className={style5.infobox}>
                    <button id={style5.toggleInformation}>Visa text / Ta bort text</button>
                    <ul className={style5.information}>
                        <li><p>Reservdelar passande Volvo lastbilar och entreprenadmaskiner. Att spåra "svåra" delar har blivit något av en specialitet.</p></li>
                        <li><p>Tappar och bussningar till lastaggregatet på BM baklastare är vår specialitet där vi är ensamma på marknaden att erbjuda dessa. Vi har ett komplett sortiment till lastaggregatet på LM 218, 422, 620/640, 621/641 & 622/642</p></li>
                        <li><p>Reservdelar till Volvo BM baklastare, både nytillverkat och nytt från gamla lager (sk NOS)</p></li>
                        <li><p>Delar till 60-, 70- och 80-tals Volvo LV är en annan av våra specialiteter. Vi lagerför ett antal delar till L485 Viking, N/F/86/88/89 och N/F/10/12 och kan genom ett stort kontaktnät i Sverige och Europa ordna mycket av sådant som vi inte har i lager. Fråga!</p></li>
                        <li><p>Donaldsson och MANN filter - vi löser ditt filterbehov</p></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={style5.container3}>
            <div className={style5.box2}>
                <button id={style5.filter}>Filter</button>
                <div id={style5.line3}></div>
                <div className={style5.filterbox}>
                    <div id={style5.bussningarBox}>
                        <p className={style5.filterbox_text}>Baklastare tappar & bussningar</p>
                    </div>
                    <div id={style5.baklastareBox}>
                        <p className={style5.filterbox_text2}>Baklastare lagervaror</p>
                    </div>
                    <div id={style5.volvoBox}>
                        <p className={style5.filterbox_text2}>Volvo LV lagervaror</p>
                    </div>
                <img src={clearIcon} alt="Clear" id={style5.clear}></img>
                </div>

            </div>
        </div>

        <div className={style5.container4}>
            <div className={style5.box3}>
                <NavLink to="/item"id={style5.lampa}>
                    <img src={lampaIcon} id={style5.lampa1}></img>
                </NavLink>
                <NavLink to="/item"id={style5.H4}>
                    <img src={h4Icon} alt="H4sats" id={style5.H41}></img>
                </NavLink>
                <NavLink to="/item"id={style5.W27}>
                    <img src={w27Icon} alt="27W" id={style5.W271}></img>
                </NavLink>
                <NavLink to="/item"id={style5.Hellaled}>
                    <img src={hellaledIcon} alt="Hellaled" id={style5.Hellaled1}></img>
                </NavLink>

                <div id={style5.lampa_box}>
                    <p id={style5.led}>LED-sats hel-, halvljus strålkastare, ombyggnad hytt</p>
                </div>
                <div id={style5.H4sats_box}>
                    <p id={style5.H4sats}>H4-sats, ombyggnad hytt</p>
                </div>
                <div id={style5.W27_box}>
                    <p id={style5.W27_text}>Strålkastare originalutförande, hytt</p>
                </div>
                <div id={style5.Hellaled_box}>
                    <p id={style5.Hellaled_text}>Baklykta trekammare, Hella LED 10-30V</p>
                </div>
    
            </div>
        </div>
    </main>
    );
  }
}

export default Products;