import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import './formEspecialidade.css';

const formEspecialidade = (props) => {
    return (
        <div>

            <div className="row" >
                <div className="col-sm-2" ></div>
                <div className="col-sm-8" >
                    <div className="painelForm" >
                        <h2>Cadastro de Especialidade</h2>
                        <form>
                            <div>
                                <label for="titulo">Título da Especialidade</label>
                                <input type="text" className="form-control" id="titulo" />
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className="col-sm-2" ></div>
            </div>


            <Editor
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                    plugins: 'link image code',
                    toolbar: "insertfile a11ycheck undo redo | bold italic | forecolor backcolor | template codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image"
                }}
             />
        </div>
    );
}

export default formEspecialidade;