import FadeUpAnimation from "@/components/Animations/BottomFadeIn.client";
import FadeDownAnimations from "@/components/Animations/TopFadeIn.client";
import Hero from "@/components/Hero";
import Nav from "@/components/HeroNav";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  const isLoggedIn = () => {
    if (user) {
      redirect("/mainpage");
    } else {
      return false;
    }
  };

  isLoggedIn();

  return (
    <div className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 flex justify-center w-full h-full overflow-hidden">
      <div className="lg:w-[1200px] w-96 h-full">
        <FadeDownAnimations>
          <Nav />
        </FadeDownAnimations>
        <FadeUpAnimation>
          <Hero />
        </FadeUpAnimation>
      </div>
    </div>
  );
}
