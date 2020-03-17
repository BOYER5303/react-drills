import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Image from "./Image";


class App extends Component {

  render () {
    return(
    <div className="App">
      <Image url={"https://images.pexels.com/photos/3908080/pexels-photo-3908080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}/>
    </div>
  );
}
}
export default App;
