import React, { Component } from 'react';
import './App.css';
import Search from './search.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    output: null,
    outputAttempts: null,
    binaryOutput: null,
    binaryAttempts: null
    }
}
  indexOf = (array, value) => {
    console.log(array)
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        console.log(`It took ${i} search cycles to find this number`)
        console.log(i)
        this.setState(() => ({output:array[i],
                              outputAttempts: i + 1
                            })); return
      }
    }
    console.log('-1')
    return -1;
  }

  binaryStuff = (array, value, start = 0, end = array.length, attempts = 1) => {
    if (start > end) return -1;
    //find the midpoint and the item at the midpoint
    let index = Math.floor((start + end) / 2);
    let item = array[index];
    //if the middle element is the target them return that location
    if (item == value) {
      this.setState(() => ({
        binaryOutput:item,
        binaryAttempts: attempts
      }))
      return index;
    } else if (item < value) {
      console.log(attempts, 'binary search attempts======================')
      return this.binaryStuff(array, value, index + 1, end, attempts + 1);
    } else if (item > value) {
      console.log(attempts, 'binary search attempts')
      return this.binaryStuff(array, value, start, index - 1, attempts + 1);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Search Algos</h1>
        </header>
        <div className="App-intro">
         <Search 
         linearSearch={this.indexOf}
         binarySearch={this.binaryStuff}
         />
        </div>
        <p>Linear Search:{this.state.output}</p>
        <p>Linear Search Attempts:{this.state.outputAttempts}</p>
        <p>Binary Search:{this.state.binaryOutput}</p>
        <p>Binary Search Attempts:{this.state.binaryAttempts}</p>
      </div>
    );
  }
}

export default App;
