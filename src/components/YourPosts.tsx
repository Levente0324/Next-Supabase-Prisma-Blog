import prisma from "@/lib";
import { revalidatePath } from "next/cache";
import Image from "next/image";

type Posttype = {
  id: string;
  text: string;
  created: Date;
  authorid: string;
  auhorname: string | undefined;
};

const Userposts = (props: Posttype) => {
  const deletePost = async () => {
    "use server";
    await prisma.post.delete({
      where: {
        id: props.id,
      },
    });
    revalidatePath("/profile");
  };

  return (
    <div className="w-full h-full flex flex-col items-center pt-3">
      <div className="text-white border rounded-xl border-white/70 mt-2 w-[600px] h-min flex flex-row px-3 pt-3 pb-2">
        <div>
          <Image src="/user.png" width={48} height={48} alt="usericon" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 pl-3">
            <div>
              <h1 className="flex flex-row justify-center items-center gap-1 text-teal-400 font-bold">
                {props.auhorname} <p className="text-white/65 text-sm">(You)</p>
              </h1>
            </div>
            <h1 className="text-white/65">·</h1>
            <div className="flex flex-row text-white/65">
              <p>{props.created.getFullYear()}.</p>
              <p>{props.created.getMonth() + 1}.</p>
              <p>{props.created.getDate()}.</p>
            </div>
          </div>
          <div className="pl-3">
            <h1 className="text-lg">{props.text}</h1>
          </div>
          <div className="pl-5 pt-2 pb-1 flex flex-row gap-5">
            <form action={deletePost}>
              <button type="submit">
                <Image src="/trash.png" width={24} height={24} alt="heart" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Userposts;
