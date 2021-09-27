import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

const Settings = () => {
   return (
      <div className="settings">
         <div className="settingsWrapper">
            <div className="settingsTitle">
               <span className="settingsUpdateTitle">Update Your Account</span>
               <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
               <label>Profile Picture</label>
               <div className="settingsPP">
                  <img
                     className="writeImg"
                     src="https://images.unsplash.com/photo-1632379220196-ba466ed2db6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                     alt="profile"
                  />
                  <label htmlFor="fileInput">
                     <i className="settingsPPIcon far fa-user-circle" ></i>
                  </label>
                  <input type="file" id="fileInput" style={{ display: "none" }} />
               </div>
               <label>Username</label>
               <input type="text" placeholder="Safak" />
               <label>Email</label>
               <input type="email" placeholder="safak@gmail.com" />
               <label>Password</label>
               <input type="password" />
               <button className="settingsSubmit">Update</button>
            </form>
         </div>
         <Sidebar />
      </div>
   )
}

export default Settings
