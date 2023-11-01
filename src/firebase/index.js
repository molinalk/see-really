import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase_config";

export const getData = async (colection) => {
    const response = collection(db, colection);
    try {
        const data = await getDocs(response);
        const dataResult = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        return dataResult;
    } catch (error) {
        console.error(error);
        return null;
    }
}
