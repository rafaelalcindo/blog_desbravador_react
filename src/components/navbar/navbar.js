import React, {Component} from 'react';
import Aux from  '../../hoc/Aux';
import BarHtml from './barHtml/barHtml';

class NavBar extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <Aux>
                <BarHtml />
            </Aux>
        )
    }
}

export default NavBar;
