import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Footer from '../../../client/javascript/components/Footer/index.jsx';

describe('<Footer />', () => {
  it('renders the component', () => {
    const footer = shallow(<Footer />);

    expect(footer.find('.wrapper')).to.have.length(1);
    expect(footer.find('p').text()).contains('This is a footer');
  });
});
