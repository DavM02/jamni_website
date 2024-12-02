import { ref, get, query, startAt, endAt, orderByKey } from "firebase/database";
import { database } from './firebaseConfig';

async function loadData([path, page, count]) {
    const startPage = (page - 1) * count;
  
    try {
        const dbRef = ref(database, path);

        const limitedQuery = query(dbRef, orderByKey(), startAt(String(startPage)), endAt(String(startPage + count-1)));

        const snapshot = await get(limitedQuery);
 
 
        if (snapshot.exists()) {
    
            const data = snapshot.val();
            return Array.isArray(data) ? Object.values(data) : Object.values(data).map((item, index) => item);

        } else {
            return []; 
        }
    } catch (error) {
        throw new Error('An error occured when loading');
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

 
