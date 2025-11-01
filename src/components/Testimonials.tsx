import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aditya Pandey",
      role: "Co-founder",
      company: "Creative Script",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      content: "Working with Akshat was a game-changer .He turned our raw ideas into videos that truly connect with our audience",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez", 
      role: "Founder & CEO",
      company: "Estu",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content: "Akshat’s edits and motion graphics elevated our campaigns.He understood our brand voice and delivered content that stands out",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Co-founder", 
      company: "Fuzzle",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content: "From concept to final cut, Akshat brought clarity and creativity.Our brand engagement has never been higher.",
      rating: 5
    }
  ];

  const floatingElements = [
    { id: 1, delay: 0, x: [0, 20, 0], y: [0, -15, 0] },
    { id: 2, delay: 1, x: [0, -25, 0], y: [0, 10, 0] },
    { id: 3, delay: 2, x: [0, 15, 0], y: [0, -20, 0] },
    { id: 4, delay: 0.5, x: [0, -20, 0], y: [0, 15, 0] },
    { id: 5, delay: 1.5, x: [0, 30, 0], y: [0, -10, 0] }
  ];

  return (
    <section className="py-24 bg-gray-6969 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${10 + (element.id * 15)}%`,
              top: `${20 + (element.id * 10)}%`
            }}
            animate={{
              x: element.x,
              y: element.y,
            }}
            transition={{
              duration: 4 + element.id,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay
            }}
          />
        ))}
      </div>

      <div className="section-padding container-width relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6 text-blue font-libre-baskerville italic">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with our creative team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card p-8 bg-gray-69  rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote size={32} />
              </div>

              {/* Stars */}

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;