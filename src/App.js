import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import Profile from './Profile';
import Home from './Home';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-61377072.okta.com/oauth2/default',
  clientId: '0oa94zre86JALEubj5d7',
  redirectUri: 'http://localhost:8080/login/callback'
  
});

class App extends Component {

  constructor(props) {
    super(props);
    this.restoreOriginalUri = async (_oktaAuth, originalUri) => {
      props.history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    };
  }

  render() {
    return (
      <Router>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={this.restoreOriginalUri}>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/login/callback" component={LoginCallback}/>
          <Route path="/profile" component={Profile}/>
        </Security>
      </Router>
    );
  }
}

const AppWithRouterAccess = withRouter(App);

class RouterApp extends Component {
  render() {
    return (<Router><AppWithRouterAccess/></Router>);
  }
}

export default RouterApp;
