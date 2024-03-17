// None page of the webbsite glappfri.nu
// Valter Thomas Fyrbeerg, vath0008@ad.umu.se
import React from 'react';
import style4 from "../assets/css/style4.module.css";

class None extends React.Component {
  render() {
    return (
    <main>
        <div className={style4.container2}>
            <div className={style4.box2}>
                <p id={style4.Progress}>In Progress.....</p>
            </div>
        </div>
    </main>
    );
  }
}

export default None;