
import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Contact from './Components/Pages/Contact/Contact';
import Header from './Components/Shared/Header/Header';
import Projects from './Components/Pages/Projects/Projects';
import About from './Components/Pages/About/About';
import Blogs from './Components/Pages/Blogs/Blogs';




function App() {
  return (
    <div className="App">
    <Router>
    
    <Header></Header>
    <Switch>
          
         
          <Route exact path='/'>
 <Home></Home>
     </Route>
     <Route path='/home'>
 <Home></Home>
 </Route>
          <Route  path="/contact">
            <Contact></Contact>
          </Route>
          <Route  path="/about">
            <About></About>
          </Route>
          <Route  path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route exact path="/projects">
            <Projects></Projects>
          </Route>
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;
