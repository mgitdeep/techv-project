import style from "./MyProfile.module.scss"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import app from "../../firebase/config"
import Card from "../../components/card/Card";
import { toast } from "react-toastify";
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

  const createUser = async (e) => {

    if (newName !=="" && newAddress !=="" && newEmail !=="" && newPhone !== 0) {
      await addDoc(usersCollectionRef, {fullName: newName, address: newAddress, email: newEmail, phone: newPhone})

      setNewName(e.target.value = "")
      setNewAddress(e.target.value = "")
      setNewEmail(e.target.value = "")
      setNewPhone(e.target.value = 0)

      toast.success("Profile updated!")
    } else {
      toast.error("Enter each field!")
    }
    

    
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

          <Card>
          <div className={style.showData}>

            <h2>Profile info</h2>
            {users.map((user, i) => {
              return (
                <div key={i}>
                  <p>Name: {user.fullName}</p>
                  <p>Address: {user.address}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </div>
              )
            })}
            
          </div>
          </Card>
          
          <Card>
            <div className={style.updateData}>
              <h2>Complete your profile</h2>
              <input type="text" placeholder="Full name" required
              onChange={(e) => setNewName(e.target.value)}/>

              <input type="text" placeholder="Address" required
              onChange={(e) => setNewAddress(e.target.value)}/>

              <input type="email" placeholder="Email" required
              onChange={(e) => setNewEmail(e.target.value)}/>

              <input type="number" placeholder="Phone" required
              onChange={(e) => setNewPhone(e.target.value)}/>

              <button onClick={createUser} className='--btn --btn-primary --btn-block'>Save changes</button>
            {/* <button onClick={writeData}>Put Data</button> */}
            </div>
          </Card>
        </div>
    </div>
  )
}

export default MyProfile