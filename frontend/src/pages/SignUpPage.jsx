import React from "react";
import Input from "../components/Input";
import { Lock, Mail, User, Loader } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div
      className='max-w-md w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
  overflow-hidden'
    >
      <div className='p-8'>
        <div className='text-3xl font-bold mb-6 text-center bg-clip-text'>
          Create an account
          <p className='text-sm opacity-60 pt-2'>
            Enter your information to create a new account
          </p>
        </div>
        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type='text'
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            icon={Lock}
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className='mt-1 w-full py-2 px-4 text-white font-bold text-lg bg-sky-500 hover:bg-sky-400 cursor-pointer rounded-lg'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className=' animate-spin mx-auto' size={24} />
            ) : (
              "Sign Up"
            )}
          </button>
          <div className='mt-5 w-full text-center'>
            Already have an account?{" "}
            <Link to='/login'>
              <span className='text-sky-600 cursor-pointer'>Sign In</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
