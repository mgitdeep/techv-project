import style from "./MyProfile.module.scss"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import app from "../../firebase/config"
// import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";
// import { toast } from "react-toastify";
// import { async } from "@firebase/util";

const fireStore = getFirestore(app)

const MyProfile = () => {

  const [newName, setNewName] = useState("")
  const [newAddress, setNewAddress] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newPhone, setNewPhone] = useState(0)

  // Fetching already written data in Database (here we've entered the "cities" data with the help of "addDoc" (see below)prior to fetching)
  const [users, setUsers] = useState([])
  // const usersCollectionRef = collection(fireStore, "cities")
  const usersCollectionRef = collection(fireStore, "users")

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      // console.log(data)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getUsers();
  }, [])

  const createUser = async () => {
    await addDoc(usersCollectionRef, {fullName: newName, address: newAddress, email: newEmail, phone: newPhone})
  }

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
    <div className={style.mainSection}>
      <div className={style.profile}>
          {/* <form>
              <input type="file" placeholder='Upload your profile' required 
              onChange={(e) => {setImageUpload(e.target.files[0])}}/>
              <button onClick={uploadImage}>Upload Profile Image</button>
          </form> */}
          {/* <form>
            <input type="text"  />
          </form> */}

          {/* This is how we can fetch the Data from Firestore Database */}

          <div className={style.showData}>

            <h2>Profile info</h2>
            {users.map((user, i) => {
              return (
                <div key={i}>
                  <h4>City: {user.fullName}</h4>
                  <h4>Pin: {user.address}</h4>
                </div>
              )
            })}
            
          </div>
          
          <div className={style.updateData}>
            <h2>Complete your profile</h2>
            <input type="text" placeholder="Full name" 
            onChange={(e) => setNewName(e.target.value)}/>

            <input type="text" placeholder="Address" 
            onChange={(e) => setNewAddress(e.target.value)}/>

            <input type="email" placeholder="Email" 
            onChange={(e) => setNewEmail(e.target.value)}/>

            <input type="number" placeholder="Phone" 
            onChange={(e) => setNewPhone(e.target.value)}/>

            <button onClick={createUser}>Update Profile</button>
          {/* <button onClick={writeData}>Put Data</button> */}
          </div>
        </div>
    </div>
  )
}

export default MyProfile