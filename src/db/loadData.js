import {
  ref,
  get,
  query,
  startAt,
  endAt,
  orderByKey,
  orderByChild,
  equalTo,
} from "firebase/database";
import { database } from "./firebaseConfig";

async function loadData([path, page, count]) {
   
  if ((!path, !page, !count)) {
    throw new Error("An unexpected error occurred");
  }
  const startPage = (page - 1) * count;
  try {
    const dbRef = ref(database, path);

    const limitedQuery = query(
      dbRef,
      orderByKey(),
      startAt(String(startPage)),
      endAt(String(startPage + count - 1))
    );

    const snapshot = await get(limitedQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Array.isArray(data)
        ? Object.values(data)
        : Object.values(data).map((item, index) => item);
    } else {
      return [];
    }
  } catch (error) {
    throw new Error("An unexpected error occurred");
  }
}

export default loadData;

export async function getLength([path]) {
  try {
    const dbRef = ref(database, path.replace("catalog/", ""));

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

export async function getReviewsCount() {
  try {
    const dbRef = ref(database, "reviews");

    const snapshot = await get(query(dbRef, orderByKey()));

    if (snapshot.exists()) {
      return snapshot.val().map((el) => el.review);
    } else {
      return 0;
    }
  } catch (error) {
    throw new Error(`error: ${error.message}`);
  }
}

export async function getItem([id, dbName]) {
 
  try {
    const dbRef = ref(database, dbName);
    const q = query(dbRef, orderByChild("id"), equalTo(id));

    const snapshot = await get(q);

    if (snapshot.exists()) {
      const data = snapshot.val();

      return Object.values(data)[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
}
