import './topbar.css'

const TopBar = () => {
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
               <li className="topListItem">HOME</li>
               <li className="topListItem">ABOUT</li>
               <li className="topListItem">CONTACT</li>
               <li className="topListItem">WRITE</li>
               <li className="topListItem">LOGOUT</li>
            </ul>
         </div>
         <div className="topRight">
            <img 
               className="topImg"
               src="https://images.unsplash.com/photo-1632379220196-ba466ed2db6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
               alt="profile" 
            />
            <i className="topSearchIcon fas fa-search"></i>
         </div>
      </div>
   )
}

export default TopBar
