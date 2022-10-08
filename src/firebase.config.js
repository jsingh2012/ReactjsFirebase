import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDwo6j75L_tQQKPvY2IHFPojhfssFp4wkQ",
    authDomain: "restaurantapp-1c9b7.firebaseapp.com",
    databaseURL: "https://restaurantapp-1c9b7-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-1c9b7",
    storageBucket: "restaurantapp-1c9b7.appspot.com",
    messagingSenderId: "1098706362193",
    appId: "1:1098706362193:web:894450cdbe6d67a5bdfd70",
    measurementId: "G-14Z4TT5TJ1"
  };

  const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};