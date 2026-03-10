import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const ProjectorLand = lazy(() => import('./pages/ProjectorLand'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white font-mono animate-pulse">SMART DEVELOP...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projector" element={<ProjectorLand />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
