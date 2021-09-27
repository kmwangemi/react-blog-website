import './singlePost.css'

const SinglePost = () => {
   return (
      <div className="singlePost">
         <div className="singlePostWrapper">
            <img 
               src="https://images.unsplash.com/photo-1632333891437-a3fec8ed6a80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" 
               alt="" 
               className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
               Lorem ipsum dolor sit amet.
               <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className="singlePostIcon far fa-trash-alt"></i>
               </div>
            </h1>
            <div className="singlePostInfo">
               <span className="singlePostAuthor">Author: <b>Safak</b> </span>
               <span className="singlePostDate"> 1 hour ago </span>
            </div>
            <p className="singlePostDesc">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Sapiente, est? Rerum facere quidem in incidunt mollitia, 
               rem voluptas velit quae eveniet ratione assumenda eius 
               deserunt laborum unde fugit ducimus molestiae.
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Sapiente, est? Rerum facere quidem in incidunt mollitia, 
               rem voluptas velit quae eveniet ratione assumenda eius 
               deserunt laborum unde fugit ducimus molestiae.
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Sapiente, est? Rerum facere quidem in incidunt mollitia, 
               rem voluptas velit quae eveniet ratione assumenda eius 
               deserunt laborum unde fugit ducimus molestiae.
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Sapiente, est? Rerum facere quidem in incidunt mollitia, 
               rem voluptas velit quae eveniet ratione assumenda eius 
               deserunt laborum unde fugit ducimus molestiae.
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Sapiente, est? Rerum facere quidem in incidunt mollitia, 
               rem voluptas velit quae eveniet ratione assumenda eius 
               deserunt laborum unde fugit ducimus molestiae.
            </p>
         </div>
      </div>
   )
}

export default SinglePost
