import React from 'react';

// CSS
import '../css/option.css';

// Font Awesome 5
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Options extends React.Component {

    toggle = () => {
        document.querySelector('.options').classList.toggle('open');
    }

    toggle1 = () => console.log(this);  // пример №1 - в этом случае this ссылается текущий компонент
    toggle2 () {console.log(this); } // пример №2 - в этом случае this ссылается на undefined

    // HTML
    render() {
        return (
            <div className="options" id="options">
    
                <div className="options__badge" onClick={this.toggle}>
                    <span className="options__icon"> <FontAwesomeIcon icon={faCog} /></span>
                </div>
    
                <h2>Параметры Экспертной Системы</h2>
    
                <div className="flex-column">

                    <div className="flex align-center mb-1">
                        <label>Показать
                            <span className="ml-s text-danger letter-space-x v-bottom">Консоль</span>
                        </label>
                        <div className="options__form-check form-check">
                            <div className="form-check__button">
                                <input
                                    type="checkbox"
                                    className="form-check__checkbox"
                                    defaultChecked={false}
                                    id="lol"
                                />
                                <div className="form-check__knobs"></div>
                                <div className="form-check__layer"></div>
                            </div>
                        </div>
                    </div>
    
                    <div className="flex align-center mb-1">
                        <label
                        >Включить
                            <span className="ml-s text-danger letter-space-x v-bottom"
                            >Neon Theme</span
                            ></label
                        >
                        <div className="options__form-check form-check">
                            <div className="form-check__button">
                                <input
                                    type="checkbox"
                                    className="form-check__checkbox"
                                    defaultChecked={false}
                                    id="lol"
                                />
                                <div className="form-check__knobs"></div>
                                <div className="form-check__layer"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex align-center mb-1">
                        <label>Включить
                            <span className="ml-s text-danger letter-space-x v-bottom">Tooltip</span>
                        </label>
                        <div className="options__form-check form-check">
                            <div className="form-check__button">
                                <input
                                    type="checkbox"
                                    className="form-check__checkbox"
                                    defaultChecked={true}
                                    id="lol"
                                />
                                <div className="form-check__knobs"></div>
                                <div className="form-check__layer"></div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex align-center mb-1">
                        <label>Отключить
                            <span className="ml-s text-danger letter-space-x v-bottom">Анимацию</span>
                        </label>
                        <div className="options__form-check form-check">
                            <div className="form-check__button">
                                <input
                                    type="checkbox"
                                    className="form-check__checkbox"
                                    defaultChecked={false}
                                    id="lol"
                                />
                                <div className="form-check__knobs"></div>
                                <div className="form-check__layer"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export {Options};