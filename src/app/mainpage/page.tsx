import FadeUpAnimation from "@/components/Animations/BottomFadeIn.client";
import FadeinAnimation from "@/components/Animations/SimpleFadeIn.client";
import CreatePost from "@/components/CreatePost";
import MainNav from "@/components/MainNav";
import Posts from "@/components/Posts";
import { Separator } from "@/components/ui/separator.client";

const page = () => {
  return (
    <div className="w-[1000px] h-full font-second">
      <MainNav />
      <Separator className="opacity-70" />
      <div>
        <FadeinAnimation>
          <CreatePost />
        </FadeinAnimation>
        <FadeUpAnimation>
          <Posts />
        </FadeUpAnimation>
      </div>
    </div>
  );
};

export default page;
