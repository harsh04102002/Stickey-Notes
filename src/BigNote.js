import React, { Component } from "react";
import Draggable from "react-draggable";
import "./BigNote.css";
import Block from "./Block";
import "./App.css";

var colors = require("./colors.json");
var words = require("./words");

var blocks = [];
class BigNote extends Component {
  constructor() {
    super(blocks);

    // Set initial state
    this.state = blocks;
    this.arr = this.state;
    // Binding this keyword
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Changing state
    if (this.arr.length === 0) this.arr.push(0);
    else this.arr.push(this.arr[this.arr.length - 1] + 1);
    this.setState(this.arr);
    console.log(blocks);
  }

  align() {
    this.setState(this.arr);
  }

  blocks = this.state;

  render() {
    return (
      <div className="large">
        <div className="title_bar">
          <h1 className="title">
            Messaging <span>/ Affinity map</span>
          </h1>
          <div>
            <button className="Add" onClick={this.handleClick}>
              +
            </button>
          </div>
        </div>
        <div className="Board">
          {this.arr.map((box) => (
            <Block
              title={box}
              contents={words[box % words.length].word}
              key={box}
              color={colors[colors.length - (box % colors.length) - 1]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BigNote;
