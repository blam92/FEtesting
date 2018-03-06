import { expect } from '../test_helper';
import types from '../../src/actions/types';
import actions from '../../src/actions/index';


describe('actions', () => {
  describe('saveComment', () => {
    let action;
    beforeEach(() => {
      action = actions.saveComment('new comment');
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(types.SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      expect(action.payload).to.equal('new comment');
    });
  });
});