import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import TelaInicial from '../components/telaInicial/telaInicial';
import TelaCategoria from '../components/telaCategorias/telaCategoria';
import ListaEspecialidade from '../components/listaEspecialidade/listaEspecialidade';
import cadaEspecialidade from  '../components/cadaEspecialidade/cadaEspecialidade';

import Login from '../components/adm/login/login';
import PostEspecialidade from '../components/adm/postEspecialidade/postEspecialidade';



class RouterMap extends Component {
    

    render(){
        return(
            <Switch>
                <Route path="/" exact component={TelaInicial} />
                <Route path="/telaCategoria" component={TelaCategoria} />
                <Route path="/listaEspecialidade" component={ListaEspecialidade} />
                <Route path="/cadaEspecialidade" component={cadaEspecialidade} />

                <Route path="/login" component={Login} />
                <Route path="/cadastrarEspecialidade" component={PostEspecialidade} />
            </Switch>
        );
    }
}

export default RouterMap;