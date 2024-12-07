import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const MenuLinks = [
  { id: 1, name: "About", link: "/#about" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "Contact", link: "/#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for links and menu
  const menuVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <nav className="bg-white border-b border-black w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="#" className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-8" />
            <span className="text-2xl sm:text-3xl font-semibold text-black">
              Creative Services
            </span>
          </a>
        </motion.div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl text-black">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex">
          <motion.ul
            className="flex items-center space-x-6"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <motion.a
                  href={link}
                  className="text-lg font-medium hover:text-primary py-2 transition-all duration-300 text-black"
                  variants={menuVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  {name}
                </motion.a>
              </li>
            ))}
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition-all duration-300">
              Get in Touch
            </button>
          </motion.ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t border-black text-center py-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.ul
            className="space-y-4"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {MenuLinks.map(({ id, name, link }) => (
              <motion.li key={id} variants={menuVariants}>
                <a
                  href={link}
                  className="text-lg font-medium block hover:text-primary py-2 transition-all duration-300 text-black"
                >
                  {name}
                </a>
              </motion.li>
            ))}
            <button
              className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition-all duration-300"
              variants={menuVariants}
            >
              Get in Touch
            </button>
          </motion.ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
