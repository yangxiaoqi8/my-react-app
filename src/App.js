import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button.js';
//事件绑定 onClick={函数名}
// 例如：<div onClick={tick}>test</div>

function App() {
  // 事件方法
  function tick() {
    console.log("yxqTest");
    console.log(new Date().toLocaleTimeString());
  }
  setInterval(tick,1000)

  //组件制作
  function ElementDiv() {
    return (
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>      
    )     
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div onClick={tick}>test</div>
      <ElementDiv></ElementDiv>    
      <Button/>
    </div>
  );
}

export default App;
