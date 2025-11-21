import { Description } from "@radix-ui/react-toast";

export default function ContactSection() {
  const contacts = [
    {
      label: "Akshat Vishal",
      value: "linkedin.com/in/akshatvishal",
      href: "https://www.linkedin.com/in/akshat-vishal-64238b240/",
      img: "/photos/me.jpg",
      description:
        "Video Editor & Motion Graphics Designer. Skilled in crafting engaging visuals and shooting creative ad campaigns that leave impact.",
    },
    {
      label: "Vansh Bisht",
      value: "linkedin.com/in/vanshbisht20",
      href: "https://www.linkedin.com/in/vanshbisht20/",
      img: "/photos/WhatsApp Image 2025-11-21 at 20.13.34_161c4ddc.jpg",
      description:
        "Cinematographer, Marketing Head, and Multi-discipline Designer blending visuals, branding, and product design to create meaningful experiences.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 flex flex-col items-center text-center px-4">
      {/* Icon */}
      <div className="mb-6">
        <div className="flex w-full mb-10">
          <img
            src="/photos/telephone.png"
            alt="telephone icon"
            className="w-12 h-12"
          />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-libre-baskerville italic">
        Ready to build something amazing?
      </h2>
      <p className="text-gray-600 mb-10">We Would Love To Connect With You!</p>

      {/* Contact Cards */}
      <div className="flex justify-around w-9/12 max-w-6xl items-stretch px-4">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center h-full hover:shadow-md transition-transform transform hover:-translate-y-1">
              <img
                src={item.img}
                alt={item.label}
                className="w-28 h-28 rounded-full object-cover mb-6"
              />
              <span className="font-semibold text-lg text-gray-800 mb-3">
                {item.label}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[18rem]">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
