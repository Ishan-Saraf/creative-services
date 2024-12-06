import React from "react";
import Banner from "../../assets/Banner.png";

function HeroSection() {
  return (
    <main className="bg-white h-screen w-100 pt-20">
      <section className="flex items-center justify-center h-full md:px-16">
        <div className="grid grid-cols-1 items-center gap-8 text-black md:grid-cols-2 w-full">
          {/* Left Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center md:items-start md:text-left"
          >
            <h1 className="text-4xl font-semibold">
              We Build Apps That Get Trending On Appworld
            </h1>
            <p className="text-lg max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
              necessitatibus?
            </p>
            <div className="space-x-4 mt-6">
              <button className="rounded-md border-2 border-primary bg-primary px-6 py-3 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Get Started
              </button>
              <button className="border-2 rounded-md border-black px-6 py-3 text-sm text-black transition-colors duration-300 hover:bg-black hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section with Image */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img
              src={Banner}
              alt="Banner"
              className="hover:drop-shadow-md w-full max-w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
