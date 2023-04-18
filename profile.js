render() {
  let profileLink = null;
  if (this.props.authState?.isAuthenticated) {
    profileLink = <Link to="/profile">Profile</Link>;
  }

  let body = null;
  if (this.props.authState?.isAuthenticated) {
    body = (
      <div className="Buttons">
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  } else {
    body = (
      <div className="Buttons">
        <button onClick={this.login}>Login</button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {profileLink}
        {body}
      </header>
    </div>
  );
}
