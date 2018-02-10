import React from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';
import registerServiceWorker from './registerServiceWorker';


const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/artist/:artistId" component={Artist}/>
      </div>
    </BrowserRouter>
  )
};

App.propTypes = {
  basename: PropTypes.string.isRequired
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
