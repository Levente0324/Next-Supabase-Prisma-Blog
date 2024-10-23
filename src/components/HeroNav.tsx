import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <div className="mx-4 mt-4 px-6 bg-black/85 text-white rounded-2xl h-16 flex justify-between items-center">
      <div className="flex content-center font-second text-blue-400 text-base pt-1">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="flex flex-row ">
        <h1 className="font-main text-white text-4xl">
          <a href="/">Test</a>
        </h1>
        <h1 className="font-main text-blue-400 text-4xl">
          <a href="/">Blog</a>
        </h1>
      </div>
      <div className="flex ">
        <div className="relative content-center">
          <input
            type=""
            className="w-24 h-full bg-transparent placeholder:text-white placeholder:font-second text-blue-400 text-sm pl-10 pt-1.5 focus:outline-none font-second"
            placeholder="Search..."
          />
          <button
            className="absolute left-1 -top-0.5 rounded bg-transparent p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
