import React, {Component} from 'react';

import './rodape.css';

import rodape_logo from '../../assets/rodape/logo_desbravador.png';

class Rodape extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="todoRodape" >
                <div className="row" >
                    <div className="col-sm-3">
                        <img className="logo_Rodape" src={rodape_logo} alt="Rodape" />
                    </div>  
                    <div className="col-sm-3">
                        <h3 className="rodape_titulo" >Categorias</h3>
                        <ul className="lista_rodape" >
                            <li>Adra</li>
                            <li>Artes e Habilidades Manuais</li>
                            <li>Atividades Agricolas</li>
                            <li>Atividades Missionárias</li>
                            <li>Atividades Profissionais</li>
                            <li>Atividades Recrativas</li>
                            <li>Ciência e  Saúde</li>
                            <li>Estudos da Natureza</li>
                            <li>Habalidade Domésticas</li>
                            <li>Mestrados</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h3 className="rodape_titulo" >Parceiros</h3>

                    </div>
                    <div className="col-sm-3">
                        <h3 className="rodape_titulo" >Redes Sociais</h3>
                        <ul className="lista_rodape" >
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Rodape;