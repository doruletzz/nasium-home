"use client";

import React, { ReactNode } from "react";
import { Button } from "..";
import { cn } from "@/utils/cn";
import useScrollPosition from "@/hooks/useScrollPosition";
import Link from "next/link";

type Props = {
  // children: ReactNode;
};

const NavbarComponent = ({}: Props) => {
  const { scrollPosition, isScrolling } = useScrollPosition();

  return (
    <div
      style={{
        transform: `translateY(${
          isScrolling && scrollPosition > 320 ? -100 : -0
        }%`,
      }}
      className={cn(
        scrollPosition > 60 ? " border-b border-gray-800" : "",
        "fixed z-10 bg-gray-900 bg-opacity-10 transition-transform duration-700 ease-in-out-expo backdrop-blur-md top-0 left-0 right-0 flex xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12 justify-between items-center py-4"
      )}
    >
      <Link
        href="/"
        className="text-2xl font-display italic hover:-translate-y-0.5 duration-300"
      >
        NASIUM
      </Link>

      <Button component={Link} href="https://nasium.coach/" id="nav-cta" variant="glow">Start Now</Button>
    </div>
  );
};

export default NavbarComponent;
