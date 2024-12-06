import React from "react";

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20 w-full"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-black mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are a team of passionate professionals who specialize in
              creating innovative and impactful digital experiences. From custom
              web applications to mobile apps, we bring ideas to life with
              precision, creativity, and technical expertise.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to help businesses grow by leveraging cutting-edge
              technologies and design principles. We take pride in building
              user-centric solutions that deliver results and leave a lasting
              impact.
            </p>
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Right Column: Image Section */}
          <div className="text-center md:text-right">
            <img
              src="https://cdn4.iconfinder.com/data/icons/reputation-management-1-1/66/22-512.png"
              alt="About Us"
              className="mx-auto md:ml-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
