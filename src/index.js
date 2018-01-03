import React, { Component } from 'react';
import * as shortid from 'shortid';
import './index.css';
var shuffle = require('shuffle-array'); // TODO: Fix mixed import style


class SlidePuzzle extends Component {
  render() {
    return (
      <div class="slidepuzzle-board">
        { shuffle(Array.from(new Array(16), (x,i) => i)).map(i => {
          const squareID = shortid.generate();

          return (
            <div key={squareID} class={`${i === 15 ? "slidepuzzle-emptyslot" : "slidepuzzle-piece"}`}>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SlidePuzzle;
