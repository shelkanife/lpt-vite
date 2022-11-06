import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./config";
import { updateProfile } from "firebase/auth";
import { auth } from "./config";

export const fileHandler = async (displayName, file) => {
  const directoryRef = ref(
    storage,
    `profileImages/${displayName}/${file.name}`
  );

  await uploadBytes(directoryRef, file);
  const photoURL = await getDownloadURL(directoryRef);
  await updateProfile(auth.currentUser, { photoURL });

  return photoURL;
};
