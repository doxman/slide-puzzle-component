import React, { Component } from 'react';
import * as shortid from 'shortid';
import './index.css';


class SlidePuzzle extends Component {
  render() {
    <div class="slidepuzzle-board">
      { Array.from(new Array(16), (x,i) => i).map(i => {
        const squareID = shortid.generate();

        return (
          <div key={squareID} class="slidepuzzle-piece">
          </div>
        );
      })}
    </div>
  }
}

export default SlidePuzzle;
