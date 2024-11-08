import CreateComment from "@/components/CreateComment";
import prisma from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator.client";
import { getCurrentUser } from "@/components/actions/Actions";
import { revalidatePath } from "next/cache";

type likedByType =
  | {
      id: string;
      email: string;
      name: string;
      clerkId: string;
    }[]
  | undefined;

export default async function PostDetails({
  params,
}: {
  params: { postid: string };
}) {
  const user = await getCurrentUser();
  const findusername = async (id: string | undefined) => {
    const res = await prisma.user.findUnique({ where: { id: id } });
    return res?.name;
  };
  const post = await prisma.post.findUnique({
    where: { id: params.postid },
    include: { likedBy: true },
  });
  const comments = await prisma.comment.findMany({
    where: { postId: params.postid },
  });

  //IS LIKED
  const isLiked = (likedBy: likedByType) => {
    let anyad = 0;
    likedBy?.forEach((p) => {
      if (p.id === user?.id) {
        anyad++;
      }
    });
    if (anyad >= 1) {
      return true;
    } else if (anyad == 0) {
      return false;
    }
  };

  //ADD LIKE
  const addLike = async () => {
    "use server";
    let vane = false;

    if (user) {
      for (let i = 0; post?.likedBy && i < post.likedBy.length; i++) {
        if (post?.likedBy[i].id == user.id) {
          vane = true;
        }
      }
    }
    //ADD LIKE VAGY DELETE LIKE
    if (vane == false) {
      await prisma.post.update({
        where: {
          id: params.postid,
        },
        data: {
          likedBy: {
            connect: { id: user?.id },
          },
        },
      });
    } else {
      await prisma.post.update({
        where: {
          id: params.postid,
        },
        data: {
          likedBy: {
            disconnect: { id: user?.id },
          },
        },
      });
    }
    revalidatePath("/mainpage");
  };

  //NUMBER OF LIKES
  const numberOfLikes = async (postid: string | undefined) => {
    const post = await prisma.post.findUnique({
      where: {
        id: postid,
      },
      include: {
        likedBy: true,
      },
    });
    return post?.likedBy.length;
  };

  return (
    <div className="pt-5">
      <div className="w-full h-3">
        <Link href="/mainpage">
          <Image src="/back.png" width={32} height={32} alt="back" />
        </Link>
      </div>
      <div className="text-white border border-white/70 rounded-lg mt-10 w-[600px] h-min flex flex-row px-3 pt-3 pb-2">
        <div>
          <Image src="/user.png" width={48} height={48} alt="usericon" />
        </div>
        <div>
          <div className="flex flex-row gap-2 pl-3">
            <div>
              <h1 className="text-teal-400 font-bold text-lg">
                {findusername(post?.authorId)}
              </h1>
            </div>
            <h1 className="text-white/65 text-lg">·</h1>
            <div className="flex flex-row text-white/65 text-base pt-0.5">
              <p>{post?.createdAt.getFullYear()}.</p>
              <p>
                {post?.createdAt.getMonth()
                  ? post.createdAt.getMonth() + 1
                  : ""}
                .
              </p>
              <p>{post?.createdAt.getDate()}.</p>
            </div>
          </div>
          <div className="pl-3 py-2">
            <h1 className="text-lg">{post?.text}</h1>
          </div>
          <div className="pl-4 pt-2 flex flex-row">
            <form action={addLike}>
              <button type="submit">
                <Image
                  src={
                    isLiked(post?.likedBy) ? "/likedheart.png" : "/heart.png"
                  }
                  width={24}
                  height={24}
                  alt="heart"
                />
              </button>
            </form>
            <h1
              className={`ml-1.5 text-base font-bold ${
                isLiked(post?.likedBy) ? "text-red-500" : "text-white"
              }`}
            >
              {numberOfLikes(post?.id)}
            </h1>
          </div>
        </div>
      </div>
      <Separator className="mt-8" />
      <div className="mt-6">
        <div className="text-white text-xl flex justify-start">
          <h1>Add a comment</h1>
        </div>
        <CreateComment postid={params.postid} />
      </div>
      <div className="mt-8">
        {comments.map((comment, i) => (
          <div
            key={i}
            className="text-white border border-white/70 rounded-xl mt-2 w-[600px] h-min flex flex-row px-3 pt-3 pb-2"
          >
            <div>
              <Image src="/user.png" width={48} height={48} alt="usericon" />
            </div>
            <div>
              <div className="flex flex-row gap-2 pl-3">
                <div>
                  <h1 className="text-teal-400 font-bold">
                    {findusername(comment.creatorId)}
                  </h1>
                </div>
                <h1 className="text-white/65">·</h1>
                <div className="flex flex-row text-white/65">
                  <p>{comment.createdAt.getFullYear()}.</p>
                  <p>{comment.createdAt.getMonth() + 1}.</p>
                  <p>{comment.createdAt.getDate()}.</p>
                </div>
              </div>
              <div className="pl-3">
                <h1 className="text-lg">{comment.text}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
