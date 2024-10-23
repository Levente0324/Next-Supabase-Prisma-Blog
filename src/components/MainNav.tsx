const MainNav = () => {
  return (
    <div className="text-white flex flex-row justify-between w-full h-16 mt-2 px-5 bg-transparent rounded-xl">
      <div className="h-full flex flex-row justify-center items-center font-bold text-xl tracking-wide">
        <h1>
          <a href="../mainpage">Home</a>
        </h1>
      </div>
      <div className="w-16 h-full flex flex-row justify-center items-center font-bold text-3xl tracking-wide">
        <h1>Test</h1>
        <h1>Blog</h1>
      </div>
      <div className="h-full flex flex-row justify-center items-center font-bold text-xl tracking-wide">
        <h1>
          <a href="../profile">Profile</a>
        </h1>
      </div>
    </div>
  );
};

export default MainNav;
