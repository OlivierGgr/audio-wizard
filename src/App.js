import React from 'react';
import TopNav from './components/TopNav/TopNav'
import LeftNav from './components/LeftNav/LeftNav'
import Main from './components/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <LeftNav />
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
