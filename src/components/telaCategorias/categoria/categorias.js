import React, { Component } from 'react';

import ADRA from '../../../assets/categorias/ADRA.jpg';
import Habilidades_manuais from '../../../assets/categorias/habilidades_manuais.jpg';
import Atividades_Agricola from '../../../assets/categorias/atividades_agricola.jpg';
import Atividades_Missionarias from '../../../assets/categorias/atividades_missionarias.jpg';
import Atividades_profissinais from '../../../assets/categorias/atividades_profissionais.png';
import Atividades_recreativas from '../../../assets/categorias/atividades_recreativa.png'
import Ciencia_saude from '../../../assets/categorias/ciencia_saude.jpg';
import Estudos_natureza from '../../../assets/categorias/estudos_natureza.jpg';
import Habilidade_domestica from '../../../assets/categorias/habilidades_domestica.gif';
import Mestrado from '../../../assets/categorias/mestrado.jpg'


import './categorias.css';

class Categorias extends Component {

    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        setTimeout(() => {
            console.log('teste obj', this.props.categoria);
           let teste = [ ...Array(this.props.categoria) ].map(cat => {
               console.log('cat',cat);
           })
           console.log('teste array', teste)
        }, 1400);
    }

    HtmlCategorias = (nome) => {
        if(nome === "Ciência e Saúde"){
            return(
                <div className="categoria_card" >
                    <img className="categorImg" src={Ciencia_saude} alt="Ciência e Saúde" />
                    <div className="nomeCategoria" style={{backgroundImage: 'linear-gradient(to bottom right, #ad33ff, #4c0080)', paddingTop: '10%'}} >
                        <h1>Ciência e Saúde</h1>
                    </div>
                </div>
            );
        }else if(nome === "ADRA"){
            return (
                <div className="categoria_card" >
                    <img className="categorImg" src={ADRA} alt="categoria Adra" />
                    <div className="nomeCategoria" >
                        <h1>ADRA</h1>
                    </div>
                </div>
            );
        }else if(nome === "Habilidades Manuais"){
            return (
                <div className="categoria_card" >
                    <div className="nomeCategoria2" >
                        <h1>Artes e Habilidades Manuais</h1>
                    </div>
                    <img className="categorImg2" src={Habilidades_manuais} alt="habilidades manuais" />
                </div>
            );
        }else if(nome === "Atividades Agricolas") {
            return (
                <div className="categoria_card" >
                    <img className="categorImg" src={Atividades_Agricola} alt="Atividades Agricola" />
                    <div className="nomeCategoria" style={{backgroundImage: 'linear-gradient(to bottom right, #c68c53, #604020)', paddingTop: '7%'}} >
                        <h1>Atividades Agricola</h1>
                    </div>
                </div>
            );
        }else if(nome === "Atividades Missionárias"){
            return (
                <div className="categoria_card" >
                    <div className="nomeCategoria2" style={{backgroundImage: 'linear-gradient(to bottom right, #6666ff, #000099)', paddingTop: '7%' }} >
                        <h1>Atividades Missionárias</h1>
                    </div>
                    <img className="categorImg2" src={Atividades_Missionarias} alt="Atividades Missionárias" />
                </div>
            );
        }else if(nome === "Atividades Recreativas"){
            return(
                <div className="categoria_card" >
                    <div className="nomeCategoria2" style={{backgroundImage: 'linear-gradient(to bottom right, #00ff00, #006600)', paddingTop: '7%' }} >
                        <h1>Atividades Recreativas</h1>
                    </div>
                    <img className="categorImg2" src={Atividades_recreativas} alt="Atividades Recreativas" />
                </div>
            );
        }else if(nome === "Atividades Profissionáis"){
            return (
                <div className="categoria_card" >
                    <img className="categorImg" src={Atividades_profissinais} alt="Atividades Profissionais" />
                    <div className="nomeCategoria" style={{backgroundImage: 'linear-gradient(to bottom right, #ff4d4d, #b30000)', paddingTop: '7%'}} >
                        <h1>Atividades Profissionáis</h1>
                    </div>
                </div>
    
            );
        }else if(nome === "Estudos da Natureza"){
            return (
                <div className="categoria_card" >
                    <div className="nomeCategoria2" style={{backgroundImage: 'linear-gradient(to bottom right, #a6a6a6, #333333)', paddingTop: '7%' }} >
                        <h1>Estudos da Natureza</h1>
                    </div>
                    <img className="categorImg2" src={Estudos_natureza} alt="Estudos da Natureza" />
                </div>
            );
        }else if(nome === "Habilidade Doméstica"){
            return (
                <div className="categoria_card" >
                    <img className="categorImg" src={Habilidade_domestica} alt="Habilidades Domésticas" />
                    <div className="nomeCategoria" style={{backgroundImage: 'linear-gradient(to bottom right, #ffad33, #995c00)', paddingTop: '7%'}} >
                        <h1>Habilidades Domésticas</h1>
                    </div>
                </div>
            );
            
        }else if(nome === "Mestrados") {
            return (
                <div className="categoria_card" >
                    <div className="nomeCategoria2" style={{backgroundImage: 'linear-gradient(to bottom right, #4d4d4d, #0d0d0d)', paddingTop: '10%' }} >
                        <h1>Mestrados</h1>
                    </div>
                    <img className="categorImg2" src={Mestrado} alt="Mestrado" />
                </div>
            );
        }
    }

    render(){

        let categorias = null;

        setTimeout(() => {
            if(this.props.categoria !== null || this.props.categoria !== undefined){
                 
            }
        }, 1200);
        
    
        return(
            <div className="row" >
                <div className="col-sm-12" >
                    teste
                </div>
            </div>
        );
    }
}

export default Categorias;