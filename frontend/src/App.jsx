import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className='min-h-screen bg-gray-200 flex font-sans items-center justify-center relative overflow-hidden'>
      <Routes>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
