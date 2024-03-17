import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../assets/css/style.module.css';

class Footer extends React.Component{
    render() {
        return (
            <footer>
                <div className={style.container5}>
                    <div className={style.nedre_meny}>
                        <div id={style.line3}></div>
                        <div id={style.line4}></div>
                        <div id={style.line5}></div>
                        <p id={style.language}>Language/Språk</p>
                        <p id={style.products}>Produkter</p>
                        <p id={style.company}>Företaget</p>

                        <NavLink to="/none" id={style.English}>In English</NavLink>
                        <NavLink to="/products" id={style.order1}>Beställ</NavLink>
                        <NavLink to="/company" id={style.about}>Om oss / Kontakt</NavLink>

                        <div className={style.copyright}>
                        <p id={style.AB}>Glappfri.nu / Eketorn Trailer AB 2024</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;