import { storage } from "../../firebase/config";
// import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";
// import { toast } from "react-toastify";
import { useState } from "react";

const MyProfile = () => {

  const [imageUpload, setImageUpload] = useState('');

  const uploadImage = () => {
    if ( imageUpload == null ) 
    return;
      
    const imageRef = storage.ref(`images/${imageUpload.name}`).put(imageUpload)
    .on("state_changed", alert("Success"))

    imageRef()

    // uploadBytes(imageRef, imageUpload).then(() => {
    //   alert("Image Uploaded!")
    // })
    
  }

  return (
    <div>
        <form>
            <input type="file" placeholder='Upload your profile' required 
            onChange={(e) => {setImageUpload(e.target.files[0])}}/>
            <button onClick={uploadImage}>Upload Profile Image</button>
        </form>
    </div>
  )
}

export default MyProfile