import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo-light.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo-light.png" alt="logo" width={50} height={50} /> */}
      <Image src={logo} alt="logo" className="h-16 w-16" quality={50} />
      <h2 className="text-xl font-semibold text-primary-100">Tranquil Peaks</h2>
    </Link>
  );
}

export default Logo;
