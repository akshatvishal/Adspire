import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ServiceBadge {
  id: string;
  text: string;
  position: {
    x: string;
    y: string;
  };
  delay: number;
}

const AnimatedServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const services: ServiceBadge[] = [
    {
      id: "1",
      text: "Product Design",
      position: { x: "50%", y: "10%" },
      delay: 0.1
    },
    {
      id: "2", 
      text: "User Experience Design",
      position: { x: "85%", y: "25%" },
      delay: 0.2
    },
    {
      id: "3",
      text: "User Interface Design", 
      position: { x: "90%", y: "55%" },
      delay: 0.3
    },
    {
      id: "4",
      text: "Visual Design",
      position: { x: "75%", y: "85%" },
      delay: 0.4
    },
    {
      id: "5",
      text: "Branding",
      position: { x: "80%", y: "70%" },
      delay: 0.5
    },
    {
      id: "6",
      text: "Framer Development",
      position: { x: "35%", y: "95%" },
      delay: 0.6
    },
    {
      id: "7",
      text: "Pitch Deck Design",
      position: { x: "5%", y: "80%" },
      delay: 0.7
    },
    {
      id: "8",
      text: "User Research",
      position: { x: "15%", y: "45%" },
      delay: 0.8
    },
    {
      id: "9",
      text: "Design Systems",
      position: { x: "20%", y: "20%" },
      delay: 0.9
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/30"
    >
      {/* Central Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Icon/Logo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center"
        >
          <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-md"></div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight"
        >
          What we bring to{" "}
          <span className="italic text-primary">the table</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Digital experiences that engage users and help your startup stand out from day one
        </motion.p>
      </div>

      {/* Animated Service Badges */}
      {services.map((service) => {
        const badgeScale = useTransform(
          scrollYProgress,
          [0, 0.3 + service.delay * 0.1, 0.8],
          [0, 1, 1]
        );

        const badgeOpacity = useTransform(
          scrollYProgress,
          [0, 0.2 + service.delay * 0.1, 0.8],
          [0, 1, 1]
        );

        const badgeX = useTransform(
          scrollYProgress,
          [0, 0.3 + service.delay * 0.1, 0.8],
          ["50%", service.position.x, service.position.x]
        );

        const badgeY = useTransform(
          scrollYProgress,
          [0, 0.3 + service.delay * 0.1, 0.8],
          ["50%", service.position.y, service.position.y]
        );

        return (
          <motion.div
            key={service.id}
            className="absolute"
            style={{
              scale: badgeScale,
              opacity: badgeOpacity,
              x: badgeX,
              y: badgeY,
              translateX: "-50%",
              translateY: "-50%"
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
              }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-primary font-medium whitespace-nowrap cursor-pointer hover:bg-primary/20 transition-colors duration-300"
            >
              {service.text}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-accent rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default AnimatedServices;