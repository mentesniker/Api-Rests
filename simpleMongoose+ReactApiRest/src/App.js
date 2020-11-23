import React from 'react';
import './App.css';
import List from './components/List';
import Houses from './components/Houses';
import Top from './components/Top';
import NewL from './components/SaveNew';
import {useRoutes} from 'hookrouter';

function App() {
  const routes = {
    "/": () => <List />,
    "/houses": () => <Houses />,
    "/top": () => <Top />,
    "/add": () => <NewL />,
  };

  const routeResult = useRoutes(routes);

  return (
            
      <div className='App'>
        <div className='container'>
          <h1>Airbnb info</h1>
        </div>
        <div class="topnav">
          <a href="/">Apartments</a>
          <a href="/houses">Houses</a>
          <a href="/top">Top 10</a>
          <a href="/add">Add New entry</a>
        </div>
        <div className='repo-container'>
          {routeResult}
        </div>
      </div>
  );
}

export default App;