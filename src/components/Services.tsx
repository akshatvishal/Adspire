import { motion } from "framer-motion";

const services = [
  "Video Production",
  "Web Development",
  "Digital Marketing",
  "Editing & Post-Production",
  "3D Animation",
  "Framer Development",
  "Brand Strategy",
  "Content Creation",
];

// Random rotate for pills
const randomRotate = () => (Math.random() - 0.5) * 20;

// Desktop scattered positions
const pillPositions = [
  { top: "32%", left: "15%", rotate: randomRotate() },
  { top: "20%", left: "40%", rotate: randomRotate() },
  { top: "30%", right: "15%", rotate: randomRotate() },
  { bottom: "40%", left: "8%", rotate: randomRotate() },
  { bottom: "20%", left: "25%", rotate: randomRotate() },
  { bottom: "19%", right: "39%", rotate: randomRotate() },
  { bottom: "45%", right: "10%", rotate: randomRotate() },
  { bottom: "27%", right: "20%", rotate: randomRotate() },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-42 bg-gray-6969 overflow-hidden">
      {/* ===== Center Content ===== */}
      <div className="relative p-24 z-10 text-center max-w-2xl mx-auto px-4">
        <div className="flex w-full justify-center mb-10">
        <img src="photos/ufo.png" alt="" className="" />
      </div>
        <motion.h3
          className="heading-lg mb-6 font-libre-baskerville italic text-blue max-w-sm mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What we Bring to the table
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our comprehensive suite of services is designed to elevate your brand
          and drive results across every digital touchpoint.
        </motion.p>
      </div>

      {/* ===== Pills ===== */}
      {/* Mobile stacked pills */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-4 md:hidden">
        {services.map((title, i) => (
          <motion.span
            key={title}
            className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium shadow-md text-center w-64"
            style={{ rotate: randomRotate() }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.span>
        ))}
      </div>

      {/* Desktop scattered pills */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
  {services.map((title, i) => (
    <motion.span
      key={title}
      className="absolute px-6 py-2 rounded-full bg-primary/10 text-primary font-medium backdrop-blur-sm shadow-md"
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: pillPositions[i].rotate,
      }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      style={{
        // Pull the pills slightly away from the center
        top: pillPositions[i].top
          ? `calc(${pillPositions[i].top} - 10%)`
          : undefined,
        left: pillPositions[i].left
          ? `calc(${pillPositions[i].left} - 5%)`
          : undefined,
        right: pillPositions[i].right
          ? `calc(${pillPositions[i].right} - 5%)`
          : undefined,
        bottom: pillPositions[i].bottom
          ? `calc(${pillPositions[i].bottom} - 10%)`
          : undefined,
      }}
    >
      {title}
    </motion.span>
  ))}
</div>
    </section>
  );
}
