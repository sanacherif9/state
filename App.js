import React, { Component } from 'react';
import './App.css'; 
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      tab:[0,1,2,3,4,5,6,7,8 ,9],
      id:1,
      x:0
    }
  }
  calcul=(id)=>{
    this.setState({id:id});
    this.setState({x:Math.floor(id*id)})
  }
  render() {

     return (

      <div className="App">
      {this.state.tab.map((i)=>{return (
        <button onClick={()=>this.calcul(i)}>{i}</button>
      )})}
     <p>the factorial of{this.state.id} is {this.state.x}</p>
     
      </div>
    );
  }
}

export default App;
