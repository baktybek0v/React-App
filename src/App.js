//import React, { Fragment } from 'react';
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

//import { BrowserRouter } from "react-router-dom"


import Home from './pages/Home.js';
import Model1 from'./pages/Model1.js';
import Model2 from'./pages/Model2.js';

function App() {
    return (
        <HashRouter basename="process.env.PUBLIC_URL">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/Model1'} component={Model1}/>
                    <Route path={'/Model2'} component={Model2}/>
                </Switch>
        </HashRouter>
    );
}

export default App;
