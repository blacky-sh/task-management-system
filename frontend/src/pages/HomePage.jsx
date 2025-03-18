import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const HomePage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  return (
    <div
      className='max-w-md w-full bg-sky-900   rounded-2xl shadow-xl 
  overflow-hidden'
    >
      <h2 className='text-3xl font-bold mt-3 mb-6 text-center text-white '>
        Dashboard
      </h2>

      <div className='space-y-6'>
        <div className='m-6 p-4 bg-sky-800 bg-opacity-50 rounded-lg border border-sky-700'>
          <h3 className='text-xl font-semibold text-white mb-3'>
            Profile Information
          </h3>
          <p className='text-gray-300'>Name: {user.name}</p>
          <p className='text-gray-300'>Email: {user.email}</p>
        </div>
        <div className='m-6 p-4 bg-sky-800 bg-opacity-50 rounded-lg border border-sky-700'>
          <h3 className='text-xl font-semibold text-white mb-3'>
            Account Activity
          </h3>
          <p className='text-gray-300'>
            <span className='font-bold'>Joined: </span>
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className='text-gray-300'>
            <span className='font-bold'>Last Login: </span>

            {formatDate(user.lastLogin)}
          </p>
        </div>
      </div>

      <div className='mt-4 w-full '>
        <button
          onClick={handleLogout}
          className='mb-6 w-100 ml-6 py-2 px-4 text-white font-bold text-lg bg-sky-500 active:bg-sky-700 hover:bg-sky-400 cursor-pointer rounded-lg'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
