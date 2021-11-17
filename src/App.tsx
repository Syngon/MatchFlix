import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MATCHFLIX</h1>
      <form>
        <h2>AJUDAR PEDRO E LOUISE A ESCOLHER UM FILMES PORQUE SOMOS MUITO INDECISOS.</h2>

        <select name="select">
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>

        <select name="select">
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>

        <select name="select">
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>

        <select name="select">
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>

        <select name="select">
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>

        <input type="submit" value="Escolher tudo pra nos!"/>

      </form>
    </div>
  );
}

export default App;