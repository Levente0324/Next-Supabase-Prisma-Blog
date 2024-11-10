import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { getCurrentUser } from "./actions/Actions";
import { EditButtonShad } from "./EditButtonShad.client";
import { Button } from "./ui/button";

const User = async () => {
  const user = await getCurrentUser();

  return (
    <div className="text-white p-6 flex flex-row w-full h-min">
      <div>
        <Image src="/user.png" width={128} height={128} alt="biguser" />
      </div>
      <div className="p-3 flex flex-col items-start gap-2 pl-5">
        <h1 className="text-4xl text-teal-400 font-bold">{user?.name}</h1>
        <h1 className="text-base text-white/70">{user?.email}</h1>
        <div className="flex flex-row gap-2">
          <EditButtonShad id={user?.id} name={user?.name} />
          <SignOutButton>
            <Button className="bg-transparent border border-white/70 rounded w-20 h-8 text-sm mt-1 hover:text-teal-400 hover:bg-transparent">
              Sign out
            </Button>
          </SignOutButton>
        </div>
      </div>
    </div>
  );
};

export default User;
