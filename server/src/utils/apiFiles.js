import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import fs from 'fs'

const file=async(fileName,type)=>{

    const storage = getStorage();
    
    const metadata = {
      contentType: `image/${type}`
    };
    
    const storageRef = ref(storage, 'images/' + {fileName});
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
    
          case 'storage/unknown':
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          fs.unlink(`../../public/temp/{filename}`);
          return (downloadURL);
        });
      }
    );
}


export {file};
