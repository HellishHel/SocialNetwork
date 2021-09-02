import React from "react";
import h from './Header.module.scss';
import l from '../../logo.module.scss';

const Header = () => {
    return (
        <header>
            <div className={l.logo}>
                <img src="https://svgsilh.com/svg/2491236-00bcd4.svg" alt=""/>
            </div>
        </header>
    );
}

export default Header;