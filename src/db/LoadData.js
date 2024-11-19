import { ref, get, query, startAt, endAt, orderByKey } from "firebase/database";
import { database } from './firebaseConfig';

async function loadData([path, page]) {
    const startPage = (page - 1) * 18;
    try {
        const dbRef = ref(database, path);

        const limitedQuery = query(dbRef, orderByKey(), startAt(String(startPage)), endAt(String(startPage + 17)));

        const snapshot = await get(limitedQuery);

        if (snapshot.exists()) {
            console.log('loading' + " " + path);
            const data = snapshot.val();
            return Array.isArray(data) ? data : Object.values(data);
        } else {
            return []; 
        }
    } catch (error) {
        console.error(error);
        return [];  
    }
}

export default loadData;

export async function getLength([path]) {
    try {
        const dbRef = ref(database, path.replace('catalog/', ''));

         const snapshot = await get(query(dbRef, orderByKey()));

        if (snapshot.exists()) {
          
            return snapshot.size;
        } else {
            return 0;  
        }
    } catch (error) {
        throw new Error(`error: ${error.message}`);
    }
}

 
