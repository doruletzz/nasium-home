import { Button, Card, FeatureCarouselSection } from "@/components";
import { cn } from "@/utils/cn";
import {
  faAngleRight,
  faBalanceScale,
  faBarsProgress,
  faBook,
  faCalendar,
  faCaretRight,
  faChartLine,
  faClock,
  faDumbbell,
  faFilter,
  faNotesMedical,
  faPen,
  faPenNib,
  faPlay,
  faPlus,
  faSearch,
  faShare,
  faStickyNote,
  faThLarge,
  faTimesCircle,
  faToolbox,
  faTrophy,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const CONTENT = [
  {
    title: "Monitor Your Muscle Activity Spread",
    body: (
      <ul className="leading-loose text-gray-500 text-sm flex flex-col gap-4 font-semibold">
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faCalendar} />
          Analyze Activity
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faBalanceScale} />
          Balanced Muscle Distribution
        </li>
      </ul>
    ),
    image: "/muscle-activity.png",
  },
  {
    title: "Advanced Performance Overview",
    body: (
      <ul className="leading-loose text-gray-500 text-sm flex flex-col gap-4 font-semibold">
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faChartLine} />
          Detailed Stats
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faToolbox} />
          Track what you need
        </li>
      </ul>
    ),
    image: "/weekly-statistics.png",
  },
  {
    title: "Growth with Progressive Overload",
    body: (
      <ul className="leading-loose text-gray-500 text-sm flex flex-col gap-4 font-semibold">
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faPlus} />
          Progressive Overload
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faBarsProgress} />
          Estimated 1RM
        </li>
      </ul>
    ),
    image: "/exercise-progress.png",
  },
  {
    title: "Filters & Search Exercises",
    body: (
      <ul className="leading-loose text-gray-500 text-sm flex flex-col gap-4 font-semibold">
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faSearch} />
          Advanced Searching
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faFilter} />
          900+ Exercises
        </li>
      </ul>
    ),
    image: "/exercise-filter.png",
  },
  {
    title: "No Wait, Start Session Now!",
    body: (
      <ul className="leading-loose text-gray-500 text-sm flex flex-col gap-4 font-semibold">
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faPlay} />
          Quick Start
        </li>
        <li className="flex items-center gap-2">
          <FontAwesomeIcon width={14} icon={faClock} />
          Track Total Time
        </li>
      </ul>
    ),
    image: "/exercise-progress.png",
  },
];

