/* eslint-disable */

require('babel-core/register')({
  ignore: /node_modules\/(?!foundation\-sites)/
});

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost:8888'
});
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.window.Date = {};
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);
