import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import ContactMe from './pages/contactMe';
import Education from './pages/education';
import Experience from './pages/experience';
import Personal from './pages/personal';
import SkillSet from './pages/skillSet';
import NavBar from './components/navBar';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Router basename="/OpenWebsite">
    <NavBar />
    <div style={{ flex: 1 }}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/OpenWebsite/about" element={<AboutMe />}></Route>
          <Route path="/OpenWebsite/education" element={<Education />}></Route>
          <Route path="/OpenWebsite/experience" element={<Experience />}></Route>
          <Route path="/OpenWebsite/personal" element={<Personal />}></Route>
          <Route path="/OpenWebsite/skills" element={<SkillSet />}></Route>
        </Routes>
        </div>
    </Router>
        <ContactMe />
    </div>
  );
}

export default App;
