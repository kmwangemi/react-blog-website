import { Link } from "react-router-dom";
import './topbar.css'

const TopBar = () => {
   const user = false;
   return (
      <div className="top">
         <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
         </div>
         <div className="topCenter">
            <ul className="topList">
               <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
               </li>
               <li className="topListItem">
                  <Link className="link" to="/">ABOUT</Link>
               </li>
               <li className="topListItem">
                  <Link className="link" to="/">CONTACT</Link>
               </li>
               <li className="topListItem">
                  <Link className="link" to="/write">WRITE</Link>
               </li>
               <li className="topListItem">
                  {
                     user &&
                     <Link className="link" to="/login">LOGOUT</Link>
                  }
               </li>
            </ul>
         </div>
         <div className="topRight">
            {
               user ? (
                  <img
                     className="topImg"
                     src="https://images.unsplash.com/photo-1632379220196-ba466ed2db6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                     alt="profile"
                  />
               ) : (
                  <ul className="topList">
                     <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                     </li>
                     <li className="topListItem">
                        <Link className="link" to="/register">REGISTER</Link>
                     </li>
                  </ul>
               )
            }
            <i className="topSearchIcon fas fa-search"></i>
         </div>
      </div>
   )
}

export default TopBar
