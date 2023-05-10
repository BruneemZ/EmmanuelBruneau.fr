import { Injectable } from '@angular/core';
import {initializeApp}  from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore, setDoc, doc } from '@firebase/firestore';
import { getDatabase, ref, set , onValue, Database } from '@firebase/database';
import { environment } from 'src/environments/environment';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DatafireService {

  constructor() { }

  connectFirestore () {
   const app = initializeApp(environment.firebaseConfig);
   const dbFirestore = getFirestore(app);
   return dbFirestore; 
  }

  async getCollection (db: Firestore , id: string)  { 
    const col = collection(db, id); 
    const doc = await getDocs(col); 
    
    // const querySnapshot = await getDocs(col);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });

    const enreg  = doc.docs.map(doc => doc.data());
    return enreg; 
  }

  setDocument (db: Firestore, collection: String, ID: String, valeur : Data) { 
    setDoc(doc(db, ``+ collection + ID ), valeur)
    .then(() => {
    console.log("Successful")})
    .catch((error) => {
    console.log(`Unsuccessful returned error ${error}`)});
    return 0;
   }

  connectFirebase () {
    const app = initializeApp(environment.firebaseConfig);
    const dbFireBase = getDatabase(app); 
    return dbFireBase; 
   }

  async getDB (db: Database)  { 
    const _Ref = ref(db, '/');
    onValue(_Ref, (snapshot) => {
      const data = snapshot.val();
      return data;
    }); 
  }

  getDB2(db: Database) { 
   const starCountRef = ref(db, '/');
   onValue(starCountRef, (snapshot) => {
     const data = snapshot.val();
     console.log('data',data); 
     return data;
   });
  }

  setDB2(db: Database, val : string) { 
    set(ref(db, val + '/'), { 

    })
  }

}
