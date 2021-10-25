import axios from 'axios'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import './write.css'

const Write = () => {
   const [title, setTitle] = useState('')
   const [desc, setDesc] = useState('')
   const [file, setFile] = useState(null)
   const { user } = useContext(Context)

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
         username: user.username,
         title,
         desc
      };
      if (file) {
         const data = new FormData();
         const fileName = Date.now() + file.name;
         data.append("name", fileName);
         data.append("file", file);
         newPost.photo = fileName;
         try {
            await axios.post("/upload", data);
         } catch (err) {}
      }
      try {
         const res = await axios.post("/posts", newPost);
         console.log(res.data.savedPost._id);
         window.location.replace("/post/" + res.data.savedPost._id)
      } catch (err) {}
   }
   return (
      <div className="write">
         { file && (
            <img 
               className="writeImg"
               src={URL.createObjectURL(file)} 
               alt="write" 
         />)}
         <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
               <label htmlFor="fileInput">
                  <i className="writeIcon fas fa-plus"></i>
               </label>
               <input 
                  type="file" 
                  id="fileInput" 
                  style={{ display: "none" }} 
                  onChange = {(e) => setFile(e.target.files[0])}
               />
               <input 
                  type="text" 
                  placeholder="Title" 
                  className="writeInput" 
                  autoFocus={true} 
                  onChange = {(e) => setTitle(e.target.value)}
               />
            </div>
            <div className="writeFormGroup">
               <textarea 
                  placeholder="Tell your story..."
                  type="text"
                  className="writeInput writeText"
                  onChange = {(e) => setDesc(e.target.value)}
               ></textarea>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
         </form>
      </div>
   )
}

export default Write
