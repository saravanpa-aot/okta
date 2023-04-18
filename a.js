class App extends Component {
  constructor(props) {
    super(props);
    this.restoreOriginalUri = async (_oktaAuth, originalUri) => {
      props.history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    };
  }

  render() {
    const isAuthenticated = this.props.authState.isAuthenticated;

    return (
      <Router>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={this.restoreOriginalUri}>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/login/callback" component={LoginCallback}/>

          {isAuthenticated && <Route path="/profile" component={Profile}/>}

        </Security>
      </Router>
    );
  }
}
