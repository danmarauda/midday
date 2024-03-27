import Link from "next/link";
import { Card } from "./ui";

export function SectionVision() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-8 right-8 top-4 flex justify-between">
        <span>Vision</span>
        <span className="text-[#878787]">
          <Link href="/">Midday</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <h1 className="text-[122px] font-medium text-center leading-none">
          Our mission is to be the #1 OS for business owners.
        </h1>
      </div>
    </div>
  );
}