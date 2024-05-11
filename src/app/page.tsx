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
      <HeroSection />
      <FeatureCarouselSection features={CONTENT} />
      <ArticleSection articles={ARTICLES} />
      <AdditionalInfoSection />
      <CallToActionSection />
    </main>
  );
}
