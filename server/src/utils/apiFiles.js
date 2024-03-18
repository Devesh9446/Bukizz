import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import fs from 'fs/promises';
import { apiError } from "./apiError.js";

const file = async (filecontent, type,uploadPath="images/") => {
  const storage = getStorage();

  const metadata = {
    contentType: `image/${type}`
  };
  const fileBuffer = await fs.readFile(filecontent.path);


  const storageRef = ref(storage, uploadPath + filecontent.originalname);
  const uploadTask = uploadBytesResumable(storageRef, fileBuffer, metadata);
  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log("error uploading file", error);
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await fs.unlink(filecontent.path);
          resolve(downloadURL);
        } catch (error) {
          console.error("Error getting download URL or deleting file", error);
          reject(error);
        }
      }
    );
  });
}
// if i have a file url of firebase ,write the function to delete the file
// from firebase storage
// and return the response


const deleteFile = async (file) => {
  console.log("file:  ", file.split("/")[7]);
  const filePath = decodeURIComponent(
    file
      .split("/")[7]
      .split("?")[0]
  );

  // Getting a reference to the file in Firebase Storage
  const storage = getStorage();
  const fileRef = ref(storage, filePath);

  try {
    // Deleting the file
    await deleteObject(fileRef);
    return {  message: "File deleted successfully." };
  } catch (error) {
    console.error("Error deleting file:", error);
    new apiError(400, "Error deleting file");
  }
}



export { file, deleteFile };
