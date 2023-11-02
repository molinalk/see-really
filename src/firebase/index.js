import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase_config";

export const getData = async (collectionInput) => {
    const collectionRef = collection(db, collectionInput);
    try {
        const data = await getDocs(collectionRef);
        const dataResult = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        return dataResult;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const addData = async (object, collectionInput) => {
    const collectionRef = collection(db, collectionInput);
    try {
        const document = await addDoc(collectionRef,object);
        return {susccess:true,data:document};
    } catch (error) {
        console.error(error);
        return {susccess:false,data:null}
    }
}
