import React from "react";

const JourneyTimeline = () => {
  const milestones = [
    {
      year: "2021",
      title: "Resilience and Collaboration",
      description:
        "Navigating unprecedented challenges, our teams united to create frameworks that ensured continuity and fostered innovation in the face of adversity.",
      image: "/about/about-journey-img1.png",
      position: "right",
    },
    {
      year: "2022",
      title: "Globalization and Localization",
      description:
        "We took our services global while remaining locally relevant, expanding our reach while deepening our understanding of diverse markets and customer needs.",
      image: "/about/about-journey-img2.png",
      position: "left",
    },
    {
      year: "2023",
      title: "Enhanced Customer Value",
      description:
        "Launched innovative programs focused on delivering measurable value, transforming customer relationships through data-driven insights and personalized experiences.",
      image: "/about/about-journey-img3.png",
      position: "right",
    },
    {
      year: "2024",
      title: "Digital Transformation Partnership",
      description:
        "Became strategic partners in our clients digital journeys, leveraging cutting-edge technology and industry expertise to accelerate transformation at scale.",
      image: "/about/about-journey-img4.png",
      position: "left",
    },
    {
      year: "2025",
      title: "Product Diversification for Client Success",
      description:
        "Expanding our portfolio with innovative AI-driven solutions, enabling customers to achieve unprecedented growth and operational excellence.",
      image: "/about/about-journey-img5.png",
      position: "right",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Journey Of Excellence
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl">
            Shaping <span className="text-orange-500">The Future</span> Of
            Customer Success
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2"></div>

          {/* Mobile left line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800"></div>

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="relative mb-16 sm:mb-24 last:mb-0"
            >
              {/* Mobile Layout */}
              <div className="md:hidden flex gap-6">
                {/* Year indicator */}
                <div className="flex-shrink-0 w-12 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-orange-500 border-4 border-black z-10"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-gray-900 border border-orange-500 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {milestone.description}
                    </p>
                    <div className="text-6xl font-bold text-gray-800">
                      {milestone.year}
                    </div>
                  </div>
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-48 object-cover rounded-lg border-2 border-orange-500"
                  />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center gap-8">
                {milestone.position === "right" ? (
                  <>
                    {/* Left side - empty space */}
                    <div className="flex-1"></div>

                    {/* Center indicator */}
                    <div className="flex-shrink-0 w-6 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-orange-500 border-4 border-black z-10"></div>
                    </div>

                    {/* Right side - content */}
                    <div className="flex-1 flex items-start gap-6">
                      <div className="flex-1 bg-gray-900 border border-orange-500 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {milestone.description}
                        </p>
                        <div className="text-7xl font-bold text-gray-800">
                          {milestone.year}
                        </div>
                      </div>
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-64 h-48 object-cover rounded-lg border-2 border-orange-500 flex-shrink-0"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left side - content */}
                    <div className="flex-1 flex items-start gap-6 justify-end">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-64 h-48 object-cover rounded-lg border-2 border-orange-500 flex-shrink-0"
                      />
                      <div className="flex-1 bg-gray-900 border border-orange-500 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {milestone.description}
                        </p>
                        <div className="text-7xl font-bold text-gray-800">
                          {milestone.year}
                        </div>
                      </div>
                    </div>

                    {/* Center indicator */}
                    <div className="flex-shrink-0 w-6 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-orange-500 border-4 border-black z-10"></div>
                    </div>

                    {/* Right side - empty space */}
                    <div className="flex-1"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
