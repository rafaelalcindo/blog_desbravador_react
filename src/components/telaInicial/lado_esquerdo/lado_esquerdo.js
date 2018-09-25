import React from 'react';
import './lado_esquerdo.css';

const LadoEsquerdo = (props) => {
    return (
        <div className="todoLadoEsquerdo" >
            <ul className="Menus" >
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
            </ul>
        </div>
    );
}

export default LadoEsquerdo;