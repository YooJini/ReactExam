import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'jini';
  // 인라인 스타일링
  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '20px'
  }

  return (
    <div style={style}>
     <h1>Hello, React!</h1>
     <p>{name} 방가방가</p>
    </div>
  );
}

export default App;
