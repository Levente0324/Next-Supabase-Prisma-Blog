import prisma from "@/lib";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const User = async () => {
  const clerkUser = await currentUser();
  const user = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser?.id,
    },
  });

  return (
    <div className="text-white p-6 flex flex-row w-full h-min">
      <div>
        <Image src="/user.png" width={128} height={128} alt="biguser" />
      </div>
      <div className="p-3 flex flex-col items-start gap-2 pl-5">
        <h1 className="text-4xl text-teal-400 font-bold">{user?.name}</h1>
        <h1 className="text-base text-white/70">{user?.email}</h1>
        <div className="flex flex-row gap-2">
          <button className="border border-white/70 rounded w-24 h-8 text-sm mt-1">
            Edit profile
          </button>
          <SignOutButton className="border border-white/70 rounded w-20 h-8 text-sm mt-1"></SignOutButton>
        </div>
      </div>
    </div>
  );
};

export default User;
