import React from 'react';
import Home from '../components/Homepage';
import Exemple from '../components/Graph';
import {Route, Switch} from "react-router-dom";


let renderRoutes = () => {
    return (
        <Switch>
            <Route path="/Exemple/graph" component={Exemple}/>

            <Route path='*' exact={true} component={Home}/>
        </Switch>
    )
};

export default {
    renderRoutes
}