//import React, { Fragment } from 'react';
import React from 'react';

import '../css/Model.css';
import '../css/scrollBar.css';

import { Options } from '../components/Options';
import { Navbar } from '../components/Navbar';
import { Dialog } from '../components/Dialog';


function Model2(props) {
    return (
        <div className="bg-gradient royal h-vh-100">
            <div className="container">
                <div className="model" id="model2">
                    <Options/>
                    <Navbar modelName="Холодильник" index={2}/>
                    <Dialog modelName="Холодильник" index={2}/>
                </div>
            </div>
        </div>
    );
}

export default Model2;
