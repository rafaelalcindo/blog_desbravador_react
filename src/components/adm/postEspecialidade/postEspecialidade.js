import React, { Component } from 'react';

import NavBar from '../../navbar/navbar';
import Rodape from '../../rodape/rodape';
import FormEspecialidade from './formEspecialidade/formEspecialidade';

import './postEspecialidade.css';

class PostEspecialidade extends Component {


    render(){
        return (
            <div>
                <NavBar />
                <div style={{marginRight: '0px'}} className="row" >
                    <div className="col-sm-12 menu_inicial" style={{  height: '210px'}} >
                        <h1>teste</h1>
                    </div>
                </div>
                    <FormEspecialidade />
                <Rodape/>
            </div>
        );
    }
}

export default PostEspecialidade;