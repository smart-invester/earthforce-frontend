import React from 'react';
import Search from './Search';
import './App.css';
import GoogleMap from './GoogleMap';


function App() {
  return (
    <div className="App">
      <GoogleMap/>
      <Search/>
    </div>
  );
}

export default App;
