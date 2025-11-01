import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Classence App Design",
      category: "UI/UX Design",
      description: "Intuitive fitness app with smart tracking",
      image: "photos/Screenshot 2025-09-15 194618.png",
      color: "from-pink-500 to-rose-600",
      link: "https://www.classence.me/",
    },
    {
      id: 2,
      title: "WebGrow Event Platform",
      category: "Web Development",
      description: "Modern shopping experience with seamless UX",
      image: "photos/Screenshot 2025-09-15 194549.png",
      color: "from-green-500 to-teal-600",
      link: "https://web-grow.vercel.app/",
    },
    {
      id: 3,
      title: "Hotel Crew Campaign",
      category: "Web Development",
      description: "Viral marketing campaign for global brand",
      image: "photos/Screenshot 2025-09-15 195541.png",
      color: "from-orange-500 to-red-600",
      link: "https://hotel-crew-frontend.vercel.app/",
      isVideo: true,
    },
    {
      id: 4,
      title: "Workify Website Redesign",
      category: "Web Development",
      description: "Complete visual identity for a tech startup",
      image: "photos/image.png",
      color: "from-blue-500 to-purple-600",
      link: "https://workify-eight.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="work" className="py-12 bg-gray-6969">
      <div className="flex w-full justify-center mb-10">
        <img src="photos/telescope.png" alt="" className="" />
      </div>
      <div className="section-padding container-width">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6 font-libre-baskerville italic text-blue max-w-sm mx-auto">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Discover some of our recent projects that showcase our passion for
            exceptional design and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full p-4 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block" // ensures the anchor behaves like a block element
            >
              <motion.div
                variants={itemVariants}
                className="group relative bg-card rounded-2xl p-4 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 bg-gray-69"
                whileHover={{ y: -8 }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-sm transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      className="bg-white/20 p-4 rounded-full backdrop-blur-sm"
                    >
                      {item.isVideo ? (
                        <Play size={24} className="text-white" />
                      ) : (
                        <ExternalLink size={24} className="text-white" />
                      )}
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm text-xs px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="heading-md mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
