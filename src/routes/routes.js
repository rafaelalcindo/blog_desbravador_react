import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import TelaInicial from '../components/telaInicial/telaInicial';


class RouterMap extends Component {
    

    render(){
        return(
            <Switch>
                <Route path="/" exact component={TelaInicial} />
            </Switch>
        );
    }
}

export default RouterMap;