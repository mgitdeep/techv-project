// Logout functionality added!

import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";

// Firebase integration
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React-redux
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLinks/HiddenLinks";


const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        sellit<span>Now</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart <FaShoppingCart size={21} />
      <p>0</p>
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const navigateToHome = useNavigate();

  const dispatch = useDispatch();

  // Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        // console.log(user);
        // console.log(user.displayName);

        if (user.displayName == null) {
          const u1 = user.email.slice(0, user.email.indexOf("@"));
          // console.log(u1);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          // console.log(uName);

          setDisplayName(uName)
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        // User is signed out
        setDisplayName("");

        dispatch(REMOVE_ACTIVE_USER())
      }
    });
  }, [ dispatch, displayName ]); // It'll gonna load each time page reloads

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("You've Logged out!");
        // Sign-out successful.
        navigateToHome("/");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <header>
      <ToastContainer />
      <div className={styles.header}>
        {logo}

        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            onClick={hideMenu}
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <ShowOnLogout>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              </ShowOnLogout>

              <ShowOnLogin>
              <a href="#user" style={{color: "#ff7722"}}>
                <FaUserCircle size={16} /> Hi, {displayName}
              </a>
              </ShowOnLogin>
              <ShowOnLogout>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
              </ShowOnLogout>
              <ShowOnLogin>
              <NavLink to="/order-history" className={activeLink}>
                My Orders
              </NavLink>
              </ShowOnLogin>
              <ShowOnLogin>
              <NavLink to="/" onClick={logoutUser}>
                Logout
              </NavLink>
              </ShowOnLogin>
            </span>
            {cart}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
