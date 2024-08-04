const style = {
  navBarCenter: "navbar-center",
  menuButton: ({ isActive }) =>
    isActive
      ? "btn btn-ghost px-2 md:px-4 md:text-xl xl:text-2xl lg:hover:text-secondary underline underline-offset-4"
      : "btn btn-ghost px-2 md:px-4 md:text-xl xl:text-2xl lg:hover:text-secondary",
};

export default style;
