import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Header = ({ isAuthenticated }) => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className='bg-sky-500 text-white p-4 fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold'>
            <Link to='/'>TaskM</Link>
          </h1>
        </div>
        <nav className='flex items-center'>
          {isAuthenticated ? (
            <>
              <button
                onClick={handleLogout}
                className='bg-blue-600 text-white px-4 py-2 rounded'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/login' className='mr-4'>
                Login
              </Link>
              <Link
                to='/signup'
                className='bg-blue-600 text-white px-4 py-2 rounded'
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
