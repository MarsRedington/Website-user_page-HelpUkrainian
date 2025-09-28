import React from "react";
import { Route, Routes } from "react-router-dom";
import LearnMorePage from "./pages/learnMore/learnMore";
import MainPage from "./pages/main/mainpage";
import LoginPage from "./pages/logIn/logInPage";
import SignUpPage from "./pages/signUp/signUpPage";
import ForgotPasswordPage from "./pages/forgotPassword/forgotPasswordPage";
import PersonalEvents from "./pages/personalEvents/personalEvents";
import PersonalProfile from "./pages/personalProfile/personalProfile";
import PersonalTeam from "./pages/personalTeam/personalTeam";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/learnmore" element={<LearnMorePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />}/>
      <Route path="/personalPage/events" element={<PersonalEvents />}/>
      <Route path="/personalPage/profile" element={<PersonalProfile />}/>
      <Route path="/personalPage/team" element={<PersonalTeam />}/>
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}

export default App;
