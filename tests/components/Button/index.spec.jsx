import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Button from '../../../client/javascript/components/Button/index.jsx';

describe('<Button />', () => {
  it('renders the component', () => {
    const button = shallow(<Button />);

    expect(button.find('.wrapper')).to.have.length(1);
    expect(button.find('button').text()).contains('I am a button');
  });
});
