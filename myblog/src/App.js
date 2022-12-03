import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import PageFeed from "./components/PageFeed";
import PageCreateElement from "./components/PageCreateElement";
import PageAbout from "./components/PageAbout";
import PageLogin from "./components/PageLogin"
import Header from "./components/Header";



const connected_as_friend=false
const connected_as_editor=false

function App() {
  
  return (
    <>
    <Router>
    
    <Header/>
    <div className="pagebody">
      <Routes>
      
      <Route path='/' exact element={<PageFeed/>}/>
      <Route path='/CreatePost' exact element={<PageCreateElement/>}/>
      <Route path='/about' exact element={<PageAbout/>}/>
      <Route path='/login' exact element={<PageLogin/>}/>
      </Routes>
      </div>
    </Router>
    
    </>
  );
}

export default App;
