import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white w-full border-t border-black text-black py-12 mt-20">
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Creative Services</h3>
            <p className="text-lg mb-4">
              We help businesses build exceptional experiences with high-quality
              apps and services.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-black hover:text-primary transition-colors duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-primary transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-primary transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-primary transition-colors duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/#about"
                  className="text-lg text-black hover:text-primary transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/#services"
                  className="text-lg text-black hover:text-primary transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/#contact"
                  className="text-lg text-black hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/terms"
                  className="text-lg text-black hover:text-primary transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/privacy"
                  className="text-lg text-black hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <span className="text-lg">Phone: </span>
                <span className="text-lg">+1 (123) 456-7890</span>
              </li>
              <li className="mb-2">
                <span className="text-lg">Email: </span>
                <span className="text-lg">contact@creativeservices.com</span>
              </li>
              <li className="mb-2">
                <span className="text-lg">Address: </span>
                <span className="text-lg">
                  123 Creative Street, City, Country
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-black pt-6 text-center">
          <p className="text-lg text-black">
            &copy; {new Date().getFullYear()} Creative Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
