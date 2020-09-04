import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCardComp from './components/PersonCardComp';

function App() {
  return (
    <div className="App">
      <PersonCardComp firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
    </div>
  );
}

export default App;
