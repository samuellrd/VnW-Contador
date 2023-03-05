import React, { Component } from 'react';
import styled from 'styled-components';
import arrowUp from './assets/up-arrow.png'
import arrowDown from './assets/down.png'


const Body = styled.main `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const ContainerCotador = styled.section`
  border-radius: 25px;
  background-color: #14498d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 60vh;
  box-shadow: -8px 8px #d9d9d9;
`;

const Number = styled.p`
  color: #000000;
  font-size: 4rem;
  border: solid black;
  background-color: #6cb041;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
`;

const Buttons = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 30px;
  border: solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  state = {
    contador: 0,
  };

  adiciona = () => {
    if (this.state.contador < 10) {
      this.setState({
        contador: this.state.contador + 1,
      });
    }
  };

  remove = () => {
    if (this.state.contador > 0) {
      this.setState({
        contador: this.state.contador - 1,
      });
    }
  };

  render() {
    return (
      <Body>
        <ContainerCotador>
          <Buttons onClick={this.adiciona} className="adicionar">
            <img src={arrowUp} />
          </Buttons>
          <Number>{this.state.contador}</Number>
          <Buttons onClick={this.remove} className="remover">
            <img src={arrowDown} />
          </Buttons>
        </ContainerCotador>
      </Body>
    );
  }
}

export default App;
