import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <main className="bg-gray-900 text-gray-50 min-h-screen flex flex-col relative z-0 bg-gradient-polka-dark bg-[length:34px_34px]">
      <div className="flex flex-col xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12 w-full gap-4 mt-24">
        <h1 className="text-4xl font-display">Pricing Nasium</h1>
        <p className="text-sm leading-loose opacity-75 max-w-lg">
          Nasium is currently completlty free for all of it&apos;s users. This might change in the future.
        </p>
      </div>
    </main>
  );
};

export default Pricing;
