import React, { Component } from 'react';
import CommentBox from './CommentBox.js';
import CommentList from './CommentList.js';
export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
