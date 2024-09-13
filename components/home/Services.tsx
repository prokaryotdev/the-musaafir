
import React from 'react';

const services = [
  {
    title: "Personalized Consultation",
    description: "We offer one-on-one advice to help you plan your move, from picking a country to organizing your relocation.",
    emoji: "🗺️"
  },
  {
    title: "Visa and Immigration Help",
    description: "We assist with visa applications and immigration procedures to make your move hassle-free.",
    emoji: "🛂"
  },
  {
    title: "Relocation Planning",
    description: "We help you with practical details like finding a home and adjusting to your new environment.",
    emoji: "🏠"
  },
  {
    title: "Cultural Orientation",
    description: "Learn about your new culture with our easy-to-understand tips and guidance for a smooth transition.",
    emoji: "🌍"
  },
  {
    title: "Community Connection",
    description: "We connect you with local groups and resources to help you build a new support network.",
    emoji: "🤝"
  },
  {
    title: "Ongoing Support",
    description: "Even after you move, we're here to help with any questions or issues that come up.",
    emoji: "🔄"
  }
];

const Services = () => {
  return (

      <div className="mx-auto max-w-[1100px] px-4 sm:px-8 mb-10 sm:mb-20">
        <div className="mb-14 sm:text-center">
          <span className="py-1 px-4 bg-indigo-100 rounded-[12px] text-xs font-bold text-indigo-600">
          OUR SERVICES
          </span>
          
          <h2 className=" text-3xl sm:text-5xl sm:text-center font-bold text-gray-900 py-4">
          Start Your Hijrah Journey Today
          </h2>
          <p className="text-lg font-normal text-gray-600 max-w-md md:max-w-2xl mx-auto">
            Ready to start your Hijrah? Here&#39;s what we offer to support your journey
          </p>
        </div>
        <div className="flex justify-center  gap-5 flex-wrap sm:flex-row  sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full rounded-[8px] border p-6 max-md:max-w-sm max-md:mx-auto md:w-[320px]"
            >
              <div
                className="bg-neutral-100 rounded-[4px] p-2  flex justify-center items-center mb-5 size-14 "
              >
                <span className="text-3xl">
                  {service.emoji}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 capitalize">
                {service.title}
              </h4>
              <p className=" font-normal text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Services;
