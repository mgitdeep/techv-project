import styles from './Ad.module.scss'
// import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'

// Toastify imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from './firebase';

const Ad = () => {

  const [ad, setAd] = useState({
    name: "",
    category: "", 
    price: "", 
    condition: "", 
    // image: "", 
    location: "", 
    description: "", 
    advertiser_info: "", 
    contact_info: ""
  })

  // Uploading image to Firebase
  const [imagE, setImagE] = useState('')

  const upload = () => {
    if (imagE == null) {
      return
    } else {
      const imageRef = storage.ref(`/image/${imagE.name}`).put(imagE).on("State changed", alert("Success"), alert)
      
      imageRef()
    }
  }

  const navigateToMyProfile = useNavigate()

  let name, value
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value

    setAd({...ad, [name] : value})
  }

  const handleAdPost = async (f) => {
    f.preventDefault()

    const {name, category, price, condition, location, description, advertiser_info, contact_info} = ad

    if (!name || !category || !price || !condition || !location || !description || !advertiser_info || !contact_info) {
      toast.error("Please enter all details!")
    } else {

      const resPonse = await fetch("/ad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, category, price, condition, location, description, advertiser_info, contact_info
      })
      })

      const data = await resPonse.json()
  
      if (data.status === 422 || !data) {
        window.alert("Ad not posted!")
        console.log("Ad not posted!")
      } else {
        window.alert("Ad posted successfully!")
        console.log("Ad posted successfully!")

        upload()
  
        navigateToMyProfile("/myprofile")
      }
    }
    
  }

  return (
    <div className={styles.mainAuth}>
    <ToastContainer />
      {/* { loader && <Loader />} */}
      <section className={` ${styles.auth}`}>
        
        <Card>
          <div className={styles.form}>
            <h2>Product Ad</h2>
            <form method="POST">
              
              <p>
              <label>Product Name</label>
              <input type="text" name='name' placeholder='' required
              value={ad.name}
              onChange={handleInputs} 
              autoComplete='off'/>
              </p>
              {/* </div> */}

              <input type="text" name='category' placeholder='Category' required 
              value={ad.category}
              onChange={handleInputs}  
              autoComplete='off'/>

              <input type="number" name='price' placeholder='Price' required 
              value={ad.price}
              onChange={handleInputs}  
              autoComplete='off'/>

              <input type="text" name='condition' placeholder='Condition' required
              value={ad.condition}
              onChange={handleInputs} 
              autoComplete='off'/>

              <p>
              <label htmlFor="img">Select image:</label>
              <input type="file" id="img" name="image" accept="image/*" 
              onChange={(e) => {setImagE(e.target.files[0])}}/>
              
              {/* <button onClick={upload}>Upload</button> */}
              {/* <input type="submit" /> */}
              </p>

              <input type="text" name='location' placeholder='Location' required
              value={ad.location}
              onChange={handleInputs} 
              autoComplete='off'/>

              <input type="text" name='description' placeholder='Description' required
              value={ad.description}
              onChange={handleInputs} 
              autoComplete='off'/>

              <input type="text" name='advertiser_info' placeholder='Advertiser Info' required
              value={ad.advertiser_info}
              onChange={handleInputs} 
              autoComplete='off'/>

              <input type="text" name='contact_info' placeholder='Contact Info' required
              value={ad.contact_info}
              onChange={handleInputs}  
              autoComplete='off'/>

              <button className='--btn --btn-primary --btn-block' onClick={handleAdPost}>Post Ad</button>

            </form>
            {/* <span className={styles.register}>
              <p>Already Registered?</p>
              <Link to="/login">Login</Link>
            </span> */}
          </div>
        </Card>

        {/* <div className={styles.img}>
          <img src={registerImg} alt="login" width="400"/>
        </div> */}
        
      </section>
    </div>
  )
}

export default Ad