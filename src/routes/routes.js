import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import TelaInicial from '../components/telaInicial/telaInicial';
import TelaCategoria from '../components/telaCategorias/telaCategoria';
import ListaEspecialidade from '../components/listaEspecialidade/listaEspecialidade';
import cadaEspecialidade from  '../components/cadaEspecialidade/cadaEspecialidade';


class RouterMap extends Component {
    

    render(){
        return(
            <Switch>
                <Route path="/" exact component={TelaInicial} />
                <Route path="/telaCategoria" component={TelaCategoria} />
                <Route path="/listaEspecialidade" component={ListaEspecialidade} />
                <Route path="/cadaEspecialidade" component={cadaEspecialidade} />
            </Switch>
        );
    }
}

export default RouterMap;