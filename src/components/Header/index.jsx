import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import logo from '../../assets/images/header_logo.svg'
import male_avatar from '../../assets/images/male_avatar.png'
import caret_down from '../../assets/icons/caret_down.svg'


const Header = () => {
    return (
        <header className='header'>
            <div className='header__content content'>
                <Link to=''>
                    <div className='content__logo_img'>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <div className='content__user user'>
                    <div className='user__avatar-box avatar-box'>
                        <img width="100%" height="100%" src={male_avatar} alt="female_avatar" />
                    </div>
                    <span className="caret-down">
                        <img src={caret_down} alt="caret_down" />
                    </span>
                </div>
            </div>

        </header>
    );
}

export default Header;
