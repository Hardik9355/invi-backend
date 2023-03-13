

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import RegisterOrganisation from './components/RegisterOrganisation';
import RegisterUser from './components/RegisterUser';
import CompanyDetail from './components/CompanyDetail';
import ClientDetail from './components/ClientDetail';
import LoginHome from './components/LoginHome';

// pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import LoginDashboard from './components/LoginDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/home" element={<LoginHome />} />
        <Route path="/login/dashboard" element={<LoginDashboard />} />
        <Route path="/login/user/detail" element={<CompanyDetail />} />
        <Route path="/login/client/detail" element={<ClientDetail />} />
        <Route path="/signup/person" element={<RegisterUser />} />
        <Route path="/signup/organisation" element={<RegisterOrganisation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
