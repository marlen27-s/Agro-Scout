import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Header.css';
import LogoCompany from '../Images/Logo.png';
import IconTelephone from '../Images/LogoTelephone.svg';
import VKIcon from '../Images/iconVk.png';
import InstagramIcon from '../Images/iconinstagram.png';
import IconTikTok from '../Images/iconTikTok.png';
import IconBasket from '../Images/iconBasket.png';
import IconMenu from '../Images/iconMenu.png';
import IconHouseBar from '../Images/Icon/IconHouse.png';
import IconBagBar from '../Images/Icon/IconBag.png';
import IconDroneMenu from '../Images/Icon/IconDroneMenu.png';
import IconJoystick from '../Images/Icon/IconJoystick.png';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  
  useEffect(() => {
    setMenuVisible(false); 
  }, [location.pathname]); 

  return (
    <header>
      <div className='container'>
        <img className='logo-company' src={LogoCompany} alt="Logo" />

        <div className='box-number'>
          <img src={IconTelephone} alt="IconTelephone" />
          <a className='number' href="tel:+501282434">+996501282434</a>
        </div>

        <div className='box-icon-site'>
          <a href="https://web.vk.me/">
            <img src={VKIcon} alt="Chat" id='icon-site'/>
          </a>
          <a href="https://about.instagram.com/" >
            <img src={InstagramIcon} alt="Telegram" id='icon-site' />
          </a>
          <a href="https://about.instagram.com/" >
            <img src={IconTikTok} alt="Chat" id='icon-site' />
          </a>
        </div>

        <h6 className='language-en'>
          EN
        </h6>

        <h6 className='language-ru'>
          RU
        </h6>

        <a href="Basket"><img className='icon-basket' src={IconBasket} alt="Basket"/></a>
    


        <img className='icon-menu' src={IconMenu} alt="Menu" onClick={toggleMenu} />

        {menuVisible && (
          <div className="icon-menu">
            <nav className="menu-items">
              <Link to="/" className="menu-item" onClick={toggleMenu}>
                <img src={IconHouseBar} alt="Home-Icon" className="menu-icon" />
                Главная
              </Link>

              <Link to="/Entomophagous" className='menu-item' onClick={toggleMenu}>
                <img src={IconBagBar} alt="Clients-Icon" className='menu-icon' />
                энтомофаги
              </Link>

              <Link to="/Spraying" className="menu-item" onClick={toggleMenu}>
                <img src={IconDroneMenu} alt="About-Icon" className="menu-icon" />
                оприскивание
              </Link>

              <Link to="/Cartography" className="menu-item" onClick={toggleMenu}>
                <img src={IconJoystick} alt="Services-Icon" className="menu-icon" />
                Картография и мониторинг
              </Link>

              <Link to="/Contact" className="menu-item" onClick={toggleMenu}>
                <img src={IconTelephone} alt="Contact-Icon" className="menu-icon" />
                Контакты
              </Link>

              <Link to="/Content" className="menu-item" onClick={toggleMenu}>
                <img src={IconTelephone} alt="Contact-Icon" className="menu-icon" />
                Контакты
              </Link>


            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;













