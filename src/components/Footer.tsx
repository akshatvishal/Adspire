import { motion } from "framer-motion";
import { Instagram, Linkedin, ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/akshat_vishal?utm_source=ig_web_button_share_sheet",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/akshat-vishal-64238b240/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=akshatvishal05@gmail.com", label: "Email" },
  ];

  const footerLinks = {
    Services: [
      "Brand Identity",
      "Web Development",
      "Digital Marketing",
      "Creative Production",
    ],
    Company: ["About Us", "Our Team"],
  };

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-serif italic mb-4">Adspire</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  We're a creative agency passionate about crafting exceptional
                  digital experiences that drive results and inspire audiences.
                </p>
              </div>

              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-3 bg-white/10 rounded-lg hover:bg-primary transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold text-white mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Adspire. All rights reserved.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
          <p className="text-gray-400 text-sm mt-4">📞 +91 9140512336</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
