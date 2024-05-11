import React from 'react'
import { Button } from '..'
import Link from 'next/link'
import Image from 'next/image'

const CallToActionSectionComponent = () => {
  return (
    <section id="call-to-action" className="py-20 mt-12  xl:px-48 lg:px-12 px-4 sm:px-8 md:px-12  flex flex-col items-center gap-4 bg-gray-950 border-t border-gray-700">
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
  )
}

export default CallToActionSectionComponent