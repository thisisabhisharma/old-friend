import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBOdft1gIBS2DUOSm6JclfTrFuzyvt41lc",
    authDomain: "old-friend-1b985.firebaseapp.com",
    databaseURL: "https://old-friend-1b985.firebaseio.com",
    projectId: "old-friend-1b985",
    storageBucket: "old-friend-1b985.appspot.com",
    messagingSenderId: "327093952904",
    appId: "1:327093952904:web:c0ab291911ae502a7f1a3d",
    measurementId: "G-L8TN44906Y"
}
firebase.initializeApp(config);

export default firebase;