import React from "react";
import Image from "next/image";
import Hero2Image from "../../../public/hero2.png";
const Hero2 = () => {
  return (
    <section className="py-20 px-10">
      <div className=" mb-10">
        <div>
          <h1 className=" text-center font-black text-4xl text-primary">
            Get Unlimited access to African <br />
            movies
          </h1>
        </div>

        <div className="image-row py-16 flex  justify-between mx-auto">
          <div className="div">
            <Image src={Hero2Image} unoptimized alt="hero-image" />
          </div>

          <div className="div">
            <Image src={Hero2Image} unoptimized alt="hero-image" />
          </div>
          <div className="div">
            <Image src={Hero2Image} unoptimized alt="hero-image" />
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl text-primary">Discover the Best Entertainment</h2>
      </div>
    </section>
  );
};

export default Hero2;
