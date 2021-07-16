import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Frontpage from "./components/Frontpage"
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from './components/Footer'
import { Button } from "react-bootstrap"


const App = () => {

  const baseURL = '/api/messages'
  const [posts, setPosts] = useState([])
  const [showPosts, setShowPosts] = useState(-10)

  const showMore = () =>{
    if (posts.length + showPosts < 0){
      return
    }
    setShowPosts(showPosts - 10)
  }

  const addNewPost = (newPost) => {
    setPosts(posts.concat(newPost))
  }

  useEffect(() => {
    axios
      .get(baseURL)
      .then(response => setPosts(response.data) | console.log(response.data))
  }, [])

  return (
    <div style={{ backgroundColor: "#F5F5F5", minHeight: "100%", fontFamily: "Roboto, sans-serif", }}>
      <div style={{minHeight: "94.45vh", paddingTop:"10vh"}}>
        <Router>
          <Navbar />
          <Switch>

            <Route path='/'>
              <Frontpage posts={posts} addNewPost={addNewPost} showPosts={showPosts} baseURL={baseURL}/>
            </Route>

          </Switch>
        </Router>
        <Button 
        disabled={posts.length + showPosts < 0}
        variant="light" block
        onClick={showMore}>
          Load more
        </Button>{''}
      </div>
      <Footer />
    </div>
  );
}

export default App;
