import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { RoutesPaths } from './enum/routes.enum';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Experiencie from './pages/Experience/Experiencie';
import NotFound from './pages/NotFound/NotFound';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path={RoutesPaths.PROJECTS} element={<Projects />} />
          <Route path={RoutesPaths.ABOUT_ME} element={<AboutMe />} />
          <Route path={RoutesPaths.EXPERIENCE} element={<Experiencie />} />
          <Route path={RoutesPaths.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
