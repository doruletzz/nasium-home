"use client";

import {
  faArrowRight,
  faCircleDot,
  faDotCircle,
  faEnvelope,
  faEnvelopeOpenText,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faList12 } from "@fortawesome/free-solid-svg-icons/faList12";
import { Button, Card } from "@/components";
import { cn } from "@/utils/cn";

const CONTENT = [
  {
    title: "Install",
    section: [
      {
        video: "/media/Video-001.mp4",
        text: "Nasium can be installed as a Progressive Web App. Installing Nasium is a breeze, simply add it to your Home Screen and launch it just like any other app.",
      },
      { text: "Soon: On Android & iOS", disabled: true },

      {
        video: "/media/Video-002.mp4",
        text: "Before using Nasium, John needs to log in. After that he can use his gmail account and start tracking right away!",
      },
    ],
  },
  {
    title: "Plan",
    section: [
      {
        video: "/media/Video-003.mp4",
        text: "Before starting, John wants to use his own workout plan, so he adds it to the workout page. He adds all the exercises he wants to use and he's finished adding his first plan!",
      },
      {
        video: "/media/Video-004.mp4",
        text: "John has created his workout plan, but he then remembered that he made a mistake, that's no problem... he can update his workout with ease.",
      },
      {
        video: "/media/Video-005.mp4",
        text: "John wants to create a plan for each week, he can add his created workout to one of the days.",
      },
    ],
  },
  {
    title: "Session",
    section: [
      {
        video: "/media/Video-006.mp4",
        text: "Now John can start a new Session using his workout Plan. He can now track the weight, reps, rpe & duration.",
      },
      {
        video: "/media/Video-007.mp4",
        text: "After an extended period, John has been doing his exercises consistently, he now can see recommendation for what weight to use, helping John in picking the reps & weight.",
      },
      {
        video: "/media/Video-008.mp4",
        text: "Maybe John wants to try something new, but he does not know what he wants to do before starting his session, he can choose starting a quick session.",
      },
    ],
  },
  {
    title: "Session",
    section: [
      {
        video: "/media/Video-009.mp4",
        text: "Lastly John Can see his progress: on a specific timeline, on any of his previous session and for each of his exercises. He is ready to take his journey in the gym one step closer.",
      },
    ],
  },
];

const OnboardingPageLeaf = () => {
  const [selectedVideo, setSelectedVideo] = useState("/media/Video-001.mp4");

  const [index, setIndex] = useState(0);
  //   const debouncedDisabledIndex = useDebounce(index, 700);
  return (
    <div
      style={{ scrollbarGutter: "stable" }}
      className="flex flex-col gap-4 items-center px-4 sm:px-16 md:px-32 xl:px-72 mt-36 sm:mt-32  overflow-x-hidden"
    >
      <div className="flex gap-12 flex-wrap justify-center my-12 w-full">
        <div className="relative w-[320px] min-h-[620px] animate-slide-up-and-fade-in hover:-translate-y-0.5">
          <Image
            alt="mockup-iphone"
            className="absolute z-10 pointer-events-none scale-[1.09] top-[1.1rem]"
            src="/mockup.webp"
            width={320}
            height={960}
          />
          <video
            key={selectedVideo}
            className="rounded-[2.5rem] min-h-[690px]"
            width="320"
            autoPlay
            height={960}
            controls
            preload="true"
          >
            {selectedVideo && (
              <source
                key={selectedVideo}
                src={selectedVideo}
                type="video/mp4"
              />
            )}
            Your browser does not support the video tag.
          </video>
        </div>

        <Card
          style={{ animationDelay: "0.7s" }}
          className="flex flex-col gap-4 p-8 flex-1 sm:min-w-[24rem] min-h-[620px] min-w-min animate-slide-up-and-fade-in opacity-[0.001] pointer-events-auto"
        >
          <p className="font-display text-2xl text-gray-900 dark:text-gray-100">
            Onboarding
          </p>
          <p className="max-w-lg leading-normal text-sm text-gray-600 dark:text-gray-500 mb-12">
            John wants to start tracking his workout, he wants to use Nasium to
            start tracking his workouts & progress. Come along as he embarks on
            this exciting journey of progressive overload!
          </p>

          <ul
            className={cn(
              "relative flex mt-8 flex-row justify-between before:content-[''] before:absolute before:inset-0 before:bg-gray-700 before:z-10 before:w-full before:h-0.5 before:mx-auto before:my-auto mb-2"
            )}
          >
            {["Install", "Plan", "Session", "Progress"].map((el, i) => (
              <li key={el}>
                <Button
                  id={`${el}`}
                  onClick={() => setIndex(i)}
                  variant="secondary"
                  //   disabled={debouncedDisabledIndex !== index}
                  className={cn(
                    "w-auto text-xs h-7 bg-opacity-100 sm:px-4 px-2 relative z-10 shadow-xl ring-opacity-30 shadow-indigo-950 p-0 leading-none font-semibold transition-colors duration-200",
                    i === index &&
                      "bg-indigo-950 shadow-xl shadow-indigo-950 text-indigo-200"
                  )}
                >
                  {el}
                </Button>
              </li>
            ))}
          </ul>

          <div className="relative">
            {CONTENT.map(({ section, title }, contentIdx) => (
              <>
                {(contentIdx || index === contentIdx) && (
                  <div
                    key={title}
                    className={cn(
                      "absolute top-0 flex flex-col gap-4 z-10 text-xs",
                      index !== contentIdx && "animate-slide-down-and-fade-out"
                    )}
                  >
                    {section.map(({ video, text, disabled }, sectionIdx) => (
                      <Button
                        key={video}
                        id="section"
                        style={{ animationDelay: `${1 + 0.3 * sectionIdx}s` }}
                        disabled={disabled}
                        variant="secondary"
                        onClick={() => video && setSelectedVideo(video)}
                        className={cn(
                          "z-10 leading-normal hover:translate-y-0 hover:translate-x-2 opacity-[0.001] text-gray-200 text-opacity-75 hover:underline text-left animate-slide-up-and-fade-in",
                          video === selectedVideo
                            ? "text-opacity-100 dark:text-opacity-100 dark:text-gray-200 text-gray-800 underline"
                            : ""
                        )}
                      >
                        <FontAwesomeIcon
                          width={9}
                          icon={faArrowRight}
                          className="mr-2"
                        />
                        {text}
                      </Button>
                    ))}
                  </div>
                )}
              </>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingPageLeaf;
