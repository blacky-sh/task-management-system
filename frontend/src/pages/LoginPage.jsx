import Input from "../components/Input";
import { Loader, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      toast.success("Login Successful!");
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
          Welcome back
          <p className='text-sm opacity-60 pt-2'>
            Enter your credentials to access your account
          </p>
        </div>
        <form onSubmit={handleLogin}>
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
          <button
            className='mt-1 w-full py-2 px-4 text-white font-bold text-lg bg-sky-500 active:bg-sky-700 hover:bg-sky-400 cursor-pointer rounded-lg'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className='w-6 h-6 animate-spin  mx-auto' />
            ) : (
              "Login"
            )}
          </button>
          <div className='my-3 w-full text-center'>
            <Link
              to='/forgot-password'
              className='text-md text-sky-400 hover:underline'
            >
              Forgot password?
            </Link>
          </div>

          <div className='mt-5 w-full text-center'>
            Already have an account?{" "}
            <Link to='/signup'>
              <span className='text-sky-600 cursor-pointer'>Sign Up</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
