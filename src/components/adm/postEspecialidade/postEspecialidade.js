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
                    <FormEspecialidade />
                <Rodape/>
            </div>
        );
    }
}

export default PostEspecialidade;