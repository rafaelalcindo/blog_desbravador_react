import React from 'react';
import './categorias_inicio.css';
import Adra from '../../../../assets/imagem_especialidade/categorias/adra.png';
import Artes_Habilidades from '../../../../assets/imagem_especialidade/categorias/artes_e_habilidades_manuais.jpg';
import Atividades_Agricolas from '../../../../assets/imagem_especialidade/categorias/atividades_agricolas.jpg';
import Atividades_Missionarias from '../../../../assets/imagem_especialidade/categorias/atividades_missionarias.jpg';
import Atividades_Profissionais from '../../../../assets/imagem_especialidade/categorias/atividades_profissionais.jpg';
import Atividades_Recreativa from '../../../../assets/imagem_especialidade/categorias/atividades_recreativas.jpg';
import Ciencia_Saude from '../../../../assets/imagem_especialidade/categorias/ciencia_saude.jpg';
import Estudo_Natureza from '../../../../assets/imagem_especialidade/categorias/estudos_da_natureza.jpg';
import Habilidade_Domestica from '../../../../assets/imagem_especialidade/categorias/habilidades_domesticas.jpg';
import Mestrados from '../../../../assets/imagem_especialidade/categorias/mestrados.jpg';

const CategoriaInicio = (props) => {
    return(
        <div  >
            <hr/>
            <div className="d-flex justify-content-center" >
                <h2 className="titulo_especi_alta" >Categorias</h2>
            </div>
            <div className="row toda_categoria_inicio" >

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Adra}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Adra</h4>
                    </div>
                </div>

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Artes_Habilidades}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Artes e Habilidades Manuais</h4>
                    </div>
                </div>

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Atividades_Agricolas}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Atividades Agrícolas</h4>
                    </div>
                </div>

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Atividades_Missionarias}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Atividades Missionárias</h4>
                    </div>
                </div>

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Atividades_Profissionais}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Atividades Profissionais</h4>
                    </div>
                </div>

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Atividades_Recreativa}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Atividades Recreativas</h4>
                    </div>
                </div>

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Ciencia_Saude}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Ciência e Saúde</h4>
                    </div>
                </div>

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Estudo_Natureza}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Estudos da Natureza</h4>
                    </div>
                </div>

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Habilidade_Domestica}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Habilidade Domésticas</h4>
                    </div>
                </div>

                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Mestrados}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Mestrados</h4>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CategoriaInicio;