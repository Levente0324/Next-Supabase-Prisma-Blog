import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="text-9xl font-main text-white pl-12 pt-48">
        <h1>Welcome to my</h1>
        <h1 className="text-black/85 text-[170px]">
          <a href="/mainpage">Blog</a>
        </h1>
      </div>
      <div className="pt-40 pr-12">
        <Image
          src="/cursor.png"
          width={700}
          height={700}
          alt="HeroCursor"
          className="opacity-75 -rotate-6"
        />
      </div>
    </div>
  );
};

export default Hero;
