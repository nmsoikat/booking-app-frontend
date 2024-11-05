import './App.css';
import { createContext, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AuthLayout from './layouts/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'
import WebsiteLayout from './layouts/WebsiteLayout'
import PageNotFound from './pages/PageNotFound'
import UserProfileLayout from './layouts/UserProfileLayout';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import UserPrivateRoute from './components/UserPrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ email: "" });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Routes>
          <Route path="/auth/*" element={<AuthLayout />}></Route>

          <Route path='/admin-dashboard/*' element=
            {
              <AdminPrivateRoute>
                <DashboardLayout />
              </AdminPrivateRoute>
            } />
          <Route path='/user-profile/*' element=
            {
              <UserPrivateRoute>
                <UserProfileLayout />
              </UserPrivateRoute>
            } />

          <Route path="/" element={<WebsiteLayout />}>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
    </UserContext.Provider>
  );
}

export default App;
