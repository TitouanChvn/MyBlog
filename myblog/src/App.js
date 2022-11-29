import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' exact element={<Page1/>}/>
      <Route path='/page2' exact element={<Page2/>}/>
      <Route path='/about' exact element={<Page3/>}/>
      </Routes>

    </Router>
  );
}

export default App;
