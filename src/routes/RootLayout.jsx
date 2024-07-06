import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <article className='mt-8 prose prose-slate prose-headings:text-center mx-auto lg:prose-xl'>
        <h2>Oleksii Butrin</h2>
      </article>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'></div>
        <div className='navbar-center'>
          <NavLink className='btn btn-ghost text-xl' to='/'>
            Home
          </NavLink>
        </div>
        <div className='navbar-center'>
          <NavLink className='btn btn-ghost text-xl' to='/about'>
            About
          </NavLink>
        </div>
        <div className='navbar-center'>
          <NavLink className='btn btn-ghost text-xl' to='/projects'>
            Projects
          </NavLink>
        </div>
        <div className='navbar-center'>
          <NavLink className='btn btn-ghost text-xl' to='/contact'>
            Contact
          </NavLink>
        </div>
        <div className='navbar-end'></div>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
