import './post.css'

const Post = () => {
   return (
      <div className="post">
         <img
            className="postImg"
            src="https://images.unsplash.com/photo-1632379220196-ba466ed2db6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
         />
         <div className="postInfo">
            <div className="postCats">
               <span className="postCat">Music</span>
               <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </span>
            <hr />
            <span className="postDate">
               1 hour ago 
            </span>
         </div>
         <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Distinctio blanditiis velit perferendis excepturi nulla enim voluptatibus laudantium deserunt at. 
            Atque sunt omnis consequuntur nesciunt in, est modi mollitia architecto ullam.
         </p>
      </div>
   )
}

export default Post
