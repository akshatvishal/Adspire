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
    <section className="bg-gray-100 py-12 sm:py-16 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
      {/* Icon */}
      <div className="mb-6">
        <div className="flex justify-center mb-6">
          <img
            src="/photos/telephone.png"
            alt="telephone icon"
            className="w-10 h-10 sm:w-12 sm:h-12"
            loading="lazy"
          />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2 font-libre-baskerville italic">
        Ready to build something amazing?
      </h2>
      <p className="text-gray-600 mb-10 max-w-xl">We would love to connect with you!</p>

      {/* Contact Cards - responsive grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 px-2 sm:px-0">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label={`Open ${item.label} LinkedIn profile`}
            >
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col items-center text-center h-full hover:shadow-md transition-transform transform hover:-translate-y-1">
                <img
                  src={item.img}
                  alt={`${item.label} photo`}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-4 sm:mb-6"
                  loading="lazy"
                />

                <span className="font-semibold text-lg text-gray-800 mb-2">
                  {item.label}
                </span>

                <p className="text-sm text-gray-600 leading-relaxed max-w-[18rem]">
                  {item.description}
                </p>

                {/* small link under card on larger screens */}
                <span className="mt-4 text-xs text-blue-600 break-words hidden sm:inline-block">
                  {item.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* mobile stacked CTA */}
        <div className="mt-8 flex flex-col sm:hidden items-center gap-3">
          {contacts.map((c) => (
            <a
              key={c.label + "-cta"}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 underline"
            >
              {c.value}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
