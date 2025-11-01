import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BehindTheCanvas = () => {
  return (
    <section id="about" className="bg-gray-6969 py-2">
      <div className="relative w-3/4 py-12 px-6 bg-gray-800 text-white overflow-hidden rounded-3xl flex flex-col items-center justify-center mx-auto my-32">
        {/* background image */}
        <img
          src="photos/d2146a7a-9a0a-47cc-ad02-bb8da657d943.jpg"
          alt=""
          className="absolute inset-0 w-full h-full rounded-2xl shadow-lg"
          style={{ mixBlendMode: "multiply" }}
        />

        {/* optional dark overlay */}
        <div className="absolute inset-0 "></div>

        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* 3D Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 mx-auto mb-12"
          >
            <div className="relative w-full h-full">
              <div className="flex w-full justify-center mb-10">
                <img src="photos/system.png" alt="" className=" size-24" />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-libre-baskerville italic text-light mb-8"
          >
            Behind the canvas
          </motion.h2>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=" max-w-3xl text-gray-300 mx-auto leading-relaxed mb-12 text-white"
          >
            <p>
              What started as a one-man editing desk has grown into a full-
              fledged creative agency.
            </p>
            <p>
              In the beginning, it was just us—cutting videos late into the
              night, turning raw footage into stories that clicked.
            </p>
            <p>
              Today, we do a lot more than just edit. We help founders grow
              their channels, create high-impact ads, and shoot cinematic
              videos—from luxury real-estate walkthroughs to product launches.
            </p>
            <p>
              Our team blends modern aesthetics with marketing, and compelling
              visuals to make every brand unforgettable.
            </p>
            <p>
              For us, creativity isn't just about pretty frames. It's about
              helping your ideas hit the right audience and spark real growth.
              That's the canvas we paint on every day.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105"
            >
              Let's connect
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheCanvas;
