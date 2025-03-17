import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <div className='min-h-screen bg-gray-200 flex font-sans items-center justify-center relative overflow-hidden'>
      <Routes>
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
