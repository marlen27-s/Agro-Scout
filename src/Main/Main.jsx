import React from 'react'
import './Main.css'
import IconFliying from '../Images/iconDrone_flying.svg'
import IconDrone from '../Images/iconDron.svg'
import IconPeople from '../Images/IconPeople.svg'
import IconTech from '../Images/IconTech.svg'
import IconSevings from '../Images/iconSavings.svg'
import IconServices from '../Images/IconServices.svg'
import IconMiniDron from '../Images/iconMiniDron.svg'
import IconServiceses from '../Images/iconServiceses.svg'
import ImgDronAGR from '../Images/imgDronAGR.png'
import ImgDronSTM from '../Images/imageSTSM8.png'
import ImgDronSTS from '../Images/imageSTSM1550.png'
import iconArrow from '../Images/iconArrow.svg'
import LogoBionovatik from '../Images/logo_bionovatic.svg'
import LogoBayer from '../Images/logo_bayer.svg'
import LogoCortava from '../Images/logo_corteva.svg'
import LogoKws from '../Images/logo_kws.svg'



function Main() {
  return (
    <main>
        <div className='conteiner'>
            <section>
                <div className='bg-ferst'>
                    <div className='bg-second'>
                        <span className='name-company'>
                        AgroScout - беспилотные <br /> технологии для сельского <br /> хозяйства и промышлености
                        </span>
                        <img width={'700px'} height={'230px'}  src={IconFliying} alt="dronIcon" />
                        <div className='box-information'>

                            <div className='box-pluse-ferst' >
                                <h5 className='h5-big-pluse'>
                                50 000 Га
                                </h5>
                                <p className='p-big-pluse'>
                                ежегодной обработки
                                </p>
                            </div>

                            <div className='box-pluse-second' >
                                <h5 className='h5-big-pluse'>
                                30% 
                                </h5>
                                <p className='p-big-pluse'>
                                экономии средств
                                </p>
                            </div>

                            <div className='box-pluse-thert' >
                                <h5 className='h5-big-pluse'>
                                10 команд
                                </h5>
                                <p className='p-big-pluse'>
                                специалистов
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


{/* -------------------------------section-2------------------------------------------- */}

                

             <section>
                <div className='trusting'>
                    <div className='box-info-trusting' >
                    <h3 className='h3-trusting'>
                     Почему нам дверяют?
                    </h3>
                    <p className='p-bg-trusting'>
                    Наши приемущества 
                    </p>
                    </div>
                    <img className='icon-drone' src={IconDrone} alt="iconDrone" />

                    <div className='conteiner-card-info'>

                    
                      <div className='card-info'>
                        <img className='img-info' src={IconTech} alt="Icon" />
                        <h6 className='name-card'>
                            Квалифицированные сотрудники
                        </h6>
                        <p className='descripion'>
                            Все наши сотрудники имеют многолетний опыт работы в сфере <br /> беспилотной авиации. Нами было реализовано множество <br />проектов различной тематики и самой различной сложности.   
                        </p>
                      </div>

                      <div className='card-info-second-one'>
                         <img className='img-info' src={IconSevings} alt="Icon" />
                        <h6 className='name-card'>
                            Высокотехнологичное оборудование 
                        </h6>
                        <p className='descripion'>
                           Наша компания использует современное оборудование,<br /> которое обеспечивает высокое качество в выполнении <br />поставленных задач. 
                        </p>
                      </div>
  
                      <div className='card-info-second-one'>
                         <img className='img-info' src={IconServices} alt="Icon" />
                        <h6 className='name-card'>
                            Экономия
                        </h6>
                        <p className='descripion'>
                            Использование беспилотных технологий экономит вам много <br /> времени и денег. За счет отсутствия технологической колеи <br />сохраняется до 6% урожая. Снижение расхода препаратов до 30%
                        </p>
                      </div>

                      <div className='card-info-one'>
                         <img className='img-info' src={IconMiniDron} alt="Icon" />
                        <h6 className='name-card'>
                            Оперативность
                        </h6>
                        <p className='descripion'>
                            За рабочую смену наши специалисты способны защитить более <br /> 1000 гектар ваших полей, кустарников и деревьев.
                        </p>
                     </div>

                      <div className='card-info-second'>
                         <img className='img-info' src={IconPeople} alt="Icon" />
                        <h6 className='name-card'>
                            Собственное производство 
                        </h6>
                        <p className='descripion'>
                            Мы разрабатываем и производим беспилотные летательные <br /> аппараты, поэтому знаем все тонкости их работы и можем <br /> настроить их под конкретные задачи и потребности клиентов.
                        </p>
                      </div>


                      <div className='card-info-second'>
                         <img className='img-info' src={IconServiceses} alt="Icon" />
                        <h6 className='name-card'>
                            Свой сервис
                        </h6>
                        <p className='descripion'>
                            Любой наш аппарат можно сдать на плановое техническое <br /> обслуживание или же в ремонт в наш собственный сервис,<br /> который гарантирует качество и оперативность выполнения работ.  
                        </p>
                      </div>
                    

                    </div>
                    
                    
                    
                </div>
            </section>


{/* -------------------------------section-3--------------------------------------- */}

            <section>
                <div className='offers'>
                     <h3 className='h3-offers'>
                     Наши предложения
                    </h3>
                    <p className='p-bg-offers'>
                    Наша продукция
                    </p>
                    
                    <div className='box-top-offers'>

                    <h5 className='top-offers'>
                        топ продаж
                    </h5>
                    </div>

                    <div className='card-top-offers'>
                        <img className='img-dron-top' src={ImgDronAGR} alt="img-dron" />
                        <h5 className='offers-dron-top'>
                            Агродрон AGR A22
                        </h5>
                        <div className='card-brend-dron'>
                            <p> Бренд:  AGR </p>

                            <p>Модель: 101-0101</p>
                        </div>
                        <p className='price'>
                            $15001.27
                        </p>
                        <button className='button-card-ofers'>
                            <p className='button-text'>
                            Добавить в корзину
                            </p>
                        </button>
                    </div>

                    <div className='card-top-offers-second'>
                         <img className='img-dron-top' src={ImgDronSTM} alt="img-dron" />
                        <h5 className='offers-dron-top'>
                            Агродрон AGR A22
                        </h5>
                        <div className='card-brend-dron'>
                            <p> Бренд:  AGR </p>

                            <p>Модель: 101-0101</p>
                        </div>
                        <p className='price'>
                            $15001.27
                        </p>
                        <button className='button-card-ofers'>
                            <p className='button-text'>
                            Добавить в корзину
                            </p>
                        </button>
                    </div>

                    <div className='card-top-offers-second'>
                         <img className='img-dron-top' src={ImgDronSTS} alt="img-dron" />
                        <h5 className='offers-dron-top'>
                            Агродрон AGR A22
                        </h5>
                        <div className='card-brend-dron'>
                            <p> Бренд:  AGR </p>

                            <p>Модель: 101-0101</p>
                        </div>
                        <p className='price'>
                            $15001.27
                        </p>
                        <button className='button-card-ofers'>
                            <p className='button-text'>
                            Добавить в корзину
                            </p>
                        </button>
                    </div>



                </div>
            </section>

{/* ---------------------------------------------------section-4----------------------------------------------- */}

            <section>
                <div className='backgraund-uslug'>
                    <div className='uslug'>
                        <h5 className='h5-uslug'>
                            Оказываем услуги!
                        </h5>
                        <p className='p-uslug'>
                            Принимаем заявки по биологической и химической <br /> защите растений дронами, картографии и мониторингу.
                        </p>
                         <button className='button-uslug'>
                            <p className='button-text'>
                            оставить заявку
                            </p>
                        </button>
                    </div>
                </div>
            </section>


{/* -----------------------------------------------section-5---------------------------------- */}

            <section>
                <div className='info'>
                    <div className='box-info' >
                    <h3 className='h3-info'>
                     Кто мы такие
                    </h3>
                    <p className='p-bg-info'>
                     О компании
                    </p>
                    </div>
                    <p className='p-info'>
                        Компания STS.center применяет высокотехнологичные агродроны и БПЛА, которые модернизированы и собраны нашими инженерами для сельского и лесного хозяйства, а также для промышленности. В СТС Центр <br /> 
                        работают опытные агрономы, энтомологи, пилоты, менеджеры и инженеры. Сегодня мы имеем один из самых современных парков дронов в России, что позволяет нам выполнять работы широкого спектра от <br /> 
                        простой аэрофотосъемки до лидарного сканирования местности и тепловизионного контроля. Внедрение беспилотных технологий в вашем бизнесе поможет сэкономить время и деньги, а также позволит получить <br />
                         большое преимущество перед вашими конкурентами.
                    </p>
                    <img className='button-icon-arrow' src={iconArrow} alt="icon-Arrow" />
                </div>
            </section>


{/* ------------------------------------------section-6--------------------------------------------- */}

            
            <section>
                <div className='geo-work'>
                   <div className='box-geo-work' >
                    <h3 className='h3-geo-work'>
                     Где мы работаем
                    </h3>
                    <p className='p-geo-work'>
                     Регионы присутствия
                    </p>
                    </div> 
                    <div className='box-card-geo-work'>
                      <ol>
                        <li>1.Московская область</li>
                         <li>2.Ростовская область</li>
                         <li>3. Краснодарский край</li>
                         <li>4. Ставропольский край</li>
                         <li>5. Северная Осетия</li>
                         <li>6. Кабардино-Балкария</li>
                         <li>7. Пензеская область</li>
                         <li>8. Белгородская область</li>
                         <li>9. Саратовская область</li>
                         <li>10. Воронежская область</li>
                         <li>11. Волгоградская область</li>
                         <li>12. Астраханская область</li>
                      </ol>
                    </div>

                    

                    <div  className='box-card-geo-work-second'>
                        <ol>
                        <li>13. Самарская область</li>
                         <li>14. Липецкая область</li>
                         <li>15. Орловская область</li>
                         <li>16. Курская область</li>
                         <li>17. Ульяновская область</li>
                         <li>18. Карачаево-Черкессия</li>
                         <li>19. Брянская область</li>
                         <li>20. Республика Татарстан</li>
                         <li>21. Тамбовская область</li>
                         <li>22. Тульская область</li>
                         <li>23. Калужская область</li>
                         <li>24. Республика Крым</li>
                      </ol>
                    </div>



                </div>
            </section>


            <section>
                <div className='clients'>
                    <div className='box-clients' >
                    <h3 className='h3-clients'>
                      Наши клиенты 
                    </h3>
                    <p className='p-clients'>
                      Партнеры
                    </p>
                    </div> 
                    <div className='box-logo-clients'>
                    <img src={LogoBionovatik} alt="logo" />
                    <img src={LogoBayer} alt="logo" />
                    <img src={LogoCortava} alt="logo" />
                    <img src={LogoKws} alt="logo" />

                    </div>

                </div>
            </section>


   



        </div>
    </main>
  )
}

export default Main
