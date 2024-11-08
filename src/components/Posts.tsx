import prisma from "@/lib";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { getCurrentUser } from "./actions/Actions";

type likedByType = {
  id: string;
  email: string;
  name: string;
  clerkId: string;
}[];

const Posts = async () => {
  //GET CURRENT USER
  const user = await getCurrentUser();

  //GET POSTS
  const posts = await prisma.post.findMany({ include: { likedBy: true } });

  //FIND USERNAME
  const findusername = async (id: string) => {
    const res = await prisma.user.findUnique({ where: { id: id } });
    return res?.name;
  };

  //ADD LIKE
  const addLike = async (formData: FormData) => {
    "use server";
    const postid = formData.get("postid") as string;
    let vane = false;

    if (user) {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].id == postid) {
          for (let j = 0; j < posts[i].likedBy.length; j++) {
            if (posts[i].likedBy[j].id == user.id) {
              vane = true;
            }
          }
        }
      }
      //ADD LIKE VAGY DELETE LIKE
      if (vane == false) {
        await prisma.post.update({
          where: {
            id: postid,
          },
          data: {
            likedBy: {
              connect: user,
            },
          },
        });
      } else {
        await prisma.post.update({
          where: {
            id: postid,
          },
          data: {
            likedBy: {
              disconnect: user,
            },
          },
        });
      }
    }
    revalidatePath("/mainpage");
  };

  //CHECK IF THE POST IS LIKED
  const isLiked = (likedBy: likedByType) => {
    let anyad = 0;
    likedBy.forEach((p) => {
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

  //NUMBER OF LIKES
  const numberOfLikes = async (postid: string) => {
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
    <div className="w-full h-full flex flex-col items-center pt-3">
      {posts.map((post, i) => (
        <div
          key={i}
          className="text-white border border-white/70 rounded-xl mb-3 w-[600px] h-min flex flex-row px-3 pt-3 pb-2"
        >
          <div>
            <Image src="/user.png" width={48} height={48} alt="usericon" />
          </div>
          <div>
            <div className="flex flex-row gap-2 pl-3">
              <div>
                <h1 className="text-teal-400 font-bold tracking-wide text-base">
                  {findusername(post.authorId)}
                </h1>
              </div>
              <h1 className="text-white/65">·</h1>
              <div className="flex flex-row text-white/65">
                <p>{post.createdAt.getFullYear()}.</p>
                <p>{post.createdAt.getMonth() + 1}.</p>
                <p>{post.createdAt.getDate()}.</p>
              </div>
            </div>
            <div className="pl-3 py-2">
              <h1 className="text-xl track">{post.text}</h1>
            </div>
            <div className="pl-4 pt-2 flex flex-row">
              <form action={addLike}>
                <input
                  name="postid"
                  type="text"
                  value={post.id}
                  defaultValue={post.id}
                  hidden
                />
                <button type="submit">
                  <Image
                    src={
                      isLiked(post.likedBy) ? "/likedheart.png" : "/heart.png"
                    }
                    width={24}
                    height={24}
                    alt="heart"
                  />
                </button>
              </form>
              <h1
                className={`ml-1.5 text-base font-bold ${
                  isLiked(post.likedBy) ? "text-red-500" : "text-white"
                }`}
              >
                {numberOfLikes(post.id)}
              </h1>
              <Link href={`/mainpage/${post.id}`} className="w-6 h-6 ml-5">
                <Image
                  src="/comment.png"
                  width={24}
                  height={24}
                  alt="comment"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
