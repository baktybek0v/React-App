import React from "react";

// css
import '../css/indication.css';

// Font Awesome 5
import { faBackward, faQuestion } from "@fortawesome/free-solid-svg-icons";
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
            indication: [0],
            displayedQuestion: this.getText(0),   // вопрос текущего состояиние
            displayedAnswers: this.getAnswers(0), // варианты ответов вопроса текущего состояние
            displayedAnswerBlocks: this.getAnswersBlocks(0),
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

    getAnswersBlocks = (index) => {
        return this.table2[index].answerList.map( (item) => item.block);       
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
        state.displayedAnswerBlocks = this.getAnswersBlocks(state.stage);

        // после возвращение на назад удалять текущий шаг состояние stage
        state.indication = state.transitions.length > 0 ? state.transitions.slice() : [0];
        state.transitions.splice(state.transitions.length - 1, 1);

        this.forceUpdate();
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

            state.indication = state.transitions.slice(); 
            state.indication.push(state.stage);
            state.indication.push(index);

            state.displayedResult = this.getText(index);
            state.solver = 'Решатель:';


            this.forceUpdate();
            return;
        }

        
        state.transitions.push(state.stage);
        state.indication = state.transitions.slice();    
        state.indication.push(nextStages[answerIndex]);
        
        state.stage             = nextStages[answerIndex];
        state.displayedQuestion = this.getText(state.stage);
        state.displayedAnswers  = this.getAnswers(state.stage)
        state.displayedAnswerBlocks = this.getAnswersBlocks(state.stage);

        this.forceUpdate();
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

        this.forceUpdate();
    }

  
    render() {
        return (
            <React.Fragment>
                <ReactTooltip />
                
                <div className="indication">
                    <span className="bold mr-2"> Индикация </span>
                    {   
                        state.indication.map( (item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="indication-item">{item}</div>
                                </React.Fragment>
                            );
                        })
                       
                    }   
                </div>


                <div className="dialog" id="dialog">

                    
                    <div id="question" className="question w-50">
                        <span className="text-danger bold mr-1">Вопрос:</span>
                        <span>{state.displayedQuestion}</span>
                    </div>
                    

                    <div id="answer" className="answer flex">
                        <div className="answer__list neon-btn">
                            {
                                state.displayedAnswers.map((item, index) => {
                                    let n = state.displayedAnswerBlocks
                                    return (
                                        <React.Fragment key={index}>
                                            <span
                                                data-tip="нажмите кнопку помощь (справо) если вы затрудняетесь с выбором"
                                                className={"item n" + n[index]}
                                                onClick={() => this.next(index)}
                                            >
                                                <i></i>  <i></i>  <i></i>  <i></i>
                                                <span className="item">{item}</span>
                                            </span>
                                        </React.Fragment>
                                    );
                                })
                            }
                        </div>
                        <div className="answer__help neon-btn">
                            <span
                                className="item"
                                data-tip="Вернуться на один шаг назад"
                                onClick={this.back}
                            >
                                <i></i> <i></i> <i></i> <i></i>
                                <span><FontAwesomeIcon icon={faBackward} /></span>
                            </span>
                         
                            <span
                                className="item"
                                data-tip="Нажмите если вы затрудняетесь с выбором"
                                onClick={this.show}
                            >
                                <i></i> <i></i> <i></i> <i></i>
                                <span><FontAwesomeIcon icon={faQuestion} /></span>
                            </span>
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



window.onload = function() {
    document.documentElement.style.setProperty('--index1', '0');
    document.documentElement.style.setProperty('--index2', '2');
};

export { Dialog };
