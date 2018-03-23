const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');

const notifyUser = require('../notifyUser');

describe('my functions', () => {

  describe('tellUser', () => {
    before(() => {
      sinon.spy(notifyUser);
    });

    it('calls notifyUser with the correct uid and message', () => {
      const uid = 'abc';
      const message = 'hello';

      // add your code

      expect(notifyUser.calledWith(uid, message));
    });
  });
});