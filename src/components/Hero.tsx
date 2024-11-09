import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-full flex lg:flex-row flex-col">
      <div className="lg:text-9xl text-7xl font-main text-gray-200 lg:pl-12 pl-0 lg:pt-48 pt-16 text-center lg:text-left">
        <h1>Welcome to my</h1>

        <h1 className="text-teal-400 lg:text-[170px] text-9xl lg:mt-0 mt-3">
          <a href="/mainpage">Blog</a>
        </h1>
      </div>
      <div className="lg:pt-40 pt-0 lg:pr-12 pr-0 mt-12 lg:mt-0 flex justify-center items-center">
        <Image
          src="/cursor.png"
          width={700}
          height={700}
          alt="hero"
          className="w-72 lg:w-[700px]"
        />
      </div>
    </div>
  );
};

export default Hero;
