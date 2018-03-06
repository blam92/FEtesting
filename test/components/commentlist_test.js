import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('Comment List' , () => {
  let component;

  beforeEach(() => {
    let props = { comments: ['foo', 'bar']};
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('it show each comment that is provided', () => {
    expect(component).to.contain('foo');
    expect(component).to.contain('bar');
  });
});
