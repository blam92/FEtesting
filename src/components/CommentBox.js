import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
  }
  handleChange(e) {
    this.setState({comment: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(actions.saveComment(this.state.comment));
    this.setState({comment: ''});
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)} name="comment" cols="30" rows="10"></textarea>
        <button>Submit Comment</button>
      </form>
    )
  }
}

export default connect()(CommentBox);