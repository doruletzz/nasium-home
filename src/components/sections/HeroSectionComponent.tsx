import Image from "next/image";
import React from "react";
import { Button, Card } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChartLine,
  faNotesMedical,
  faPenNib,
  faShare,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HeroSectionComponent = () => {
  return (
    <section id="hero" className="flex xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12 mt-0 w-full gap-4">
      <div className="flex 2xl:basis-1/2 flex-1 flex-col 2xl:items-start sm:items-center items-start gap-4 sm:mt-56 mt-28">
        <div className="flex gap-4 h-8">
          <Link
            target="_blank"
            href="https://play.google.com/store/apps/details?id=coach.nasium.twa"
            className="hover:-translate-y-0.5 duration-300"
          >
            <Image
              className="h-full w-auto border shadow-2xl shadow-indigo-900 border-gray-700  rounded-lg"
              height={48}
              width={240}
              alt="google-play"
              src="/google-play.webp"
            />
          </Link>
          <Image
            className="h-full opacity-50 w-auto border shadow-2xl shadow-indigo-900 border-gray-700  rounded-lg"
            height={48}
            width={240}
            alt="app-store"
            src="/app-store.png"
          />
        </div>
        <h1 className="font-display sm:text-5xl xs:text-4xl tracking-tight text-3xl 2xl:text-start sm:text-center text-start sm:max-w-2xl max-w-md">
          Modern Approach to Progressive Overload!
        </h1>
        <p className="max-w-md opacity-75 2xl:mb-12 mb-8 sm:leading-loose leading-normal 2xl:text-start sm:text-center text-start">
          Create your gym workout sessions, Track your progress, and enjoy the
          gains made with Nasium.
        </p>
        <div className="flex sm:gap-8 gap-4 md:mb-64 sm:mb-48 mb-16">
          <Button
            component={Link}
            href="https://nasium.coach/"
            id="hero-cta"
            variant="glow"
          >
            Start Now
          </Button>
          <Button id="contact" className="mx-3 px-3">
            Get In Touch
          </Button>
        </div>

        <Card className="group sm:h-[34rem] h-full w-full flex flex-col gap-6 sm:p-12 p-6 mt-auto overflow-hidden">
          <h2 className="font-display max-w-xs sm:text-2xl text-xl">
            Track Progress with Nasium!
          </h2>
          <ul className="leading-loose text-gray-500 sm:text-sm text-md grid gap-2 sm:grid-cols-2 grid-cols-1 font-semibold">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon width={14} icon={faPenNib} />
              Intuitive & Modern Logging
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon width={14} icon={faBook} />
              Predifined Workout Template
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon width={14} icon={faNotesMedical} />
              Track Weight, Duration, Rest & RPE
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon width={14} icon={faStickyNote} />
              Add Useful Notes
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon width={14} icon={faChartLine} />
              Get Previous PR&apos;s
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon width={14} icon={faShare} />
              Create & Share Workout Templates
            </li>
          </ul>
          <div className="sm:flex hidden justify-between">
            <div>
              <Button
                component={Link}
                href="https://nasium.coach/"
                id="track-cta"
                className="mt-36"
                variant="glow"
              >
                Quick Session
              </Button>
            </div>
            <Image
              alt="session-illustration"
              width={320}
              height={480}
              src="/session-page.png"
              className="group-hover:-translate-y-0 translate-y-12 translate-x-4 transition-transform duration-700 ease-in-out-expo"
            />
          </div>
        </Card>
      </div>
      <div className="2xl:sticky hidden 2xl:block mb-40 min-h-[34rem] w-full 2xl:basis-1/2 xl:basis-1/3 top-0 bottom-0 pt-40 h-96">
        <Card
          style={
            {
              // transform: "rotateX(-10deg) rotateY(10deg) rotateZ(2deg)",
            }
          }
          className="group background min-h-[34rem] relative"
        >
          <div className="absolute -top-8 -bottom-6 left-8 right-8 flex gap-4 z-10 scale-80">
            <div className="flex flex-col gap-4 justify-between">
              <Image
                // style={{
                //   transform:
                //     "rotateX(-12deg) rotateY(12deg) rotateZ(5deg) scale(0.875) translateX(-1rem) translateY(-0rem)",
                // }}
                width={280}
                height={520}
                src="/progress-tab.png"
                alt="progress-tab"
                className="shadow-xl [transform:_rotateX(-12deg)_rotateY(12deg)_rotateZ(4deg)_scale(1.1)_translateX(-1.5rem)_translateY(-0.5rem)] group-hover:transform-none transition-transform duration-[1300ms] ease-in-out-expo "
              />
              <Image
                // style={{
                //   transform:
                //     "rotateX(-12deg) rotateY(14deg) rotateZ(-6deg) scale(1.1) translateX(-0rem) translateY(0.5rem)",
                // }}
                width={280}
                height={220}
                src="/workout-tab.png"
                alt="workout-tab"
                className="shadow-xl [transform:_rotateX(22deg)_rotateY(18deg)_rotateZ(-3deg)_scale(0.875)_translateX(-.75rem)_translateY(2.5rem)] group-hover:transform-none transition-transform duration-[1300ms] ease-in-out-expo "
              />
            </div>
            <div className=" flex flex-col gap-4 justify-between">
              <Image
                // style={{
                //   transform:
                //     "rotateX(42deg) rotateY(14deg) rotateZ(-8deg) scale(1.25) translateX(1.25rem) translateY(-1rem)",
                // }}
                width={315}
                height={520}
                src="/exercise-progress-tab.png"
                alt="progress-tab"
                className="shadow-xl [transform:_rotateX(2deg)_rotateY(-14deg)_rotateZ(12deg)_scale(0.5)_translateX(-3.25rem)_translateY(-3rem)] group-hover:transform-none transition-transform duration-[1300ms] ease-in-out-expo "
              />
              <Image
                // style={{
                //   transform:
                //     "rotateX(-12deg) rotateY(-12deg) rotateZ(5deg) scale(0.9) translateX(2rem) translateY(-1rem)",
                // }}
                width={315}
                height={520}
                src="/session-tab.png"
                alt="progress-tab"
                className="[transform:_rotateX(-2deg)_rotateY(27deg)_rotateZ(-12deg)_scale(1.2)_translateX(3rem)_translateY(0rem)] group-hover:transform-none z-10 transition-transform duration-[1300ms] ease-in-out-expo shadow-xl rotate"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
