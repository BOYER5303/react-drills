import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      dogs: ['boxer', 'rottweiler', 'german shepard', 'labrador']
    };
  }

render() {
  let dogsToDisplay =
  this.state.dogs.map((element, index)=> {
    return <h2 key={index}>{element}</h2>;

  });
return <div className = "App">{dogsToDisplay}</div>
}
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
