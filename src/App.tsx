import React from 'react';

import Header from "./Components/Header"
import Routes from "./routes"


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>QAD React training</h1>
      <Header />
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
