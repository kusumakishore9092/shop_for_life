import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Header from '../../../client/javascript/components/Header/index.jsx';

describe('<Header />', () => {
  it('renders the component', () => {
    const header = shallow(<Header />);
    expect(header.find('.main-header')).to.have.length(1);
    expect(header.find('.wrapper')).to.have.length(1);
    expect(header.find('h1').text()).contains('Header');
  });
});
