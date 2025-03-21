import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <div
      className='max-w-md w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
    overflow-hidden'
    >
      <div className='p-8'>
        <h2 className='text-3xl font-bold mb-6 text-center text-sky-500'>
          Forgot Password
        </h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <p className='text-gray-600 mb-6 text-center'>
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <Input
              icon={Mail}
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className='mt-1 w-full py-2 px-4 text-white font-bold text-lg bg-sky-500 active:bg-sky-700 hover:bg-sky-400 cursor-pointer rounded-lg'
              type='submit'
            >
              {isLoading ? (
                <Loader className='size-6 animate-spin mx-auto' />
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>
        ) : (
          <div className='text-center'>
            <div className='w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Mail className='h-8 w-8 text-white' />
            </div>
            <p className='text-gray-600 mb-6'>
              If an account exists for {email}, you will receive a password
              reset link shortly.
            </p>
          </div>
        )}
      </div>

      <div className='px-8 py-4 bg-gray-100 bg-opacity-50 flex justify-center'>
        <Link
          to={"/login"}
          className='text-sm text-sky-400 hover:underline flex items-center'
        >
          <ArrowLeft className='h-4 w-4 mr-2' /> Back to Login
        </Link>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
