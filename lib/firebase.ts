import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: "AIzaSyB8YFNKeQI1gGqz4kjboeN01vCjWt8AqS8",
	authDomain: "fireship-nextjs-course-c3fb9.firebaseapp.com",
	projectId: "fireship-nextjs-course-c3fb9",
	storageBucket: "fireship-nextjs-course-c3fb9.appspot.com",
	messagingSenderId: "202256850971",
	appId: "1:202256850971:web:8cd64a42d8474dacdfd8be",
	measurementId: "G-QH87ZBBLYM"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

// Helper functions
/**
 * Gets a user/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username) {
	const usersRef = firestore.collection("users");
	const query = usersRef.where("username", "==", username).limit(1);
	const userDoc = (await query.get()).docs[0];
	return userDoc;
}

/**
 * Converts a firestore document in JSON
 * @param {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
	const data = doc.data();
	return {
		...data,
		// Gotcha! firestore timestamp NOT serializable to JSON
		createdAt: data.createdAt.toMillis(),
		updatedAt: data.updatedAt.toMillis(),
	};
}