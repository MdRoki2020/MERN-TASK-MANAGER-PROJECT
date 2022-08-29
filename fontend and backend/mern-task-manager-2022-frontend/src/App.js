import React, { Fragment } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPage from './pages/DashboardPage'
import CanceledPage from './pages/CanceledPage'
import CompeletedPage from './pages/CompeletedPage'
import CreatePage from './pages/CreatePage'
// import ForgetpassPage from './pages/ForgetpassPage'
import LoginPage from './pages/LoginPage'
import NewPage from './pages/NewPage'
import Page404 from './pages/Page404'
import ProfilePage from './pages/ProfilePage'
import ProgressPage from './pages/ProgressPage'
import RegistrationPage from './pages/RegistrationPage'
import FullScreenLoader from './components/master-layout/FullScreenLoader';
import { getToken } from './helper/SessionHelper';
import Send_OTP from './pages/AccountRecoverPage/Send_OTP';
import Verify_OTP from './pages/AccountRecoverPage/Verify_OTP';
import Create_Password from './pages/AccountRecoverPage/Create_Password';





function App() {

  if(getToken()){

    return (
      <Fragment>
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<DashboardPage  />}  />
                  <Route exact path="/Create" element={<CreatePage />}  />
                  <Route exact path="/All" element={<NewPage />}/>
                  <Route exact path="/Progress"  element={<ProgressPage />}/>
                  <Route exact path="/Completed"  element={<CompeletedPage />}/>
                  <Route exact path="/Canceled" element={<CanceledPage />}/>
                  <Route exact path="/Profile" element={<ProfilePage />}/>
                  <Route path="*" element={<Page404/>}/>
              </Routes>
          </BrowserRouter>
          <FullScreenLoader/>
      </Fragment>
  );

  }else{
    return (
      <Fragment>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navigate to="/Login" replace />}/>
                  <Route exact path="/Login" element={<LoginPage />}/>
                  <Route exact path="/Registration" element={<RegistrationPage />}/>
                  

                  <Route exact path="/SendOTP" element={<Send_OTP />}/>
                  <Route exact path="/VerifyOTP" element={<Verify_OTP />}/>
                  <Route exact path="/CreatePassword" element={<Create_Password />}/>
                  <Route path="*" element={<Page404/>}/>
              </Routes>
          </BrowserRouter>
          <FullScreenLoader/>
      </Fragment>
  );
  }

}

export default App;
