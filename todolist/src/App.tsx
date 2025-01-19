import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
// import Clock from './Timer';
import MyWeather from './MyWeather';

function App() {
  return (
    <div className='container'>
      <TodoList></TodoList>
      <MyWeather weather='맑음'>일기예보</MyWeather>
      {/* <Clock></Clock> */}
    </div>
  );
}

export default App;
