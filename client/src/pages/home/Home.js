import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

const Home = () => {
   const [posts, setPosts] = useState([]);
   const { search } = useLocation()
   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get("/posts" + search)
         setPosts(res.data.posts)
      }
      fetchPosts()
   }, [search])

   return (
      <>
         <Header/>
         <div className="home">
            <Posts posts={posts}/>
            <Sidebar/>
         </div>
      </>
   )
}

export default Home
