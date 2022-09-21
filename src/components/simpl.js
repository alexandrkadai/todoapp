import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstname: 'Alex', lastname: 'Takeree' },
      company: 'Facebook',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello I`m {this.state.name.firstname} {this.state.name.lastname}
            <br></br>
            Улыбнись Ты Киця<br></br>
            I`m working in {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: { firstname: 'Kicijim' } });
            }}>
            {' '}
            Press Me{' '}
          </button>
          <button
            className="second-button"
            onClick={() => {
              this.setState(() => {
                return {
                  name: { firstname: 'Kicijim', lastname: 'Lubim' },
                };
              });
            }}>
            {' '}
            Press Me{' '}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
