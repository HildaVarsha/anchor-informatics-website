import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopMenuBar = () => {
  return (
    <div className="border-b border-slate-50">
      <div className="container mx-auto flex items-center justify-between py-6">
        <Image
          src={"/logo.png"}
          alt="Anchor Informatics"
          width={250}
          height={86}
          objectFit="cover"
        />
        <div className="flex items-center gap-4">
          <Link href={"/"} className="text-sm font-semibold">
            Home
          </Link>
          <Link href={"/"} className="text-sm font-semibold">
            Services
          </Link>
          <Link href={"/"} className="text-sm font-semibold">
            About Us
          </Link>
          <Link href={"/"} className="text-sm font-semibold">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopMenuBar;
