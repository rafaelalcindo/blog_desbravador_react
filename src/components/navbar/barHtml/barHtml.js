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

import logo_desbrava_nav from '../../../assets/imagem/navbar/logo_desbrava_nav.png';

class BarHtml extends Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state ={
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
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
                        <NavItem>
                            <NavLink href="/login" >Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Options
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                            </DropdownMenu>
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

export default BarHtml;