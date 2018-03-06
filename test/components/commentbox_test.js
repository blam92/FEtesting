import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('Comment Box' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('it has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('it has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('it has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Entering text', () => {
    const comment = 'new comment';

    beforeEach(() => {
      component.find('textarea').simulate('change', comment);
    });

    it('shows text entered in textarea', () => {
      expect(component.find('textarea')).to.have.value(comment);
    });
  
    it('when submitted it clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  })
});
