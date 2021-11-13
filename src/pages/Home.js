import React from "react";
import "../css/Home.css";


// Tooltip
import ReactTooltip from 'react-tooltip';        // Module Tooltip


// carousel module
import "../my_modules/Carousel/Carousel.css";
import {carousel} from "../my_modules/Carousel/Carousel";

// Font Awesome 5

import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {


    return (
        <React.Fragment>
            <ReactTooltip />
            <div className="bg-gradient royal h-vh-100 w-100 pt-2">

                <div className="flex justify-center align-center mb-5">
                    <h2 className="text-center mr-7"><x-sign>ЭКСПЕРТНЫЕ СИСТЕМЫ</x-sign></h2>
                    <div class="neon-btn max-w-20">
                         <a 
                            className="item"
                            data-tip="показать оставшеюся часть ЭС"
                            href="https://www.google.com"
                         >

                            <i></i>  <i></i> <i></i>  <i></i>
                            <span>ЧАСТЬ #2</span>
                        </a>
                    </div>
                </div>


                <div className="container-carousel">
                <div className="carousel">
                    <div className="carousel item a">
                        <div className="panel">
                            <div className="background bg-img-1"> </div>
                            <div className="text">
                                <div className="location">Экспертная Система</div>
                                <div className="title">Как выбрать</div>
                                <div className="author text-upper-case text-danger">Фотоаппарат</div>
                                <a className="link" href="./#/model1"> Перейти </a>
                            </div>
                        </div>
                    </div>
                    <div className="item b">
                        <div className="panel">
                            <div className="background bg-img-2"></div>
                            <div className="text">
                                <div className="location">Экспертная Система</div>
                                <div className="title">Как выбрать</div>
                                <div className="author text-upper-case text-danger">Холодильник</div>
                                <a className="link" href="./#/model2"> Перейти </a>
                            </div>
                        </div>
                    </div>
                    <div className="item c border-1">
                        <div className="panel">
                            <div className="background bg-unknown"></div>
                            <div className="text">
                                <div className="location">Экспертная Система</div>
                                <div className="title">Как выбрать</div>
                                <div className="author text-upper-case text-danger">?</div>
                                <a className="link" href="./#/model2"> Перейти </a>
                            </div>
                        </div>
                    </div>
                    <div className="item d border-1">
                        <div className="panel">
                            <div className="background bg-unknown"></div>
                            <div className="text">
                                <div className="location">Экспертная Система</div>
                                <div className="title">Как выбрать</div>
                                <div className="author text-upper-case text-danger">?</div>
                                <a className="link" href="./#/model2"> Перейти </a>
                            </div>
                        </div>
                    </div>
                    <div className="item e border-1">
                        <div className="panel">
                            <div className="background bg-unknown"></div>
                            <div className="text">
                                <div className="location">Экспертная Система</div>
                                <div className="title">Как выбрать</div>
                                <div className="author text-upper-case text-danger">?</div>
                                <a className="link" href="./#/model2"> Перейти </a>
                            </div>
                        </div>
                    </div>
                    <div className="item f border-1">
                        <div className="panel">
                            <div className="background bg-unknown"></div>
                            <div className="text">
                                <div className="location">Экспертная Система</div>
                                <div className="title">Как выбрать</div>
                                <div className="author text-upper-case text-danger">?</div>
                                <a className="link" href="./#/model2"> Перейти </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="carousel-prev">&lt;</div>
                <div className="carousel-next">&gt;</div>
               
            </div>
        </React.Fragment>
    );
};



export default Home;