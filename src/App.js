import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header'; 
import Title from './Title'; 
import DashboardDetails from './DashboardDetails'; 

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Title></Title>
     <DashboardDetails></DashboardDetails>
    </div>
  );
}

export default App;
