import './write.css'

const Write = () => {
   return (
      <div className="write">
         <img 
            className="writeImg"
            src="https://images.unsplash.com/photo-1632379220196-ba466ed2db6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="write" 
         />
         <form className="writeForm">
            <div className="writeFormGroup">
               <label htmlFor="fileInput">
                  <i className="writeIcon fas fa-plus"></i>
               </label>
               <input type="file" id="fileInput" style={{ display: "none" }} />
               <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
               <textarea 
                  placeholder="Tell your story..."
                  type="text"
                  className="writeInput writeText"
               ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
         </form>
      </div>
   )
}

export default Write
