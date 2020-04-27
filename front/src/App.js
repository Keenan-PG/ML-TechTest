import React, { Component } from 'react';

// bootstrap and custom styles/scripts
import './App.css';

// routing
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect 
} from "react-router-dom";

// pages
import MainPage from './pages/index.jsx';
import ErrorPage from './pages/404.jsx';

// components
import Layout from './components/core/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            {/* Home */}
            <Route path="/" component={MainPage} />
            {/* 404s */}
            <Route exact path="/404" component={ErrorPage} />
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
