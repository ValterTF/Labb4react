import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../assets/css/style.module.css';


class Header extends React.Component{
    render() {
        return (
            <header>
                <div className={style.container1}>
                    <div className={style.box}>
                        <NavLink to="/" id={style.logo}>Glappfri</NavLink>
                        <div id={style.timeDisplay}></div>
                        <div className={style.line}></div>
                        <input type="checkbox" id={style.check}></input>
                        <label for="check" className={style.checkbtn}>
                            <i className="fas fa-bars"></i>
                        </label>
                        <ul className={style.theInfo}>
                            <li><NavLink to="/products">Baklastare tappar & bussningar</NavLink></li>
                            <li><NavLink to="/products">Baklastare lagervaror</NavLink></li>    
                            <li><NavLink to="/products">Volvo Lv Lagervaror</NavLink></li>
                            <li><NavLink to="/support">Få hjälp</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;