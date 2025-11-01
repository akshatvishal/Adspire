import { Description } from "@radix-ui/react-toast";

export default function ContactSection() {
  const contacts = [
    {
      label: 'Akshat Vishal',
      value: 'linkedin.com/in/akshatvishal',
      href: 'https://linkedin.com/in/akshatvishal',
      img: '/photos/me.jpg',
      description:
        'Video Editor & Motion Graphics Designer. Skilled in crafting engaging visuals and shooting creative ad campaigns that leave impact.',
    },
    {
      label: 'Dev Vishwakarma',
      value: 'linkedin.com/in/devvishwakarma',
      href: 'https://linkedin.com/in/devvishwakarma',
      img: '/photos/dev photo.jpg',
      description:
        'Videographer & Cinematographer with hands-on experience in directing and producing short films, bringing creative storytelling to life through the lens.',
    },
    {
      label: 'Abhay Singh',
      value: 'linkedin.com/in/abhaysingh',
      href: 'https://linkedin.com/in/abhaysingh',
      img: '/photos/abhay_photo.jpg',
      description:
        'Video Editor & Cinematographer specializing in cinematic edits and storytelling. Skilled in video production and crafting visuals that connect with audiences.',
    },
  ];

  return (
    <section className="bg-gray-100 py-20 flex flex-col items-center text-center px-4">
      {/* Icon */}
      <div className="mb-6">
        <div className="flex w-full justify-center mb-10">
          <img src="/photos/telephone.png" alt="telephone icon" className="w-12 h-12" />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue mb-2 font-libre-baskerville italic">
        Ready to build something amazing?
      </h2>
      <p className="text-gray-600 mb-10">We Would Love To Connect With You!</p>

      {/* Contact Cards (responsive grid) */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-6xl items-stretch px-4">
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
              <span className="font-semibold text-lg text-gray-800 mb-3">{item.label}</span>
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
