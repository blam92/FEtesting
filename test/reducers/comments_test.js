import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import types from '../../src/actions/types';

let SAVE_COMMENT = types.SAVE_COMMENT;

describe('Comment Reducer', () => {
  it('It handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'new comment'
    };
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});