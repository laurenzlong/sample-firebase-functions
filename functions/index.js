const functions = require('firebase-functions');
const notifyUser = require('./notifyUser');

exports.tellUser = functions.firestore.document('users/{uid}').onCreate((snap, context) => {
  const uid = context.params.uid;
  return notifyUser(uid, snap.get('message'));
});

exports.webhook = functions.https.onRequest((req, res) => {
  const admin = require('firebase-admin');
  admin.initializeApp();

  admin.firestore().collection('text-list')
    .doc('123')
    .set({ data: 'new data' })
    .then(() => res.send({ message: 'Data updated.' }));
});
