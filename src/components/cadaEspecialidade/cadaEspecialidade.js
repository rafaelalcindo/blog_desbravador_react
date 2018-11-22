import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import Rodape from '../rodape/rodape';

import './cadaEspecialidade.css';

import mamiferos from '../../assets/logo_especialidades/estudos_da_natureza/mamiferos.png';

class CadaEspecialidade extends Component {

    render(){
        return(
            <div>
                <NavBar />
                <div style={{marginRight: '0px'}} className="row" >
                    <div className="col-sm-12 menu_inicial" style={{ height: '210px' }} >
                        <h1>Teste 02</h1>
                    </div>
                </div>

                <div className="todo_corpo_especialidade" >
                    <div className="tituloEspecialidade" >
                        <img className="imgEspecialidade" src={mamiferos} alt="especialidade" />
                        <h2> Especialidade de Mamiferos</h2>
                    </div>
                    <hr />
                    <div className="especialidadeTexto" >
                        <h2>Pegunta 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec orci ex. Duis dapibus mi at tincidunt aliquam. Vivamus vel faucibus ante, sed sodales tellus. Nullam id tortor felis. Nam sollicitudin nulla id ipsum faucibus faucibus. Nullam sed maximus lectus. Nam vitae ligula pulvinar, tincidunt augue sed, egestas lectus. Nulla sed urna quis felis malesuada tempus. In hac habitasse platea dictumst. Sed facilisis a mi quis convallis. Sed a metus sed metus placerat molestie. Vivamus eget sem fermentum, luctus nunc ultrices, scelerisque ligula. Phasellus pharetra, eros sed tincidunt aliquet, sem tortor suscipit dolor, non porta ligula tortor nec tellus. Vestibulum non nulla dui. Sed tincidunt rutrum orci, et hendrerit eros imperdiet blandit.</p>
                        <h2>Pergunta 2</h2>
                        <p>Aliquam vitae justo neque. Cras quis iaculis lorem. Donec nec venenatis nulla. Aenean non neque justo. Nullam ullamcorper velit sit amet egestas scelerisque. Praesent vitae semper enim. Proin bibendum lorem eu mi pulvinar mattis. Donec faucibus, tortor eu auctor varius, arcu ligula interdum tellus, nec commodo diam diam commodo risus. Nullam blandit neque vehicula molestie vehicula. Nullam consectetur ipsum dignissim, tincidunt dui non, dapibus massa. Duis tristique efficitur aliquet. Nulla mi quam, pellentesque in porta id, egestas eu metus. Nulla erat dui, porta laoreet nulla nec, volutpat viverra lacus. Nam tincidunt ligula sed dictum iaculis. Nullam et aliquam purus.</p>
                    </div>
                    <hr/>
                    <div className="criadoEm" >
                        <p>Criado por: Mas Miion Moto, em 24/02/2018</p>
                    </div>

                </div>
                <Rodape />
            </div>
        );
    }
}

export default CadaEspecialidade;