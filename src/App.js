import Regiter from "./components/register/Regiter";
import Home from "./pages/home/home.jsx"
import Topbar from "./components/topbar/topbar";
import Login from "./pages/login/login";
import Write from "./pages/write/Write"
import Post from "./components/post/Post";
// import Home from "./pages/home/home"
import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
// import Login from "./pages/login/login";
import {BrowserRouter as Router , Routes,Route,Link } from "react-router-dom";


function App() {
  const user=false;
  return (
    <Router>
      <Topbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={user?<Home/>:<Regiter/>}/>
          <Route exact path="/login" element={user?<Home/>:<Login/>}/>
          <Route exact path="/write" element={user?<Write/>:<Regiter/>}/>
          <Route exact path="/settings" element={user?<Settings/>:<Regiter/>}/>
          <Route exact path="/post" element={user?<Post/>:<Regiter/>}/>
          <Route exact path="/post/:postId" element={user?<Single/>:<Regiter/>}/>
        </Routes>
      <Regiter/>
    </Router>
  );
}

export default App;
