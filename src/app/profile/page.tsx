import FadeUpAnimation from "@/components/Animations/BottomFadeIn.client";
import FadeinAnimation from "@/components/Animations/SimpleFadeIn.client";
import MainNav from "@/components/MainNav";
import { Separator } from "@/components/ui/separator.client";
import User from "@/components/User";
import Userposts from "@/components/YourPosts";
import prisma from "@/lib";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const clerkUser = await currentUser();
  const user = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser?.id,
    },
  });
  const posts = await prisma.post.findMany({ where: { authorId: user?.id } });

  return (
    <div className="w-[1000px] h-full font-second sticky">
      <MainNav />
      <Separator className="opacity-70" />
      <FadeinAnimation>
        <div>
          <User />
        </div>
        <h1 className="text-white text-3xl pl-12">Your posts:</h1>
      </FadeinAnimation>
      <div>
        <FadeUpAnimation>
          {posts.map((post) => (
            <Userposts
              id={post.id}
              text={post.text}
              created={post.createdAt}
              authorid={post.authorId}
              auhorname={user?.name}
            />
          ))}
        </FadeUpAnimation>
      </div>
    </div>
  );
};

export default page;
