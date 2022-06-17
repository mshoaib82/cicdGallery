/**
 * @jest-environment jsdom
 */

import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
//copy paste:
const { JSDOM } = require('jsdom');
const basicDom = require('../src/index');

test('Fills the dom with basic elements', () => {
  const dom = new JSDOM(basicDom);

  const navElementHTML = dom.window.document.querySelector('nav').innerHTML;
  expect(navElementHTML).toBe('<h1>APOLLO Picture Search<h1>');
 

  const photoBox = dom.window.document.querySelector('#photoBox');
  expect(photoBox).not.toBeFalsy();
});