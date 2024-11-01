import Image from "next/image";
import React from "react";

const HomeStrategies = () => {
  const strategies = [
    {
      src: "/saas.png",
      alt: "Saas",
      title: "SAAS",
      description:
        "Software as a Service is the most commonly used cloud computing infrastructure and is becoming a primary way of accessing software resources for organisations.",
    },
    {
      src: "/ai.png",
      alt: "AI",
      title: "AI",
      description:
        "Artificial Intelligence is a series of technologies from machine learning to the processing of natural languages that enables machines to feel, understand, act and learn.",
    },
    {
      src: "/rcs.png",
      alt: "RCS",
      title: "RCS",
      description:
        'Resilient Cyber Sector is a "bend but don\'t break" approach to protecting the enterprise that incorporates cyber security approaches, business continuity and business resilience.',
    },
  ];

  return (
    <div className="container mx-auto py-20 text-center">
      <p className="text-4xl font-medium">
        We are a global experience digital agency.
      </p>
      <p className="text-4xl font-medium">We develop digital strategies.</p>
      <div className="py-20 flex justify-between">
        {strategies?.map((strategy, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <Image
              src={strategy.src}
              alt={strategy.alt}
              width={170}
              height={170}
              objectFit="cover"
            />
            <p className="text-4xl py-4">{strategy.title}</p>
            <p className="text-sm text-center font-light">
              {strategy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStrategies;
