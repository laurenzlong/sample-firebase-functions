const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');

const notifyUser = require('../notifyUser');
const functions = require('firebase-functions');
const test = require('firebase-functions-test')(require('./firebaseConfig.json'));

describe('my functions', () => {
  const myFunctions = require('../index');

  describe('tellUser', () => {
    let spy;
    before(() => {
      spy = sinon.spy(notifyUser);
    });

    it('calls notifyUser with the correct uid and message', () => {
      const uid = 'abc';
      const message = 'hello';
      const tellUser = myFunctions.tellUser;
      const wrapped = test.wrap(tellUser);
      const snap = functions.firestore.makeDocumentSnapshot({ message: message }, 'uid/' + uid);
      wrapped(snap, { params: { uid: uid } });

      expect(spy.calledWith(uid, message));
    });
  });
});