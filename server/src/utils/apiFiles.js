import { File } from "buffer";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import fs from 'fs/promises';

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

export { file };
