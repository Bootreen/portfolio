import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <article className='mt-8 prose prose-slate mx-auto lg:prose-xl'>
      <h1>Portfolio</h1>
      <Outlet />
    </article>
  );
};

export default RootLayout;
