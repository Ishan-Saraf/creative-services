import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build responsive and user-friendly websites using the latest technologies, ensuring a seamless experience across all devices.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Our team develops custom mobile apps for both iOS and Android platforms, focusing on performance, usability, and design.",
    icon: "📱",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We create visually appealing and intuitive designs that engage users and provide an exceptional experience.",
    icon: "🎨",
  },
];

function ServicesSection() {
  return (
    <section id="services" className=" py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700">
            We offer a range of creative and technical services to help your
            business grow. From website design to mobile app development, we
            have the expertise to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl text-primary mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold text-black mb-4">
                {title}
              </h3>
              <p className="text-lg text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
