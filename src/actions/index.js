import types from './types.js';

export default {
  saveComment: (comment) => {
    return {
      type: types.SAVE_COMMENT,
      payload: comment
    }
  }
}