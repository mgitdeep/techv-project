import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import app from "../../firebase/config"
// import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";
// import { toast } from "react-toastify";
// import { async } from "@firebase/util";

const fireStore = getFirestore(app)

const MyProfile = () => {

  // Fetching already written data in Database (here we've entered the "cities" data with the help of "addDoc" (see below)prior to fetching)
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(fireStore, "cities")

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      // console.log(data)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getUsers();
  }, [])

  // Write Data to Database without taking user inputs
  // const writeData = async () => {
  //   const result = await addDoc(collection(fireStore, 'cities'), {
  //     name: 'Guwahati',
  //     pincode: 780009,
  //     lat: 123,
  //     long: 1234
  //   });

  //   console.log("Results: ", result)
  // }

  // const [imageUpload, setImageUpload] = useState('');

  // const uploadImage = () => {
  //   if ( imageUpload == null ) 
  //   return;
      
  //   const imageRef = storage.ref(`images/${imageUpload.name}`).put(imageUpload)
  //   .on("state_changed", alert("Success"))

  //   imageRef()

    // uploadBytes(imageRef, imageUpload).then(() => {
    //   alert("Image Uploaded!")
    // })
    
  

  return (
    <div>
        {/* <form>
            <input type="file" placeholder='Upload your profile' required 
            onChange={(e) => {setImageUpload(e.target.files[0])}}/>
            <button onClick={uploadImage}>Upload Profile Image</button>
        </form> */}
        {/* <form>
          <input type="text"  />
        </form> */}

        {users.map((user, i) => {
          return (
            <div key={i}>
              <h2>City: {user.name}</h2>
              <h2>Pin: {user.pincode}</h2>
            </div>
          )
        })}
        

        {/* <button onClick={writeData}>Put Data</button> */}
    </div>
  )
}

export default MyProfile