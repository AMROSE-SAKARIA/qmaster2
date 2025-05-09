import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
function Navbar({ token, setToken, setRole, role, tokenId }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken('');
    setRole('');
    localStorage.removeItem('teacherDashboardState'); // Clear persisted state on logout
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('latestToken');
    navigate('/');
  };

  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex items-center">
      <img src={logo} alt="logo" className='h-16 w-auto' />
        <Link to="/" className="text-xl font-bold">QMaster</Link>
        <div className="flex space-x-6 text-lg font-medium ml-auto">
          <Link to="/about" className="hover:underline">About</Link>
          {token ? (
            <>
              {role === 'teacher' && (
                <>
                  <Link to="/teacher" className="hover:underline">Teacher Dashboard</Link>
                  {tokenId && (
                    <>
                      <Link to={`/leaderboard/${tokenId}`} className="hover:underline">Leaderboard</Link>
                      <Link to={`/submissionsreview/${tokenId}`} className="hover:underline">Submissions</Link>
                    </>
                  )}
                </>
              )}
              {role === 'student' && (
                <>
                  <Link to="/student" className="hover:underline">Student Dashboard</Link>
                  <Link to="/results" className="hover:underline">Results</Link>
                </>
              )}
              <Link to="/profile" className="hover:underline">Profile</Link>
              <button onClick={handleLogout} className="hover:underline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/signin" className="hover:underline">Sign In</Link>
              <Link to="/signup" className="hover:underline">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;