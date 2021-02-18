import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

     constructor(props) {
      super(props);
      this.state = {date: new Date()};
     }

    componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
    render() { 

        return(
            <>
               <h1 style={
                   {padding: "10px", 
                   backgroundColor: "yellow", 
                   display:"inline-block",
                   margin:"50px"
                   }}>
                   {this.state.date.toLocaleTimeString()}
                   </h1>
            </>
        )
    }
}


export default App;
