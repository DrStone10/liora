import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide hover:opacity-80 transition">
          Liora
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {!user && (
            <>
              <li>
                <Link to="/login" className="hover:text-blue-600 transition">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-blue-600 transition">
                  Register
                </Link>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <Link
                  to="/account"
                  className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm"
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
        >
          {/* Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-7 h-7 text-gray-700"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
          </svg>
        </button>
      </div>

      {/* Mobile collapse section */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col px-4 py-4 gap-4 text-gray-700 font-medium">
            {!user && (
              <>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-blue-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-blue-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            {user && (
              <>
                <li>
                  <Link
                    to="/account"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm text-center"
                    onClick={() => setOpen(false)}
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-sm text-center"
                    onClick={() => setOpen(false)}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
