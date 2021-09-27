import './header.css'

const Header = () => {
   return (
      <div className="header">
         <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
         </div>
         <img 
            className="headerImg" 
            src="https://images.unsplash.com/photo-1632242754301-ceb773b1457b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" 
            alt="cover" 
         />
      </div>
   )
}

export default Header
