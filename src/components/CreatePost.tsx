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
    <div className="mt-2 flex justify-center items-center flex-col h-56 pl-4">
      <div>
        <h1 className="text-xl text-white">Create a post</h1>
      </div>
      <form action={PostThePost} className="flex flex-col pl-1">
        <div className="mt-2">
          <textarea
            rows={4}
            cols={60}
            name="content"
            placeholder="Content..."
            defaultValue=""
            className="p-2 pl-3 rounded-xl text-l tracking-wide text-white bg-transparent placeholder:text-white border border-white/70 focus:outline-none focus:placeholder:text-black resize-none"
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
