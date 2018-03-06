import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('displays CommentBox component', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('displays CommentList component', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});
