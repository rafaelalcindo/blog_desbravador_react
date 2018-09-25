import React, {Component} from 'react';
import NavBar from '../navbar/navbar';


class TelaInicial extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <NavBar />
                <div className="row" >
                    <div className="col-sm-12" >
                        Meio
                    </div>
                </div>
                <div className="row" >
                    <div className="col-sm-2" > lado esquerdo</div>
                    <div className="col-sm-10" > lado direito</div>   
                </div>
            </div>
        );
    }
}

export default TelaInicial;