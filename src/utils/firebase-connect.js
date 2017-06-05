import firebase from 'firebase';

export default function () {
  const config = {
    apiKey: 'AIzaSyDhKOFJGGNQqiBo1Y0dDVd42FgPK-2UbfA',
    authDomain: 'ca-challenge.firebaseapp.com',
    databaseURL: 'https://ca-challenge.firebaseio.com',
    projectId: 'ca-challenge',
    storageBucket: 'ca-challenge.appspot.com',
    messagingSenderId: '350526422488'
  };

  firebase.initializeApp(config);
}
