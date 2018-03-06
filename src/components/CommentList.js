import React, { Component } from 'react';
import { connect } from 'react-redux';  

const CommentList = ({ comments }) => (
  <ul className="comment-list">
    {comments.map((comment, idx) => <li key={idx}>{comment}</li>)}
  </ul>
);

let mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
export default connect(mapStateToProps)(CommentList);