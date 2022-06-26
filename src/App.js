import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:name" element={<ProjectDetails />} />
      <Route path="experience" element={<Experience />} />
    </Routes>
  );
}

export default App;
