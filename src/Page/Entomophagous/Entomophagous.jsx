import React from 'react'
import './Entomophagous.css'
import IconSoybeans from '../../Images/Icon/IconSoybeans.png'


function Entomophagous() {
  return (
    <div>
      <div className='conteiner'>
        <section>
                <div className='bg-ferst-ento'>
                    <div className='bg-second'>
                        <span className='name-company'>
                        Высокоэффективные <br />Энтомофаги 
                        </span>
                       
                       <p className='ento-info'>
                        Внесение  энтофагов  при помощи БПЛА увеличивает <br /> эффективность защиты растений до 90%
                       </p>

                       <div className='ento-box-icon'>

                        <div className='ento-mini-card'>           
                          <div id='box-image-ento-icon'>
                          <img className='image-ento-icon' src={IconSoybeans} alt="icon" />
                          </div>
                          <p id='text-ento'>до 90% сои</p>
                        </div>

                        <div className='ento-mini-card-second'>           
                          <div id='box-image-ento-icon'>
                          <img className='image-ento-icon' src={IconSoybeans} alt="icon" />
                          </div>
                          <p id='text-ento'>до 85 % сахарной свеклы</p>
                        </div>

                        <div className='ento-mini-card-second'>           
                          <div id='box-image-ento-icon'>
                          <img className='image-ento-icon' src={IconSoybeans} alt="icon" />
                          </div>
                          <p id='text-ento'>до 70 % рапса</p>
                        </div>

                        <div className='ento-mini-card'>           
                          <div id='box-image-ento-icon'>
                          <img className='image-ento-icon' src={IconSoybeans} alt="icon" />
                          </div>
                          <p id='text-ento'>до 85 % подсолнуха</p>
                        </div>

                        <div className='ento-mini-card-second'>           
                          <div id='box-image-ento-icon'>
                          <img className='image-ento-icon' src={IconSoybeans} alt="icon" />
                          </div>
                          <p id='text-ento'>до 80 % кукурудзы</p>
                        </div>

                        <div className='ento-mini-card-second'>           
                          <div id='box-image-ento-icon'>
                          <img className='image-ento-icon' src={IconSoybeans} alt="icon" />
                          </div>
                          <p id='text-ento'>до 90 % овощных <br />и плодовых культур</p>
                        </div>




                       </div>
                    </div>
                </div>
            </section>
      </div>
    </div>
  )
}

export default Entomophagous

