import './App.css';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ReportProblem from './pages/ReportProblem';
import Saved from './pages/Saved';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import useStorage from './hooks/useStorage';

export const StorageContext = createContext();

function App() {

  // storage hook here 
  const [store,dispatch] = useStorage();

  return (
    <StorageContext.Provider value={{store,dispatch}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="messages" element={<Messages />} />
          {/* <Route path="notifications" element={<Notifications />} /> */}
          {/* <Route path="create" element={<Create />} /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="report-problem" element={<ReportProblem />} /> */}
          {/* <Route path="saved" element={<Saved />} /> */}
        </Route>
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </StorageContext.Provider>


  );
}

export default App;
