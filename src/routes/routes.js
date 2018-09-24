import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

class RouterMap extends Component {
    

    render(){
        return(
            <Switch>
                <Route path="/"  />
            </Switch>
        );
    }
}

export default RouterMap;