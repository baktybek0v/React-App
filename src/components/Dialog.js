import React from "react";

// Font Awesome 5
import { faBackward, faChessKing, faInfo, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// React-Tooltip
import ReactTooltip from "react-tooltip";


// Modal-Alert
import { showModal } from "../my_modules/ModalAlert/ModalAlert";
import "../my_modules/ModalAlert/ModalAlert.css";


// import MODEL IMG'S + MODEL CONTENT'S
import * as modelContent from "../data/modelContent";


// объект состояинии
let state = {};

class Dialog extends React.Component {
    constructor(props) {
        super(props);

        this.index = this.props.index;
        this.modelName = this.props.modelName;
        this.modelImg = this.props.index;

        this.table1 = modelContent['model'+this.index].transitionControl;
        this.table2 = modelContent['model'+this.index].questionAnswerList;
        

        // внешний объект состояние
        state = {
            stage: 0,       // текущий состояние
            transitions: [],
            displayedQuestion: this.getText(0),   // вопрос текущего состояиние
            displayedAnswers: this.getAnswers(0), // варианты ответов вопроса текущего состояние
            displayedResult: "",
            solver: "",
        };
    }

    getText = (index) => {
        return this.table2[index].text;
    }

    getAnswers = (index) => {
        return this.table2[index].answerList.map( (item) => item.answer);       
    }

    getTitle = (index) => {
        return this.table2[index].addition.title;
    }

    getDescription = (index) => {
        return this.table2[index].addition.description;
    }

    getAnswerListDescriptions = (index) => {
        let answersIndex = this.table2[index].answerList.map( (item) => item.block);
        let listDescriptions = answersIndex.map( (block) => this.table2[block].addition.description);

        return listDescriptions;
    }

    // вернуться на 1 шаг назад
    back = () => {
        if (state['stage'] === 0) return;

        // очистка результатов решателя
        state.solver = '';
        state.displayedResult = '';
        
        // из списка всех переходов найти предыдущую состояинию и посавить как текущий
        state.stage             = state.transitions[state.transitions.length - 1];
        state.displayedQuestion = this.getText(state.stage);
        state.displayedAnswers  = this.getAnswers(state.stage);

        // после возвращение на назад удалять текущий шаг состояние stage
        state.transitions.splice(state.transitions.length - 1, 1);
    }   

    next = (answerIndex) => {

        // для текущий состояинии
        let nextCommands = [];  // список след. комманд  таблицы УП
        let nextStages = [];    // список след. состояний таблицы УП

        for (let i = 0; i < this.table1.length; i++) {
            if (this.table1[i][0] == state.stage) {
                nextCommands.push(this.table1[i]);
                nextStages.push(this.table1[i][1]);
            }
        }

        // если конец
        if (nextCommands[answerIndex][2] === 1) {
            let index = nextStages[answerIndex];
            state.displayedResult = this.getText(index);
            state.solver = 'Решатель:';
            return;
        }

        
        state.transitions.push(state.stage);    
        state.stage             = nextStages[answerIndex];
        state.displayedQuestion = this.getText(state.stage);
        state.displayedAnswers  = this.getAnswers(state.stage)

    }

    show = () => {

        function contentHeader(mainHead = ". . .", mainDes) {
            return (`
                <div class="text-block-main">
                    <span>${mainHead}</span>
                </div>
                <div class="text-block">${mainDes}</div>
            `);
        }

        function contentBody(contentHead, contentDes) {
            return (`
                <div class="text-block-header">
                    <span>${contentHead}</span>
                </div>
                <div class="text-block">${contentDes}</div>
            `);
        }

        
        let content = {
            title: this.getTitle(state.stage),
            description: this.getDescription(state.stage),
            answerList: this.getAnswers(state.stage),
            answerListDescriptions: this.getAnswerListDescriptions(state.stage)
        };

        // *** Убрать ***
        if (this.index == 1)
        content.answerListDescriptions = ['пустой', 'пустой']

        let modelContentHTML = contentHeader('. . .', content.description);
        let len = content.answerList.length && content.answerList.length;
        

        for (let i = 0; i < len; i++) {
            modelContentHTML += contentBody(
                content.answerList[i],
                content.answerListDescriptions[i]
            );
        }


        showModal(
            `${content.title}`,
            `${modelContentHTML}`,
            [
                {
                    label: "OK!",
                    onClick: (modal) => {},
                    triggerClose: true,
                },
            ]
        );
    }

  
    render() {
        return (
            <React.Fragment>
                <ReactTooltip />

                <div className="dialog" id="dialog">

                    
                    <div id="question" className="question w-50">
                        <span className="text-danger bold mr-1">Вопрос:</span>
                        <span>{state.displayedQuestion}</span>
                    </div>
                    

                    <div id="answer" className="answer flex">
                        <div className="answer__list neon-btn">
                            {
                                
                                state.displayedAnswers.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <a
                                                data-tip="нажмите кнопку помощь (справо) если вы затрудняетесь с выбором"
                                                className="item"
                                                href="#"
                                                onClick={() => this.next(index)}
                                            >
                                                <i></i>  <i></i>  <i></i>  <i></i>
                                                <span className="item">{item}</span>
                                            </a>
                                        </React.Fragment>
                                    );
                                })
                            }
                        </div>
                        <div className="answer__help neon-btn">
                            <a
                                className="item"
                                href="#"
                                data-tip="Вернуться на один шаг назад"
                                onClick={this.back}
                            >
                                <i></i> <i></i> <i></i> <i></i>
                                <span><FontAwesomeIcon icon={faBackward} /></span>
                            </a>
                         
                            <a
                                className="item"
                                href="#"
                                data-tip="Нажмите если вы затрудняетесь с выбором"
                                onClick={this.show}
                            >
                                <i></i> <i></i> <i></i> <i></i>
                                <span><FontAwesomeIcon icon={faQuestion} /></span>
                            </a>
                        </div>
                    </div>
                
                
                    <div id="solver" className="solver w-50">
                        <span className="text-danger bold mr-1">{state.solver}</span>
                        <span>{state.displayedResult}</span>
                    </div>
            

                </div>

            </React.Fragment>
        );
    }
}

export { Dialog };
