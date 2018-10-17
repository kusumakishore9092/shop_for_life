import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import UtilityNav from '../../../client/javascript/components/UtilityNav/index.jsx';

describe('<UtilityNav />', () => {
  it('renders the component', () => {
    const header = shallow(<UtilityNav />);
    expect(header.find('.utility-nav')).to.have.length(1);
    expect(header.find('img')).to.have.length(1);
    expect(header.find('p').text()).contains('Utility nav');
  });
});
