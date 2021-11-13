import React from "react";
import "../css/Home.css";

const Home = () => {
    return (
        <React.Fragment>
        
            <div className="bg-gradient royal h-vh-100 w-100 pt-4">

                <h1 className="text-center mb-1">
                    <x-sign>Выберите Экспертную Систему</x-sign>
                </h1>

                <div className="w-100 h-100 flex justify-center align-start">
                    <div className="panels">
                        <div className="panel">
                            <div className="background bg_1"></div>
                            <div className="text">
                                <div className="location">Экспертная Система</div>
                                <div className="title">Как выбрать</div>
                                <div className="author text-upper-case text-danger">Фотоаппарат</div>
                                <a className="link" href="./#/model1"> Перейти </a>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="background bg_2"></div>
                            <div className="text">
                                <div className="location">Экспертная Система</div>
                                <div className="title">Как выбрать</div>
                                <div className="author text-upper-case text-danger">Холодильник</div>
                                <a className="link" href="./#/model2"> Перейти </a>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="background bg_3"></div>
                            <div className="text">
                                <div className="location">Экспертная Система</div>
                                <div className="title">Как выбрать</div>
                                <div className="author text-upper-case text-danger">Язык Программирование</div>
                                <a className="link" href="./#/model3"> Перейти </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

           
        </React.Fragment>
    );
};

export default Home;