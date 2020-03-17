import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      filterString: '',
      foods: ['spaghetti', 'gnochi', 'Mac and Cheese', 
      'parmesan', 'alfredo']
    };
    
    }
  

  handleChange(filter) {
    this.setState({ filterString: filter});
  }
  render() {
    let foodsToDisplay = this.state.foods.filter((element, index)=> {
      return
      element.includes(this.state.filterString);
    })
    .map((element, index)=> {
      return <h2 key={index}>{element}</h2>;
    });
    return (
      <div className ="App">
        <input onChange = { e => this.handleChange(e.target.value)} 
        type="text"/>
        {foodsToDisplay}
      </div>
    );
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
