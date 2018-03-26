const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');

const notifyUser = require('../notifyUser');
const test = require('firebase-functions-test')(require('./firebaseConfig.json'));
const request = require('supertest');

describe('my functions', () => {
  const myFunctions = require('../index');

  after(() => {
    test.cleanUp();
  })

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
      const snap = test.firestore.makeDocumentSnapshot({ message: message }, 'uid/' + uid);
      wrapped(snap, { params: { uid: uid } });

      return expect(spy.calledWith(uid, message));
    });
  });
  
  describe('webhook', () => {
    it('sends 200 response', done => {
      request(myFunctions.webhook)
        .post('/')
        .expect(200, done);
    });
  });
});