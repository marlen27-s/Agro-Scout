import React from 'react'
import IconClose from '../../Images/Icon/IconClose.png'
import ImgDroneBasket from '../../Images/Img/ImgDroneBascet.png'

import './Basket.css';

function Basket({ onClose }) {
  return (
    <section>
    <div className="basket-modal-overlay">
      <div className="basket-modal-content">
        <button className="basket-close-button" onClick={onClose}>
          <img src={IconClose} alt="icon" />
        </button>
          <h5 className='text-basket'>Корзина</h5>
          <img className='img-basket' src={ImgDroneBasket} alt="img" />

          <h5 className='text-basket-second' >Корзина пуста</h5>

          <div className='green-strep'></div>
          
          
            <a href="/mainPage">
          <button className='button-nav-shop'>
           <p className='text-nav-shop'> Продолжть покупки</p>  
          </button>
          </a>
          
      </div>
    </div>
    </section>
  );
}

export default Basket;
