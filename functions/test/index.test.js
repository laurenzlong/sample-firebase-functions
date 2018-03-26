const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');

describe('my functions', () => {
  const myFunctions = require('../index.js');

  after(() => {
    // add clean up code
  });

  describe('tellUser', () => {
    let spy;
    before(() => {
      spy = sinon.spy(myFunctions, 'notifyUser');
    });

    it('calls notifyUser with the correct uid and message', () => {
      const uid = 'abc';
      const message = 'hello';

      // add code
      return expect(spy.calledWith(uid, message)).to.be.true;
    });
  });
  
  describe('webhook', () => {
    it('sends 200 response', done => {
      // add code
    });
  });
});