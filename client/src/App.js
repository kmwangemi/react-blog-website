import React, { useContext, Suspense } from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";
import { Context } from "./context/Context";
import Loader from './components/loader/Loader'
/* LAZY LOADED COMPONENTS  */
const Home = React.lazy(() => import('./pages/home/Home'));
const TopBar = React.lazy(() => import('./components/topbar/TopBar'));
const Write = React.lazy(() => import('./pages/write/Write'));
const Settings = React.lazy(() => import('./pages/settings/Settings'));
const Login = React.lazy(() => import('./pages/login/Login'));
const Register = React.lazy(() => import('./pages/register/Register'));
const SinglePost = React.lazy(() => import('./components/singlePost/SinglePost'));

const App = () => {
   const { user } = useContext(Context);
   return (
      <Suspense fallback={<Loader />}>
         <Router>
            <TopBar />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>
               <Route path="/register">
                  {user ? <Home /> : <Register />}
               </Route>
               <Route path="/login">
                  {user ? <Home /> : <Login />}
               </Route>
               <Route path="/write">
                  {user ? <Write /> : <Login />}
               </Route>
               <Route path="/settings">
                  {user ? <Settings /> : <Login />}
               </Route>
               <Route path="/post/:postId">
                  <SinglePost />
               </Route>
            </Switch>
         </Router>
      </Suspense>
   );
}

export default App;
