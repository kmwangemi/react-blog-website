import './siderbar.css'

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
               src="https://images.unsplash.com/photo-1632379220196-ba466ed2db6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
               alt=""
            />
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Veritatis deserunt saepe totam soluta alias consequuntur
               fugiat magni a beatae sapiente, odit placeat animi in
               aliquid! Eum nulla dolores at id?
            </p>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
               <li className="sidebarListItem">Life</li>
               <li className="sidebarListItem">Music</li>
               <li className="sidebarListItem">Style</li>
               <li className="sidebarListItem">Sport</li>
               <li className="sidebarListItem">Tech</li>
               <li className="sidebarListItem">Cinema</li>
            </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
               <i className="sidebarIcon fab fa-facebook-square"></i>
               <i className="sidebarIcon fab fa-twitter-square"></i>
               <i className="sidebarIcon fab fa-pinterest-square"></i>
               <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
