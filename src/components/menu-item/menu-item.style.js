export const navBarCenter = "navbar-center";
// export const menuButton = `btn btn-ghost px-2 md:px-4 md:text-xl xl:text-2xl hover:text-secondary ${({
//   isActive,
// }) => (isActive ? "text-primary" : undefined)}`;
export const menuButton = ({ isActive }) =>
  isActive
    ? "btn btn-ghost px-2 md:px-4 md:text-xl xl:text-2xl hover:text-secondary underline underline-offset-4"
    : "btn btn-ghost px-2 md:px-4 md:text-xl xl:text-2xl hover:text-secondary";
