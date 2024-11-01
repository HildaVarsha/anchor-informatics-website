import Image from "next/image";
import React from "react";
import { Button } from "../ui";

const HomeStrategyProcess = () => {
  return (
    <div className="py-20 bg-[#1F2732] relative">
      <div className="container mx-auto">
        <div className="flex items-center  gap-8 relative">
          <p className="text-amber-500 font-bold text-8xl">01</p>
          <p className="text-white font-semibold text-4xl">Strategy</p>
          <Image
            src={"/downLeft.png"}
            alt="Strategy"
            width={40}
            height={24}
            objectFit="cover"
            className="absolute top-24 left-64 h-44"
          />
          <div className="p-8 border border-amber-500 border-r-0 rounded-r-none bg-gray-700 rounded-3xl flex items-center gap-4 w-full">
            <Image
              src={"/strategy.png"}
              alt="Strategy"
              width={140}
              height={140}
              objectFit="cover"
            />
            <p className="text-white  text-xl ">
              We begin our journey by analyzing your business objectives and
              end-user requirements to create a draft of Low-Fidelity
              Wireframes.{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center relative  gap-8 my-32">
          <div className="p-6 border border-pink-500 border-l-0 rounded-l-none bg-gray-700 rounded-3xl flex items-center gap-4">
            <p className="text-white text-xl text-end">
              We begin our journey by analyzing your business objectives and
              end-user requirements to create a draft of Low-Fidelity
              Wireframes.{" "}
            </p>
            <Image
              src={"/design.png"}
              alt="Strategy"
              width={140}
              height={140}
              objectFit="cover"
            />
          </div>
          <Image
            src={"/downRight.png"}
            alt="Strategy"
            width={40}
            height={24}
            objectFit="cover"
            className="absolute top-24 right-60 h-44"
          />

          <p className="text-white font-semibold text-4xl">Design</p>

          <p className="text-pink-500 font-bold text-8xl">02</p>
        </div>
        <div className="flex items-center  gap-8 relative my-32">
          <p className="text-teal-500 font-bold text-8xl">03</p>
          <p className="text-white font-semibold text-4xl">Develop</p>
          <Image
            src={"/downLeft.png"}
            alt="Strategy"
            width={40}
            height={24}
            objectFit="cover"
            className="absolute top-24 left-64 h-44"
          />
          <div className="p-8 border border-teal-500 border-r-0 rounded-r-none bg-gray-700 rounded-3xl flex items-center gap-4 w-full">
            <Image
              src={"/develop.png"}
              alt="Strategy"
              width={140}
              height={140}
              objectFit="cover"
            />
            <p className="text-white  text-xl ">
              We use Agile methodology to collaborate and iterate on the product
              design and development until we achieve flawless UX/UI
              functionality and experience.
            </p>
          </div>
        </div>
        <div className="flex items-center  gap-8 mt-32">
          <div className="p-6 border border-green-500 border-l-0 rounded-l-none bg-gray-700 rounded-3xl flex items-center gap-4">
            <p className="text-white text-xl text-end">
              We provide maintenance and support if required. We monitor the
              performance of your website/ application, fix bugs, and develop
              new functionalities.
            </p>
            <Image
              src={"/support.png"}
              alt="Strategy"
              width={140}
              height={140}
              objectFit="cover"
            />
          </div>

          <p className="text-white font-semibold text-4xl">Support</p>

          <p className="text-green-500 font-bold text-8xl">04</p>
        </div>
        <div className="absolute -bottom-6 left-[50%]">
          <Button className="rounded-full text-blue-500 bg-white h-12">
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeStrategyProcess;
