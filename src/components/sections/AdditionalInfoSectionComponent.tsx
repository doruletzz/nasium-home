import React from 'react'
import { Button, Card } from '..'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faDumbbell } from '@fortawesome/free-solid-svg-icons'

const AdditionalInfoSectionComponent = () => {
  return (
    <section id="additional-info" className=" xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12 ">
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
          {/* <Link
            href="/pricing"
            className="flex gap-2 hover:underline items-center group font-semibold h-7"
          >
            <FontAwesomeIcon width={8} height={10} icon={faAngleRight} />{" "}
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              Is It Free?
            </span>
          </Link> */}
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
  )
}

export default AdditionalInfoSectionComponent