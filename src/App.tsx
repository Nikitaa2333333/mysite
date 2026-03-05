import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectorLand from './pages/ProjectorLand';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projector" element={<ProjectorLand />} />
      </Routes>
    </Router>
  );
}
