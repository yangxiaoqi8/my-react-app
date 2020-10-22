import React from 'react';
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
  // setInterval(tick,1000)


  function ToastFuc(index,arrLength){
    var arr=[
      {index:0,maxLength:1,tip:'最多添加1个场景'},
      {index:1,maxLength:5,tip:'最多添加5个音乐'},
      {index:2,maxLength:5,tip:'最多添加5个新闻'},
      {index:3,maxLength:5,tip:'最多添加5个电台'},
      {index:5,maxLength:10,tip:'最多添加10个回复'}
    ]
    // eslint-disable-next-line
    arr.map((item)=>{
      if(item.index===index&&arrLength>item.maxLength){
        console.log(item.tip);        
      }
    })
  }
  ToastFuc(2,6); //最多添加5个新闻


  //组件制作
  function ElementDiv() {
    return (
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>      
    )     
  }
  //Welcome组件
  function Welcome(props){
    return <h1>欢迎，{props.name}</h1>
  }
  
 // 多个组件的嵌套使用
 function Adoter(props){
    return (
    <p>{props.user}</p>
    )
 }
 function UserInfo(props){
  return(
    <div>
      <Adoter user={props.user} />
      <span>{props.name}</span>
    </div>
  )
 }
 function Comment(props){
   return (
    <div className="comment">
      <UserInfo name={props.name} user={props.author} />
      <div>{props.date}{props.author}</div>
      <div>{props.txt}</div>
    </div>  
   )
 } 

  return (
    <div className="App">
      <div onClick={tick}>test</div>
      <ElementDiv/>
      <Welcome name="yxq"/>  
      <Welcome name="wqw"/>  
      <Button/>
      <Comment date="2020.10.22" txt="多组件使用" author="yxq111" name="yxq"/>
    </div>
  );
}

export default App;
