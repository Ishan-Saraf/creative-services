import React, { useState } from "react";
import { motion } from "framer-motion";

function AboutSection() {
  const [isImageClicked, setIsImageClicked] = useState(false);

  // Toggle the image glow on click
  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  // Animation variants for Framer Motion when scrolled into view
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="bg-gray-50 py-20 w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          {/* Left Column: Text Section */}
          <motion.div
            className="text-center md:text-left"
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-black mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
              We are a team of passionate professionals who specialize in
              creating innovative and impactful digital experiences. From custom
              web applications to mobile apps, we bring ideas to life with
              precision, creativity, and technical expertise.
            </p>
            <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
              Our mission is to help businesses grow by leveraging cutting-edge
              technologies and design principles. We take pride in building
              user-centric solutions that deliver results and leave a lasting
              impact.
            </p>
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all duration-300">
              Learn More
            </button>
          </motion.div>

          {/* Right Column: Image Section */}
          <motion.div
            className="text-center md:text-right"
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/reputation-management-1-1/66/22-512.png"
              alt="About Us"
              className={`mx-auto md:ml-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                isImageClicked ? "animate-glow" : "animate-float-image"
              }`}
              onClick={handleImageClick}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
