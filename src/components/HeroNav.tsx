import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="lg:mx-4 mx-auto mt-4 lg:px-6 px-2 bg-black/85 text-gray-200 rounded-2xl lg:h-16 h-12 flex justify-between items-center">
      <div className="flex content-center font-second text-teal-400 lg:text-lg text-sm font-bold lg:tracking-wide tracking-normal">
        <SignedOut>
          <SignUpButton>
            <button className="hover:text-white">Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="flex flex-row items-center">
        <h1 className="font-main text-gray-200 lg:text-4xl text-xl">
          <a href="/">Test</a>
        </h1>
        <h1 className="font-main text-teal-400 lg:text-4xl text-xl">
          <a href="/">Blog</a>
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/Levente0324/Next-Supabase-Prisma-Blog.git"
          target="_blank"
        >
          <Image
            src="/github.png"
            className="w-6 lg:w-10"
            width={40}
            height={40}
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
