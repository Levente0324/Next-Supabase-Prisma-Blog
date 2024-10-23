import FadeUpAnimation from "@/components/Animations/BottomFadeIn.client";
import FadeDownAnimations from "@/components/Animations/TopFadeIn.client";
import Hero from "@/components/Hero";
import Nav from "@/components/HeroNav";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-purple-600 to-fuchsia-800 flex justify-center w-full h-full overflow-hidden">
      <div className="w-[1200px] h-full">
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
