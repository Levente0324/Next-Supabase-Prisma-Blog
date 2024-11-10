import prisma from "@/lib";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "./actions/Actions";

const CreatePost = async () => {
  const user = await getCurrentUser();

  const PostThePost = async (formData: FormData) => {
    "use server";
    const content = formData.get("content") as string;
    await prisma.post.create({
      data: {
        text: content,
        author: { connect: { id: user?.id } },
      },
    });
    revalidatePath("/mainpage");
  };

  return (
    <div className="mt-2 flex justify-center items-center flex-col h-56">
      <div>
        <h1 className="text-xl text-white">Create a post</h1>
      </div>
      <form action={PostThePost} className="flex flex-col">
        <div className="mt-2">
          <textarea
            rows={3}
            cols={57}
            name="content"
            placeholder="Content..."
            defaultValue=""
            className="p-2 pl-3 rounded-xl text-xl tracking-wide text-white bg-transparent placeholder:text-white border border-white/70 focus:outline-none focus:placeholder:text-transparent resize-none shadow-[0px_0px_15px_1px_rgba(255,255,255,0.1)]"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-20 h-8 p-1 rounded-md text-xl text-white font-bold bg-transparent hover:text-white/80"
            >
              POST
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
