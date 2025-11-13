import React from "react";
import Image from "next/image";

// Placeholder images
const IMAGE_ENVIRONMENT = "/about/about-social-img1.png";
const IMAGE_COMMUNITY = "/about/about-social-img2.png";
const IMAGE_ETHICS = "/about/about-social-img3.png";

const highlightColor = "text-[#E84E33]"; // Highlight color

const cards = [
  {
    image: IMAGE_ENVIRONMENT,
    alt: "Environmental sustainability with eco icons",
    title: "Embracing sustainability in Information and Communication Technology",
    description:
      "We prioritize minimizing our environmental impact through responsible sourcing, energy-efficient products, and promoting a circular economy by recycling and managing e-waste.",
  },
  {
    image: IMAGE_COMMUNITY,
    alt: "Group of diverse, happy people",
    title: "Empowering Communities and Fostering Inclusivity",
    description:
      "Our commitment to social responsibility includes supporting projects that provide education, training, and resources to underprivileged communities, and fostering a diverse and inclusive workplace that values equal opportunities.",
  },
  {
    image: IMAGE_ETHICS,
    alt: "Business people with a glowing globe representing ethical practices",
    title: "Leading the Way: Ethical Practices and Industry Collaboration",
    description:
      "As a responsible ICT supplier, we demonstrate ethical business practices, transparency, and actively collaborate with partners to address global social and environmental challenges.",
  },
];

const SocialResponsibilitySection = () => {
  return (
    <section className="bg-white ">
      <div className="py-6 md:px-[7%] lg:px-[5.2%] xl:px-[5.2%] 2xl:px-[5.2%] px-[7%]">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Approach to Social <span className={highlightColor}>Responsibility</span>
            <br />
            and <span className={highlightColor}>Sustainability</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-auto">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                //   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-base flex-grow">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibilitySection;
