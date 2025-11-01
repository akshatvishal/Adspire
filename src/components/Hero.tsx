import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-6969">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-coral-muted rounded-full opacity-40"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="section-padding container-width text-center pb-20">

        <motion.h1
          className="heading-xl text-center mb-12 font-libre-baskerville italic text-blue"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creative Ad &<br />
          <span className="text-blue font-libre-baskerville italic">Digital Marketing</span>
          <br />
          Agency
        </motion.h1>

        

       
          <motion.a
  href="#work"
  className="btn-coral text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
  whileHover={{ scale: 1.05, y: -2 }}
>
  Our Work
  <ArrowRight size={20} />
</motion.a>
      </div>
    </section>
  );
};

export default Hero;
