import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from "./Pages/Home/home";
import About from './Pages/About/about';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
