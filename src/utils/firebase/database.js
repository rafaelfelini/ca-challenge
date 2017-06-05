import firebase from 'firebase';

export default function (url) {
  const ref = firebase.database().ref(url);

  return {
    ref,
    disconnect: () => ref.off(),
  };
}
