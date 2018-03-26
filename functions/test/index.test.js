const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');

const notifyUser = require('../notifyUser');

describe('my functions', () => {
  // import your functions here

  after(() => {
    // add clean up code
  });

  describe('tellUser', () => {
    let spy;
    before(() => {
      spy = sinon.spy(notifyUser);
    });

    it('calls notifyUser with the correct uid and message', () => {
      const uid = 'abc';
      const message = 'hello';

      // add code
      return expect(spy.calledWith(uid, message));
    });
  });
  
  describe('webhook', () => {
    it('sends 200 response', done => {
      // add code
    });
  });
});