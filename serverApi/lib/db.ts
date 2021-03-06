import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

const createApp = ()=>{
    var serviceAccount = require("../firebase.config.json");
    
  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://gallery-9e321.appspot.com",
    databaseURL: "https://gallery-9e321-default-rtdb.europe-west1.firebasedatabase.app",
  });
}

export const getApp = () => {
  try{
    admin.instanceId()
  }
  catch(e) {
    createApp();
  }
  return admin.app()
}

export const db = () => {
  return getFirestore(getApp());
} 
export const bucket = ()=>{
  return admin.storage().bucket("gs://gallery-9e321.appspot.com");
}
export const getCollection = <T>(colName: string) => {
  return db().collection(colName) as FirebaseFirestore.CollectionReference<T>;
};



