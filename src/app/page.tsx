import { Button, Card } from "@/components";
import {
  AdditionalInfoSection,
  ArticleSection,
  CallToActionSection,
  FeatureCarouselSection,
  HeroSection,
} from "@/components/sections";
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
      "This routine divides workouts between upper body and lower body days, typically alternating between them over 4 days a week to ensure balanced muscle development and recovery.",
    image: "/upper-lower-split.jpg",
  },
  {
    slug: "article/push-pull-legs-split",
    title: "The Push/Pull/Legs Split",
    description:
      "This program splits workouts into push (chest, shoulders, triceps), pull (back, biceps), and legs (quads, hamstrings, calves), usually done over three to six days to target specific muscle groups efficiently.",
    image: "/push-pull-legs-split.jpg",
  },
  {
    slug: "article/bro-split",
    title: "The Bro Split",
    description:
      " A traditional bodybuilding routine, it dedicates one workout day per major muscle group (e.g., chest day, back day), allowing for focused training but often requiring a 5-6 day commitment per week.",
    image: "/bro-split.jpg",
  },
  {
    slug: "article/full-body-split",
    title: "The Full Body Split",
    description:
      "Each workout session targets the entire body, incorporating compound exercises for all major muscle groups, ideal for beginners or those limited to 2-3 days per week.",
    image: "/fullbody-split.jpg",
  },
  {
    slug: "article/5x5-split",
    title: "The 5x5 Split",
    description:
      "A strength-focused program involving five sets of five reps of major lifts like squats, deadlifts, and bench presses, emphasizing progression and heavy compound movements.",
    image: "/5x5-split.jpg",
  },
  {
    slug: "article/minimalist-split",
    title: "The Minimalist Split",
    description:
      "Designed for efficiency, this routine focuses on essential compound movements (like squats, deadlifts, and presses) with fewer exercises and minimal equipment, suitable for those with limited time.",
    image: "/minimalist-split.jpg",
  },
  {
    slug: "article/minimalist-split",
    title: "The At-Home Split",
    description:
      "Tailored for home workouts, this plan utilizes bodyweight exercises, resistance bands, or light weights, focusing on flexibility and convenience without sacrificing muscle development.",
    image: "/at-home-split.jpg",
  },
  {
    slug: "article/functional-split",
    title: "The Functional Split",
    description:
      "This program prioritizes exercises that enhance functional strength and movement patterns, combining strength training with mobility, balance, and coordination exercises for overall physical capability.",
    image: "/functional-split.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-900 text-gray-50 flex flex-col relative z-0 bg-gradient-polka-dark bg-[length:34px_34px]">
      <HeroSection />
      <FeatureCarouselSection features={CONTENT} />
      <ArticleSection articles={ARTICLES} />
      <AdditionalInfoSection />
      <CallToActionSection />
    </main>
  );
}
