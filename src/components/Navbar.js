import React from 'react';

// Font Awesome 5
import { faSitemap, faUndo, faSignOutAlt, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import ReactTooltip from 'react-tooltip';        // Module Tooltip
import MAGNIFIENT from '../img/magnifient.png';  // import MAGNIFIENT IMG


// import MODEL IMG'S + MODEL CONTENT'S
import * as imgALL from "../data/modelImg";
import * as modelContent from "../data/modelContent";


// save page position
let [globalX, globalY] = [0, 0];
document.addEventListener('mousemove', e => [globalX, globalY] = [e.pageX, e.pageY], false);


class Navbar extends React.Component {

    constructor(props){
        super(props);
        
        this.index = props.index;
        this.modelName = props.modelName;

        this.modelImg = 'img'+ this.index;
        this.table1 = modelContent['model' + props.index].transitionControl;
        this.table2 = modelContent['model' + props.index].questionAnswerList;
    }

    getAllQuestion = () => {
        let list = [];
        for (let question of this.getQuestionAnswerList().keys()) {
            list.push(question);
        }
        return list;
    }


    getAllAnswer = () => {
        let list = [];
        for (let answers of this.getQuestionAnswerList().values()) {
            list.push(answers);
        }
        return list;
    }

    getQuestionAnswerList = () => {
        let list = new Map();

        for (let i=0; i<this.table1.length; i++) {
            let questionIndex = this.table1[i][0];

            let getAnswerBlocks = this.table2[questionIndex].answerList.map( (item) => item.block);
            let getFullAnswers = getAnswerBlocks.map((block) => this.table2[block].addition.fullAnswer);

            if (!list.has(this.table2[questionIndex].text))
            list.set(this.table2[questionIndex].text, getFullAnswers);
        }

        return list;
    }


    refresh = () => {
        window.location.reload();
    }

    open = () => {
        const modal = document.querySelector(".modal");
        const modalContainer = document.querySelector(".modal-container");
        modal.classList.remove("hide");
        modalContainer.classList.remove("hide");
    }

    close = () => {
        const modal = document.querySelector(".modal");
        const modalContainer = document.querySelector(".modal-container");
        setTimeout(() => {
            modal.classList.add("hide");
        }, 0);
        modalContainer.classList.add("hide");
    }

    zoomEnter = () => {
        let zoom = 3;

        let img = document.querySelector('.modal .content-img img');
        let imgBlock = document.querySelector('.modal .content-img img');
        let scaleImg = document.querySelector('.modal .modal-content .content-img-zoom');
        let text = document.querySelector('.modal .modal-content .content-img-zoom h3');

        let imgWidth = imgBlock.getBoundingClientRect().width;
        let imgHeight = imgBlock.getBoundingClientRect().height;

        let cursor = document.querySelector('.modal .content-img-cursor');
        let cursorWidth = cursor.getBoundingClientRect().width;
        let cursorHeight = cursor.getBoundingClientRect().height;

        let posX = globalX - imgBlock.getBoundingClientRect().left - cursorWidth / 2;
        let posY = globalY - imgBlock.getBoundingClientRect().top - cursorHeight / 2;


        if (posX < 0) posX = 0;
        if (posY < 0) posY = 0;
        if (posX > (imgWidth - cursorWidth)) posX = imgWidth - cursorWidth;
        if (posY > (imgHeight - cursorHeight)) posY = imgHeight - cursorHeight;


        cursor.style.left = posX + 'px';
        cursor.style.top = posY + 'px';

        posX *= zoom;
        posY *= zoom;

        posX -= 90;
        posY -= 30;

        scaleImg.style.backgroundImage = `url('${img.getAttribute('src')}')`;
        scaleImg.style.backgroundSize = (imgWidth * zoom) + 'px';
        scaleImg.style.backgroundPositionX = `-${posX}px`;
        scaleImg.style.backgroundPositionY = `-${posY}px`;
        text.style.display = "none";

        if (cursor.classList.contains('hide')) {
            cursor.classList.remove('hide');
        }

        if (!scaleImg.classList.contains('active')) {
            scaleImg.classList.add('active');
        }
    }

    zoomLeave = () => {
        let scaleImg = document.querySelector('.modal .modal-content .content-img-zoom');
        let text = document.querySelector('.modal .modal-content .content-img-zoom h3');

        scaleImg.style.backgroundImage = `url("${MAGNIFIENT}")`;
        scaleImg.style.backgroundPosition = "center 100px"
        scaleImg.style.backgroundSize = '216px';
        text.style.display = "block";

        let cursor = document.querySelector('.modal .content-img-cursor');
        if (!cursor.classList.contains('hide')) {
            cursor.classList.add('hide');
        }

        if (scaleImg.classList.contains('active')) {
            scaleImg.classList.remove('active');
        }
    }

    render() {
        return (
            <React.Fragment>
                <ReactTooltip />

                {
                    /* <div className="buttons-container">
                    <button className="open-modal" onClick={this.open}>Open Modal</button>
                    </div> */
                }

                <div className="modal hide">
                    <div className="modal-container hide">
                        <div className="modal-header">
                            <h2>
                                Как выбрать <span className="text-danger">{this.modelName}?</span>
                            </h2>
                            <button className="close-modal" onClick={this.close}>
                                <FontAwesomeIcon icon={faWindowClose} />
                            </button>
                        </div>

                        <div className="modal-content">
                            <div className="row p-2">
                                <div className="w-50 content-img"
                                    onMouseMove={this.zoomEnter}
                                    onMouseLeave={this.zoomLeave}>
                                    <div className="content-img-cursor hide"></div>
                                    <img src={imgALL[this.modelImg]}></img>
                                </div>
                                <div className="content-img-zoom py-2 px-3">
                                    <h3 className="bold text-center">Наведите мышкой в нужную область картинки для приближение</h3>
                                </div>
                            </div>


                            <div className="p-1 flex justify-between">

                                {/* Таблица №1 */}
                                <table className='table_dark w-35'>
                                    <thead>
                                        <tr>
                                            <th colSpan="4" className="text-dark">Таблица №1 - Управление Переходами</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Начальное состояние</td>
                                            <td>Начальное состояние</td>
                                            <td>Конец поиска</td>
                                        </tr>

                                        {
                                            this.table1.map((item, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <tr key={index}>
                                                            {
                                                                item.map((element, itemIndex) => {
                                                                    return (
                                                                        <React.Fragment key={itemIndex}>
                                                                            <td key={itemIndex}>{element}</td>
                                                                        </React.Fragment>
                                                                    );
                                                                })
                                                            }
                                                        </tr>
                                                    </React.Fragment>
                                                );
                                            })
                                            
                                        }

                                    </tbody>

                                </table>

                                {/* Таблица №2 */}
                                <table className="table_dark w-65">
                                    <thead>
                                        <tr>
                                            <th colSpan="4" className="text-dark">Таблица №2 - Вопросы и ответы</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Вопрос</td>
                                            <td>Ответ пользователя</td>
                                        </tr>
                                    
                                        {   
                                            this.getAllQuestion().map( (question, qIndex) => {
                                                return(
                                                    <React.Fragment key={qIndex}>
                                                        {
                                                            this.getAllAnswer()[qIndex].map( (answer, aIndex) => {
                                                                return (
                                                                    <React.Fragment key={aIndex+999}>
                                                                        <tr>
                                                                            <td key={qIndex}>{question}</td>
                                                                            <td key={aIndex+999}>{answer}</td>
                                                                        </tr>
                                                                    </React.Fragment>
                                                                );
                                                            })
                                                        }
                                                        
                                                    </React.Fragment>
                                                )
                                            })
                                            
                                        
                                        /*
                                        <tr>
                                            <td>Ограничены ли вы в бюджете?</td>
                                            <td>Да, я ограничен(-а) в бюджете</td>
                                        </tr>
                                        <tr>
                                            <td>Ограничены ли вы в бюджете?</td>
                                            <td>Нет, я ограничен(-а) в бюджете</td>
                                        </tr>*/
                                        
                                    
                                        }
                                    
                                      
                                    </tbody>

                                </table>
                            </div>



                        </div>

                    </div>
                </div>

                <nav className="navbar">
                    <h1 className="neon-text">Как выбрать <span className="text-danger">{this.modelName}?</span></h1>
                    <div className="panel-control" id="panel-control">
                        <div className="neon-btn">

                            {/* <p ref={ref => this.fooRef = ref} data-tip='tooltip'></p> */}

                            <span className="item-1 open-modal" data-tip="Информация" onClick={this.open}>
                                <i></i>  <i></i> <i></i>  <i></i>
                                <span><FontAwesomeIcon icon={faSitemap} /></span>
                            </span>
                            <span className="item-2" onClick={this.refresh} data-tip="Сбросит всё и начать с начала">
                                <i></i>  <i></i> <i></i>  <i></i>
                                <span><FontAwesomeIcon icon={faUndo} /></span>
                            </span>
                            <a className="item-3" href="/" data-tip="Выйти из ЭС">
                                <i></i>  <i></i> <i></i>  <i></i>
                                <span><FontAwesomeIcon icon={faSignOutAlt} /></span>
                            </a>
                        </div>
                    </div>
                </nav>


            </React.Fragment>

        );
    }
}


export { Navbar };

