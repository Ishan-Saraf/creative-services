import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending an email, saving the data)
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            Have any questions or want to discuss your next project? Fill out
            the form below, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Section Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <div className="flex flex-col items-center justify-center text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              We're here to help you!
            </h3>
            <p className="flex items-center text-lg text-gray-700">
              Whether you're looking for a new project or have some questions
              about our services, feel free to get in touch with us using the
              form on the right. We look forward to connecting with you soon!
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/80 transition-colors duration-300 focus:ring-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
