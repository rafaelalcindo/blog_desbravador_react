import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import TelaInicial from '../components/telaInicial/telaInicial';
import TelaCategoria from '../components/telaCategorias/telaCategoria';
import ListaEspecialidade from '../components/listaEspecialidade/listaEspecialidade';
import cadaEspecialidade from  '../components/cadaEspecialidade/cadaEspecialidade';

import Login from '../components/adm/login/login';
import Logout from '../components/adm/login/logout/logout';
import PostEspecialidade from '../components/adm/postEspecialidade/postEspecialidade';
import Painel from '../components/adm/painel/painel';




class RouterMap extends Component {
    

    render(){
        return(
            <Switch>
                <Route path="/" exact component={TelaInicial} />
                <Route path="/telaCategoria" component={TelaCategoria} />
                <Route path="/listaEspecialidade/:categoria" component={ListaEspecialidade} />
                <Route path="/cadaEspecialidade" component={cadaEspecialidade} />

                <Route path="/painel" component={Painel} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/cadastrarEspecialidade" component={PostEspecialidade} />

            </Switch>
        );
    }
}

export default RouterMap;