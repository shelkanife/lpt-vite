import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  getDoc,
  doc,
  setDoc,
  writeBatch,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

export async function createUserDocument(displayName, email) {
  const userDoc = {
    followers: [],
    following: [],
    level: 1,
    displayName,
    email,
    photoURL: null,
  };
  return await setDoc(doc(db, "users", displayName), userDoc);
}

export async function existsUsername(username) {
  const collectionRef = collection(db, `users`);
  const q = query(collectionRef, where("__name__", "==", username));
  const docsCollection = await getDocs(q);
  return !!docsCollection.size;
}

export async function getAllUsers(displayName) {
  const documents = [];
  const collectionRef = collection(db, `users`);
  const q = query(collectionRef, where("__name__", "!=", displayName));
  const docsCollection = await getDocs(q);
  docsCollection.forEach((doc) => {
    documents.push(doc.id);
  });
  return documents;
}
export async function follow(displayName, toFollowUsername) {
  const batch = writeBatch(db);
  const userDoc = doc(db, "users", displayName);
  const userSnap = await getDoc(userDoc);
  const { following } = userSnap.data();

  batch.update(userDoc, { following: [...following, toFollowUsername] });

  const toFollowDoc = doc(db, "users", toFollowUsername);
  const toFollowSnap = await getDoc(toFollowDoc);
  const { followers } = toFollowSnap.data();
  batch.update(toFollowDoc, { followers: [...followers, displayName] });

  await batch.commit();
}
export async function unfollow(currentDisplayName, toFollowDisplayName) {
  const batch = writeBatch(db);
  const userDoc = doc(db, "users", toFollowDisplayName);
  const userSnap = await getDoc(userDoc);
  const { followers } = userSnap.data();

  batch.update(userDoc, {
    followers: [...followers.filter((e) => e !== currentDisplayName)],
  });

  const toFollowDoc = doc(db, "users", currentDisplayName);
  const toFollowSnap = await getDoc(toFollowDoc);
  const { following } = toFollowSnap.data();
  batch.update(toFollowDoc, {
    following: [...following.filter((e) => e !== toFollowDisplayName)],
  });

  await batch.commit();
}
export async function getFollowers(displayName) {
  const userDoc = doc(db, "users", displayName);
  const userSnap = await getDoc(userDoc);
  const { followers } = userSnap.data();

  const documents = [];
  if (followers.length) {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("__name__", "in", followers));
    const docsCollection = await getDocs(q);
    docsCollection.forEach((doc) => {
      const { displayName, photoURL } = doc.data();
      documents.push({ displayName, photoURL });
    });
  }
  return documents;
}
export async function getFollowing(displayName) {
  const userDoc = doc(db, "users", displayName);
  const userSnap = await getDoc(userDoc);
  const { following } = userSnap.data();

  const documents = [];
  if (following.length) {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("__name__", "in", following));
    const docsCollection = await getDocs(q);
    docsCollection.forEach((doc) => {
      const { displayName, photoURL } = doc.data();
      documents.push({ displayName, photoURL });
    });
  }
  return documents;
}
export async function following(curerntDisplayName, toFollowDisplayName) {
  const toFollowDoc = doc(db, "users", toFollowDisplayName);
  const toFollowSnap = await getDoc(toFollowDoc);
  const { followers } = toFollowSnap.data();

  return followers.indexOf(curerntDisplayName) > -1;
}

export async function getUserByName(displayName) {
  const documents = [];
  const collectionRef = collection(db, "users");
  const q = query(collectionRef, where("__name__", "==", displayName));
  const docsCollection = await getDocs(q);

  docsCollection.forEach((doc) => {
    const { displayName, photoURL } = doc.data();
    documents.push({ displayName, photoURL });
  });
  return documents;
}

export async function getUserInfo(userDisplayName) {
  const userDoc = doc(db, "users", userDisplayName);
  const userSnap = await getDoc(userDoc);
  const { displayName, email, following, followers } = userSnap.data();
  return {
    displayName,
    email,
    following: following.length,
    followers: followers.length,
  };
}

export async function getFollowInfo(displayName) {
  const userDoc = doc(db, "users", displayName);
  const userSnap = await getDoc(userDoc);
  const { following, followers } = userSnap.data();

  return {
    following: following.length,
    followers: followers.length,
  };
}

export async function updateProfilePic(displayName, photoURL) {
  console.log(displayName);
  const userDoc = doc(db, "users", displayName);
  const userSnap = await getDoc(userDoc);
  console.log(userSnap.data());
  await updateDoc(userDoc, { photoURL });
}
