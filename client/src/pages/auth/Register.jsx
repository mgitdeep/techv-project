// Fully functional User Registration page!

import styles from './Auth.module.scss'
import registerImg from "../../assets/register.png"
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import { useState } from 'react'

// Toastify imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// // Firebase integration
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../firebase/config'
// import Loader from '../../components/loader/Loader'

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpass, setConfirmpass] = useState("")
  // const [loader, setLoader] = useState(false)

  // const navigateToLogin = useNavigate()

  

  return (
    <div className={styles.mainAuth}>
    <ToastContainer />
      {/* { loader && <Loader />} */}
      <section className={` ${styles.auth}`}>
        
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form>
              {/* <div> */}
              {/* <label htmlFor="email">
              <i className="zmdi zmdi-account"></i>
              </label> */}
              <input type="text" placeholder='Email' required
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
              {/* </div> */}

              <input type="password" placeholder='Password' required
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>

              <input type="password" placeholder='Confirm Password' required
              value={confirmpass}
              onChange={(e) => setConfirmpass(e.target.value)}/>

              <button className='--btn --btn-primary --btn-block' >Register</button>

            </form>
            <span className={styles.register}>
              <p>Already Registered?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>

        <div className={styles.img}>
          <img src={registerImg} alt="login" width="400"/>
        </div>
        
      </section>
    </div>
  )
}

export default Register