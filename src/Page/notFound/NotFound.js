import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="overlay"></div>
        <div className="terminal">
          <h1>
            {' '}
            Error <span className="errorcode"> 404 </span>
          </h1>
          <p className="output">
            {' '}
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable{' '}
          </p>
          <p className="output">
            Click this link to <a href="/">go back</a>
          </p>
          <p className="output"> Good luck </p>
        </div>
      </div>
    );
  }
}

export default NotFound;
