import prisma from "@/lib";
import Image from "next/image";

const Posts = async () => {
  const finduser = async (id: string) => {
    const res = await prisma.user.findUnique({ where: { id: id } });
    return res?.name;
  };
  const posts = await prisma.post.findMany();

  return (
    <div className="w-full h-full flex flex-col items-center pt-3">
      {posts.map((post) => (
        <div className="text-white border border-white/70 rounded-xl mt-2 w-[600px] h-min flex flex-row px-3 pt-3 pb-2">
          <div>
            <Image src="/user.png" width={48} height={48} alt="usericon" />
          </div>
          <div>
            <div className="flex flex-row gap-2 pl-3">
              <div>
                <h1 className="text-teal-400 font-bold">
                  {finduser(post.authorId)}
                </h1>
              </div>
              <h1 className="text-white/65">·</h1>
              <div className="flex flex-row text-white/65">
                <p>{post.createdAt.getFullYear()}.</p>
                <p>{post.createdAt.getMonth() + 1}.</p>
                <p>{post.createdAt.getDate()}.</p>
              </div>
            </div>
            <div className="pl-3">
              <h1 className="text-lg">{post.text}</h1>
            </div>
            <div className="pl-4 pt-2">
              <button>
                <Image src="/heart.png" width={24} height={24} alt="heart" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
