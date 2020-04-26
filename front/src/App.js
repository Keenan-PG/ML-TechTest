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
      <div>
        <Layout className="mt-1">
          <Router>
            <Switch>
              {/* Home */}
              <Route exact path="/" component={MainPage} />
              {/* 404s */}
              <Route exact path="/404" component={ErrorPage} />
              {/* wildcard redirect */}
              <Redirect to="/404"/>
            </Switch>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
