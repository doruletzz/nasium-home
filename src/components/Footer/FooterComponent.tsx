import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {
  return (
    
    <footer className="gap-x-2 gap-y-16 bg-gray-950 xl:mx-48 py-6 pt-12 mx-4 lg:mx-12 md:mx-12 sm:mx-8 border-t border-gray-700 grid sm:grid-cols-4 grid-cols-2">
    <Link
      href="/"
      className="text-2xl font-display italic hover:-translate-y-0.5 duration-300"
    >
      NASIUM
    </Link>
    <div className="flex flex-col gap-4">
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
        className="w-24 opacity-75 border shadow-indigo-900 border-gray-700  rounded-lg"
        height={48}
        width={240}
        alt="app-store"
        src="/app-store.png"
      />
    </div>

    <div className="flex flex-col gap-4">
      <Link
        className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
        href="/onboarding"
      >
        Onboarding
      </Link>
      <Link
        className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
        href="/article"
      >
        Articles
      </Link>
      {/* <Link
        className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
        href="/pricing"
      >
        Pricing
      </Link> */}
      <Link
        className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
        href="/about"
      >
        About
      </Link>
    </div>
    <div className="flex flex-col gap-4">
      <Link
        className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
        href="/onboarding"
      >
        Term of use
      </Link>
      <Link
        className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
        href="/onboarding"
      >
        Privacy Policy
      </Link>
      <Link
        className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
        href="/onboarding"
      >
        Contact
      </Link>
    </div>

    <span className="sm:col-span-4 col-span-2 text-center text-xs opacity-90">
      Copyright © 2024 NASIUMSOLUTIONS SRL. All rights reserved.
    </span>
  </footer>
  )
}

export default FooterComponent