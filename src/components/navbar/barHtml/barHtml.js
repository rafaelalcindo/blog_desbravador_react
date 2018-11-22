import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

//import * as actionType from '../../../store/actions';
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom';

import logo_desbrava_nav from '../../../assets/imagem/navbar/logo_desbrava_nav.png';

class BarHtml extends Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state ={
            isOpen: false
        };

        
    }

    componentDidMount(){
        setTimeout(()=>{
            console.log('usuario: ', this.props.usuario);
        }, 800);
    }
    
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        let options = '';
        if(this.props.usuario.nome != null){
            options = (
                
                <DropdownMenu right>
                <DropdownItem>
                    Minha Conta
                </DropdownItem>
                <DropdownItem>
                    Meus Comentário
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="/logout" >Logout</Link>
                </DropdownItem>
                </DropdownMenu>
            );
        }

        return(
            <div>
                <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/"><img src={logo_desbrava_nav} style={styleImagem}  alt="imagem" /> </NavbarBrand>
                <NavbarBrand href="/">Desbravadores</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/telaCategoria" >Categorias</NavLink>
                        </NavItem>
                        { this.props.usuario.nome == null ?  <NavItem> <NavLink href="/login" >Login</NavLink> </NavItem> : null }
                        

                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            
                       {this.props.usuario.nome != null ? <DropdownToggle nav caret> Opções </DropdownToggle> : null }
                        {options}

                        </UncontrolledDropdown>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
    
}

const styleImagem = {
    height: '80px',
    width: '80px'
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        usuario: state.usua
    };
}


export default connect(mapStateToProps)(BarHtml);