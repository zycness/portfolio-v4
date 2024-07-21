import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { RoutesPaths } from './enum/routes.enum';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Experience />} />
          <Route path={RoutesPaths.EXPERIENCE} element={<Experience />} />
          <Route path={RoutesPaths.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
