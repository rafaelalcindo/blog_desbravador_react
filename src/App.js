import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import { BrowserRouter } from 'react-router-dom';
import RouterMap from './routes/routes';
import TelaInicial from './components/telaInicial/telaInicial';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <RouterMap />
          </div>
        </BrowserRouter>
            
    );
  }
}

export default App;
