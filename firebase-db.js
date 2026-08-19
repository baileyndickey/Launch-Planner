import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
  getFirestore, collection, doc, setDoc, deleteDoc, getDoc, getDocs, onSnapshot,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut as fbSignOut,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDadOhuwtxESLhaF8f_tAGzKsUkSUn35qE",
  authDomain: "launch-planner-ed4d7.firebaseapp.com",
  projectId: "launch-planner-ed4d7",
  storageBucket: "launch-planner-ed4d7.firebasestorage.app",
  messagingSenderId: "1009684230876",
  appId: "1:1009684230876:web:e1ea936486e00c325dba19",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const COLLECTION = "projects";

export function watchAuth(callback) {
  return onAuthStateChanged(auth, (user) => callback(user));
}

export async function signIn(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export function signOut() {
  return fbSignOut(auth);
}

// Firestore rejects `undefined` fields and can't store class instances —
// round-trip through JSON to get a plain, sanitized object.
function sanitize(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function watchProjects(callback, onError) {
  return onSnapshot(
    collection(db, COLLECTION),
    (snap) => callback(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
    onError
  );
}

export async function getAllProjectsOnce() {
  const snap = await getDocs(collection(db, COLLECTION));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getProject(id) {
  const snap = await getDoc(doc(db, COLLECTION, id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function saveProject(entry) {
  const { id, ...rest } = sanitize(entry);
  await setDoc(doc(db, COLLECTION, id), rest);
}

export async function deleteProject(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}
