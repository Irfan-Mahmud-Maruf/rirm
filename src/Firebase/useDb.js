import db from '../Firebase/dbConfig'
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  
  const mailCollectionRef = collection(db, "inbox");
  class  dataService {
    addMail = (mailBody) => {
      return addDoc(mailCollectionRef, mailBody);
    };
  
    updateMail = (id, updatedMail) => {
      const mailDoc = doc(db, "inbox", id);
      return updateDoc(mailDoc, updatedMail);
    };
  
    deleteMail = (id) => {
      const mailDoc = doc(db, "inbox", id);
      return deleteDoc(mailDoc);
    };
  
    getAllMails = () => {
      return getDocs(mailCollectionRef);
    };
  
    getMail = (id) => {
      const mailDoc = doc(db, "inbox", id);
      return getDoc(mailDoc);
    };
  }
  
  export default new dataService();