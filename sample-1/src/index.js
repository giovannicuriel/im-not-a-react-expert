import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LogDiv extends React.Component {
  render() {
    return (
      <div>Current message: {this.props.message}</div>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} onClick={() => this.props.logFunc("Clicked on " + i)} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div>{status}</div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  log(m) {
    this.setState({ message: this.state.message + ", " + m });
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <Board logFunc={(m) => this.log(m)} />
          </div>
          <div>
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        <LogDiv message={this.state.message} />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
