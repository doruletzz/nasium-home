"use client";

import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Card } from "..";
import Image from "next/image";
import { cn } from "@/utils/cn";
import useScrollPosition from "@/hooks/useScrollPosition";

type Props = {
  features: { title: string; body?: ReactNode; image: string }[];
};

const FeatureCarouselSectionComponent = ({ features }: Props) => {
  const { scrollPosition } = useScrollPosition();
  const containerRef = useRef<HTMLDivElement>(null);

  const isScrollToCarousel = useMemo(
    () =>
      containerRef?.current?.getBoundingClientRect().top &&
      containerRef?.current?.getBoundingClientRect().top < 180,
    [scrollPosition, containerRef.current]
  );

  useEffect(() => {
    if (
      !isScrollToCarousel &&
      containerRef.current &&
      containerRef.current.scrollLeft > 0
    ) {
      containerRef.current.scrollLeft = 0;
    }
  }, [isScrollToCarousel, containerRef.current]);

  return (
    <>
      <div className="flex gap-4 lg:flex-row flex-col-reverse pt-4 xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12 min-h-[32rem] -z-10">
        <div>
          <Card
            className={cn(
              "sticky top-60 group flex-col 2xl:min-w-[48rem] md:min-w-[32rem] md:max-w-[32rem] lg:flex hidden p-12 overflow-hidden  2xl:min-h-[27rem] min-h-[32rem]  2xl:max-h-[27rem] max-h-[32rem]",
              isScrollToCarousel && "invisible",
              !isScrollToCarousel &&
                containerRef.current?.scrollLeft &&
                "animate-fade-in"
            )}
          >
            <Image
              alt="session-illustration"
              width={220}
              height={480}
              src={features[0].image}
              className="absolute 2xl:left-0 left-1/2 2xl:-translate-x-1/3 -translate-x-1/2 2xl:group-hover:translate-y-0 group-hover:translate-y-1/3 2xl:group-hover:-translate-x-1/4 transition-transform duration-[1300ms] ease-in-out-expo ml-6 top-4 2xl:translate-y-0 translate-y-1/2 -bottom-4 p-4 2xl:h-full 2xl:w-auto h-auto w-full"
            />

            <div className="flex flex-col gap-4 2xl:ml-80 ml-0 z-10 shadow-sm">
              <span className="sm:text-2xl text-xl font-display tracking-tight">
                {features[0].title}
              </span>
              {features[0].body}
            </div>
          </Card>
        </div>
        <div className="flex flex-col h-full gap-80 2xl:mb-[28rem] mb-[33rem] flex-1">
          <div className="flex lg:flex-col flex-row justify-start gap-4 flex-1 mb-0">
            <Card className="flex-1 sm:p-12 p-6 justify-end flex flex-col">
              <p className="opacity-50 text-xs mb-auto lg:mb-0">Exercise Dataset</p>

              <span className="lg:text-7xl text-5xl font-display">900+</span>
            </Card>
            <Card className="flex-1 flex flex-col gap-4 sm:p-12 p-6 ">
              <p className="text-xs opacity-50">You can use the app in</p>
              <span className="lg:text-xl text-lg font-display text-opacity-75 text-gray-100">
                Light & <br />
                <strong className="lg:text-6xl text-4xl -ml-0.5 text-opacity-100 text-gray-100">
                  Dark
                </strong>
              </span>
            </Card>
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className={cn(
          "pt-12 2xl:-mt-[30rem] -mt-[35rem] flex gap-4 xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12  overflow-y-hidden snap-x text-clip scroll-px-4 scroll-smooth snap-start no-scrollbar scroll-mx-24 sm:scroll-px-16 md:scroll-px-32 xl:scroll-px-48",
          isScrollToCarousel ? "overflow-x-scroll" : "md:overflow-x-hidden overflow-x-scroll"
        )}
      >
        {features.map(({ title, image, body }, i) => (
          <Card
            className={cn(
              "group flex flex-col 2xl:min-h-[27rem] sm:min-h-[32rem] min-h-[24rem] relative snap-proximity snap-center 2xl:min-w-[48rem] md:min-w-[32rem] sm:min-w-[24rem] min-w-[18rem] md:max-w-[32rem] sm:p-12 p-6 overflow-hidden",
              i === 0 && !isScrollToCarousel && "lg:invisible visible"
            )}
            key={i}
          >
            <Image
              alt="session-illustration"
              width={220}
              height={480}
              src={image}
              className="absolute 2xl:left-0 left-1/2 2xl:-translate-x-1/3 -translate-x-1/2 2xl:group-hover:translate-y-0 group-hover:translate-y-1/4 2xl:group-hover:-translate-x-1/4 transition-transform duration-[1300ms] ease-in-out-expo 2xl:ml-6 lg:top-4 2xl:translate-y-0 translate-y-1/2 -bottom-4 sm:p-4 2xl:h-full 2xl:w-auto h-auto w-full"
            />

            <div className="flex flex-col gap-4 2xl:ml-80 ml-0 z-10 shadow-sm">
              <span className="sm:text-2xl text-xl font-display tracking-tight">{title}</span>
              {body}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FeatureCarouselSectionComponent;
