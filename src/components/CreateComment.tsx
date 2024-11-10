import prisma from "@/lib";
import { revalidatePath } from "next/cache";
import React from "react";
import { getCurrentUser } from "./actions/Actions";

type paramPostId = {
  postid: string;
};

const CreateComment = async (params: paramPostId) => {
  const user = await getCurrentUser();

  const addComment = async (formData: FormData) => {
    "use server";
    const content = formData.get("content") as string;
    await prisma.comment.create({
      data: {
        text: content,
        creator: { connect: { id: user?.id } },
        post: { connect: { id: params.postid } },
      },
    });
    revalidatePath(`/mainpage/${params.postid}`);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col h-32">
      <form action={addComment} className="flex flex-col">
        <div>
          <textarea
            rows={2}
            cols={75}
            name="content"
            placeholder="Comment..."
            defaultValue=""
            className="p-2 pl-3 rounded-xl text-l tracking-wide text-white bg-transparent placeholder:text-white border border-white/70 focus:outline-none focus:placeholder:text-transparent resize-none shadow-[0px_0px_15px_1px_rgba(255,255,255,0.1)]"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="h-8 p-1 rounded-md text-xl text-white font-bold bg-transparent hover:text-white/80"
            >
              COMMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
