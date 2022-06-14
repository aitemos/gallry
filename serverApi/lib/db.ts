import * as admin from "firebase-admin";
import { getFirestore } from 'firebase-admin/firestore';
//const {Storage} = require('@google-cloud/storage')

const createApp = ()=>{
    var serviceAccount = require("../firebase.config.json");
    
  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://gallery-9e321.appspot.com",
    databaseURL: "https://gallery-9e321-default-rtdb.europe-west1.firebasedatabase.app",
  });
}
// storage = new Storage({keyFilename: '../firebase.config.json'});
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
/*export const storageRef = storage.createBucket("galleradminy-9e321.appspot.com");
export const uploadFile= (path, filename)=> {
  storage.bucket("galleradminy-9e321.appspot.com").upload(path, {
    destination: filename,
  });

}*/
export const getCollection = <T>(colName: string) => {
  return db().collection(colName) as FirebaseFirestore.CollectionReference<T>;
};



