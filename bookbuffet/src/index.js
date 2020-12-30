import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <div>
      <Route path="/" exact component={App}/>
      <Route path="/volumes/:id" exact component={BookDetails}/> 
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

