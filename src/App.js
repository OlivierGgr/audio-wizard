import React from 'react';
import TopNav from './components/TopNav/TopNav'
import LeftNav from './components/LeftNav/LeftNav'
import Main from './components/Main/Main'
import { UserProvider } from './UserContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
          <TopNav />
          <LeftNav />
          <Main />
      </div>
    </UserProvider>
  );
}

export default App;
