
import React from 'react';
import './App.css';

import TypingTest from './components/TypingTest';


const App = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('../assets/dark.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  

  return (
    <div style={backgroundImageStyle}>
      <TypingTest />
    </div>
  );
};

export default App;
