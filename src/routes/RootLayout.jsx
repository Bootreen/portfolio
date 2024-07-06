import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "../components/Icons/Icons";

const RootLayout = () => {
  const [theme, setTheme] = useState("fantasy");
  const onThemeChange = () => setTheme(theme === "fantasy" ? "dim" : "fantasy");
  return (
    <div data-theme={theme} className='min-w-screen min-h-screen bg-base-100 '>
      <header className='pt-6 bg-base-200'>
        <article className='prose prose-slate prose-headings:text-center mx-auto lg:prose-xl'>
          <h2>Oleksii Butrin</h2>
        </article>
        <div className='mt-4 navbar'>
          <div className='navbar-start'></div>
          <div className='navbar-center'>
            <NavLink className='btn btn-ghost text-base sm:text-lg' to='/'>
              Home
            </NavLink>
          </div>
          <div className='navbar-center'>
            <NavLink className='btn btn-ghost text-base sm:text-lg' to='/about'>
              About
            </NavLink>
          </div>
          <div className='navbar-center'>
            <NavLink
              className='btn btn-ghost text-base sm:text-lg'
              to='/projects'
            >
              Projects
            </NavLink>
          </div>
          <div className='navbar-center'>
            <NavLink
              className='btn btn-ghost text-base sm:text-lg'
              to='/contact'
            >
              Contact
            </NavLink>
          </div>
          <div className='navbar-end'>
            <label className='swap swap-flip px-4'>
              {/* this hidden checkbox controls the state */}
              <input type='checkbox' onChange={onThemeChange} />
              <Sun size={5} />
              <Moon size={5} />
            </label>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default RootLayout;
