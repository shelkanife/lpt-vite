import { useUserContext } from "../../contexts/user";
import { useEffect, useState } from "react";
import { fileHandler } from "../../services/images";
import { updateProfile } from "firebase/auth";
import { auth } from "../../services/config";
import { getCurretUser } from "../../services/auth";
import { updateProfilePic } from "../../services/documents";

const useSettings = () => {
  const { currentUser, setCurrentUser } = useUserContext();
  const [saveState, setSaveState] = useState("Guardar cambios");
  const [initialState, setInitialState] = useState({
    displayName: currentUser.displayName,
    file: false,
  });
  const [copyState, setCopyState] = useState({
    displayName: currentUser.displayName,
    file: false,
  });
  const [fileName, setFileName] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const handleFileUpload = (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const { name } = file;
    setFileName(name);
    setCopyState({ ...copyState, file: true });
  };

  useEffect(() => {
    if (copyState.file) {
      setIsDisable(false);
      return;
    }
    if (copyState.displayName)
      if (copyState.displayName === initialState.displayName)
        setIsDisable(true);
      else setIsDisable(false);
    else setIsDisable(true);
  }, [copyState]);

  const handleState = (e) => {
    const { name, value } = e.target;
    setCopyState({ ...copyState, [name]: value });
  };

  const updateInfoProfile = async (e) => {
    e.preventDefault();
    if (copyState.file) {
      const file = document.getElementById("fileToUpload").files[0];
      const photoURL = await fileHandler(copyState.displayName, file);
      await updateProfile(auth.currentUser, {
        displayName: copyState.displayName,
      });
      setCurrentUser({
        ...getCurretUser(),
        displayName: copyState.displayName,
        photoURL,
      });
      await updateProfilePic(getCurretUser().displayName, photoURL);
    } else {
      updateProfile(auth.currentUser, { displayName: copyState.displayName });
      setCurrentUser({
        ...getCurretUser(),
        displayName: copyState.displayName,
      });
    }
    setIsDisable(true);
    setSaveState("Cambios guardados");
  };

  return {
    isDisable,
    fileName,
    currentUser,
    handleState,
    handleFileUpload,
    updateInfoProfile,
    saveState,
  };
};

export default useSettings;
