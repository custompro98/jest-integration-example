import React from 'react';
import { mount } from 'enzyme';

import App from './App';

let subject;

const mountApp = (props={}) => {
  subject = mount(<App {...props} />)
};

describe('<App />', () => {
  afterEach(() => {
    subject = undefined;
  });

  it('mounts with no exceptions', () => {
    mountApp();

    expect(subject.find('ul').length).toEqual(1);
  });

  it('uses home as the default page', () => {
    mountApp();

    expect(subject.state().pageName).toEqual('home');
  });

  it('renders the sidebar loads on page load', async (done) => {
    mountApp();

    process.nextTick(() => {
      try {
        subject.update();
        expect(subject.find('li').length).toEqual(4);
      } catch(error) {
        done.fail(error);
      }

      done();
    });
  });

  it('changes the active page on click', async (done) => {
    mountApp();

    process.nextTick(() => {
      try {
        subject.update();
        subject.find('#about').simulate('click');
        subject.update();
        expect(subject.state().pageName).toEqual('about');
      } catch(error) {
        done.fail(error);
      }

      done();
    });
  });
});