const ARTICLES = [
  {
    slug: "article/upper-lower-split",
    title: "The Upper/Lower Split",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit assumenda...",
    image: "/upper-lower-split.jpg",
  },
  {
    slug: "article/push-pull-legs-split",
    title: "The Push/Pull/Legs Split",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit assumenda...",
    image: "/push-pull-legs-split.jpg",
  },
  {
    slug: "article/bro-split",
    title: "The Bro Split",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit assumenda...",
    image: "/bro-split.jpg",
  },
  {
    slug: "article/full-body-split",
    title: "The Full Body Split",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit assumenda...",
    image: "/fullbody-split.jpg",
  },
  {
    slug: "article/5x5-split",
    title: "The 5x5 Split",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit assumenda...",
    image: "/5x5-split.jpg",
  },
  {
    slug: "article/minimalist-split",
    title: "The Minimalist Split",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit assumenda...",
    image: "/minimalist-split.jpg",
  },
  {
    slug: "article/minimalist-split",
    title: "The At-Home Split",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit assumenda...",
    image: "/at-home-split.jpg",
  },
  {
    slug: "article/functional-split",
    title: "The Functional Split",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit assumenda...",
    image: "/functional-split.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-900 text-gray-50 flex flex-col relative z-0 bg-gradient-polka-dark bg-[length:34px_34px]">
      <div className="flex xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12 mt-0 w-full gap-4">
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
      </div>
      <FeatureCarouselSection features={CONTENT} />
      <section className=" xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12  flex gap-2 flex-col my-24">
        <h2 className="text-3xl font-display">Our Templates, Explained</h2>
        <p className="text-gray-500 mb-12 text-sm max-w-lg leading-normal">
          Train smart by planning your workouts. Choose your split and get
          started with your workout right away. We&apos;ve provided some of the most
          popular and used splits and explained them for you.
        </p>
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          {ARTICLES.map(({ title, slug, description, image }) => (
            <Card
              key={title}
              component={Link}
              href={slug}
              className="overflow-hidden group flex w-full flex-col gap-2 sm:p-8 p-6 pb-0 sm:pb-0"
            >
              <span className="font-display">{title}</span>
              <p className="text-xs leading-normal text-gray-500 mb-8">
                {description}
              </p>
              <Image
                src={image}
                alt={title}
                width={230}
                height={290}
                className="translate-y-3 shadow-xl group-hover:translate-y-0.5 transition-transform duration-700 ease-in-out-expo mt-auto rounded-t-2xl mx-auto object-cover max-h-[18rem] border border-gray-600"
              />
            </Card>
          ))}
        </div>
      </section>
      <section className=" xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12 ">
        <div className="flex gap-4 lg:flex-row flex-col">
          <Card className="basis-2/3 flex flex-col gap-4 sm:p-12 p-6">
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="sm:text-2xl text-xl font-display">
                Additional Info
              </h3>
              <p className="text-sm leading-normal max-w-sm text-gray-500 mb-8">
                Check our short articles, and if you still have any questions
                feel free to get in touch!
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 mb-auto">
              <Link
                href="/onboarding"
                className="flex gap-2 hover:underline items-center group font-semibold h-7"
              >
                <FontAwesomeIcon width={8} height={10} icon={faAngleRight} />{" "}
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  How to start?
                </span>
              </Link>
              <Link
                href="/about"
                className="flex gap-2 hover:underline items-center group font-semibold h-7"
              >
                <FontAwesomeIcon width={8} height={10} icon={faAngleRight} />{" "}
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  About Nasium
                </span>
              </Link>
              <Link
                href="/article/track-with-nasium"
                className="flex gap-2 hover:underline items-center group font-semibold h-7"
              >
                <FontAwesomeIcon width={8} height={10} icon={faAngleRight} />{" "}
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  Track Progress
                </span>
              </Link>
              <Link
                href="/pricing"
                className="flex gap-2 hover:underline items-center group font-semibold h-7"
              >
                <FontAwesomeIcon width={8} height={10} icon={faAngleRight} />{" "}
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  Is It Free?
                </span>
              </Link>
            </div>
          </Card>
          <Card className="flex basis-1/3 flex-col gap-4 sm:p-12 p-6 relative overflow-hidden">
            <FontAwesomeIcon
              icon={faDumbbell}
              width={320}
              className="absolute left-1/3 top-1/4 -rotate-45 text-indigo-950 -z-10 text-opacity-50"
            />
            <div className="flex-1 flex flex-col gap-2">
              <span className="sm:text-2xl text-xl font-display">
                Gym with Nasium
              </span>
              <p className="text-sm leading-normal text-gray-500">
                Going to the gym is the first step, take your next step with
                Nasium!
              </p>
            </div>

            <Button
              component={Link}
              href="https://nasium.coach/"
              id="start"
              className="w-auto text-center"
              variant="glow"
            >
              Start Session
            </Button>
          </Card>
        </div>
      </section>
      <section className="py-20 mt-12  xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12  flex flex-col items-center gap-4 bg-gray-950 border-t border-gray-700">
        <div className="flex gap-2">
          <Link
            target="_blank"
            href="https://play.google.com/store/apps/details?id=coach.nasium.twa"
            className="hover:-translate-y-0.5 duration-300 h-auto"
          >
            <Image
              className="w-24 border shadow-indigo-900 border-gray-700  rounded-lg"
              height={48}
              width={240}
              alt="google-play"
              src="/google-play.webp"
            />
          </Link>
          <Image
            className="w-24 opacity-50 border shadow-indigo-900 border-gray-700  rounded-lg"
            height={48}
            width={240}
            alt="app-store"
            src="/app-store.png"
          />
        </div>
        <h2 className="text-3xl font-display">Ready To Start?</h2>
        <p className="text-sm max-w-sm leading-normal text-center text-gray-500 mb-8">
          You can start by downloading our App, or by adding our App to your
          mobile desktop!
        </p>
        <div className="flex flex-col items-center gap-3 text-xs h-9">
          <Button
            component={Link}
            href="https://nasium.coach/"
            id="start-now"
            variant="glow"
            className=""
          >
            Start Now
          </Button>
        </div>
      </section>
    </main>
  );
}
