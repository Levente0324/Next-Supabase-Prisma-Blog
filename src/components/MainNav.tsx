import { Separator } from "@/components/ui/separator.client";

const MainNav = () => {
  return (
    <>
      <div className="text-white flex flex-row justify-between w-full h-16 px-5 backdrop-blur-sm rounded-xl sticky top-0 z-50">
        <div className="h-full flex flex-row justify-center items-center font-bold text-xl tracking-wide pt-4">
          <h1 className="text-teal-400 hover:text-teal-600">
            <a href="../mainpage">Home</a>
          </h1>
        </div>
        <div className="w-16 h-full flex flex-row justify-center items-center font-bold text-3xl tracking-wide pt-2">
          <h1>Test</h1>
          <h1>Blog</h1>
        </div>
        <div className="h-full flex flex-row justify-center items-center font-bold text-xl tracking-wide pt-4">
          <h1 className="text-teal-400 hover:text-teal-600">
            <a href="../profile">Profile</a>
          </h1>
        </div>
      </div>
      <Separator className="opacity-70 sticky top-16" />
    </>
  );
};

export default MainNav;
