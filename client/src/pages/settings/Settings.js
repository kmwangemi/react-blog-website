import { useContext, useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import './settings.css'

const Settings = () => {
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [file, setFile] = useState(null)
   const [success, setSuccess] = useState(false)
   const { user, dispatch } = useContext(Context)
   const publicFile = "http://localhost:5000/images/";

   const handleSubmit = async (e) => {
      e.preventDefault();
      setSuccess(false)
      dispatch({ type: "UPDATE_START" })
      const updatedUser = {
         userId: user._id,
         username,
         email,
         password
      };
      if (file) {
         const data = new FormData();
         const fileName = Date.now() + file.name;
         data.append("name", fileName);
         data.append("file", file);
         updatedUser.profilePic = fileName;
         try {
            await axios.post("/upload", data);
         } catch (err) {}
      }
      try {
         const res = await axios.put("/users/" + user._id, updatedUser);
         setSuccess(true)
         dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
      } catch (err) {
         dispatch({ type: "UPDATE_FAILURE" })
      }
   }

   return (
      <div className="settings">
         <div className="settingsWrapper">
            <div className="settingsTitle">
               <span className="settingsUpdateTitle">Update Your Account</span>
               <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
               <label>Profile Picture</label>
               <div className="settingsPP">
                  <img
                     className="writeImg"
                     src={file ? URL.createObjectURL(file) : publicFile + user.profilePic}
                     alt="profile"
                  />
                  <label htmlFor="fileInput">
                     <i className="settingsPPIcon far fa-user-circle" ></i>
                  </label>
                  <input 
                     type="file" 
                     id="fileInput" 
                     style={{ display: "none" }} 
                     onChange = {(e) => setFile(e.target.files[0])}
                  />
               </div>
               <label>Username</label>
               <input type="text" placeholder={user.username} onChange={e =>setUsername(e.target.value)} />
               <label>Email</label>
               <input type="email" placeholder={user.email} onChange={e =>setEmail(e.target.value)} />
               <label>Password</label>
               <input type="password" onChange={e =>setPassword(e.target.value)}/>
               <button type="submit" className="settingsSubmit">Update</button>
               {
                  success && (
                     <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
                        Profile has been updated...
                     </span>
                  )
               }
            </form>
         </div>
         <Sidebar />
      </div>
   )
}

export default Settings
