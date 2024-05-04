import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <main className="bg-gray-900 text-gray-50 min-h-screen flex flex-col relative z-0 bg-gradient-polka-dark bg-[length:34px_34px]">
      <div className="flex flex-col xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12 w-full gap-4 mt-24">
        <h1 className="text-4xl font-display">About Nasium</h1>
        <p className="text-sm leading-loose opacity-75 max-w-lg">
          A solo founded passion project turned App for optimizing personal
          fitness journey. If you&apos;d like to make a suggestion or get involved,
          write me{" "}
          <Link
            className="text-indigo-400 underline font-semibold"
            target="_blank"
            href="https://twitter.com/dorletz"
          >
            @dorletz
          </Link>.
          <br />
          <br />
          <span className="italic ">&quot;You do not rise to the level of your goals. You fall to the level of your systems.&quot; - James Clear</span>
        </p>
      </div>
    </main>
  );
};

export default About;
