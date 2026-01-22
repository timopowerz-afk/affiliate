"use client";

import Link from "next/link";
import React from "react";

function TopBar() {
  return (
    <header className="border-b-2 border-slate-900 bg-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-12 w-12 flex-shrink-0">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50,85 C50,85 20,60 20,40 C20,25 30,15 50,15 C70,15 80,25 80,40 C80,60 50,85 50,85 Z"
                fill="url(#flagPattern)"
                stroke="#1e293b"
                strokeWidth="2"
              />
              <defs>
                <pattern id="flagPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="40" height="40" fill="#1e3a8a" />
                  <rect x="40" y="0" width="60" height="7.7" fill="#dc2626" />
                  <rect x="40" y="7.7" width="60" height="7.7" fill="#ffffff" />
                  <rect x="40" y="15.4" width="60" height="7.7" fill="#dc2626" />
                  <rect x="40" y="23.1" width="60" height="7.7" fill="#ffffff" />
                  <rect x="40" y="30.8" width="60" height="7.7" fill="#dc2626" />
                  <rect x="40" y="38.5" width="60" height="7.7" fill="#ffffff" />
                  <rect x="40" y="46.2" width="60" height="7.7" fill="#dc2626" />
                  <rect x="40" y="53.9" width="60" height="7.7" fill="#ffffff" />
                  <rect x="40" y="61.6" width="60" height="7.7" fill="#dc2626" />
                  <rect x="40" y="69.3" width="60" height="7.7" fill="#ffffff" />
                  <rect x="40" y="77" width="60" height="7.7" fill="#dc2626" />
                  <rect x="40" y="84.7" width="60" height="7.7" fill="#ffffff" />
                  <rect x="40" y="92.4" width="60" height="7.6" fill="#dc2626" />
                  <text x="20" y="25" fontSize="8" fill="#ffffff" textAnchor="middle">★</text>
                  <text x="10" y="20" fontSize="6" fill="#ffffff" textAnchor="middle">★</text>
                  <text x="30" y="20" fontSize="6" fill="#ffffff" textAnchor="middle">★</text>
                  <text x="10" y="30" fontSize="6" fill="#ffffff" textAnchor="middle">★</text>
                  <text x="30" y="30" fontSize="6" fill="#ffffff" textAnchor="middle">★</text>
                </pattern>
              </defs>
            </svg>
          </div>
          <div className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            U.S. Weight & Metabolism Journal
          </div>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-bold text-slate-700 sm:flex">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 bg-emerald-600 animate-pulse" />
            <span className="font-bold">FDA-Approved Program</span>
          </span>
          <span className="text-slate-300">|</span>
          <Link href="/lander" className="bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-slate-800 transition-all">
            Get Started
          </Link>
        </div>
      </div>
      <nav className="border-t-2 border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl items-center gap-8 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/health" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
            Health
          </Link>
          <Link href="/beauty" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
            Beauty
          </Link>
          <Link href="/news" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
            News
          </Link>
          <Link href="/about" className="text-base font-bold text-blue-700 transition-colors">
            About Us
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-4 text-xs leading-relaxed text-slate-600 sm:px-6 lg:px-8">
        <p className="mb-3 font-semibold text-slate-800">
          This page is an advertorial in partnership with an independent telehealth provider. It is not a substitute for professional medical advice, diagnosis, or treatment. We do not practice medicine or provide medical services.
        </p>
        <p className="mb-3">
          Only a licensed clinician can determine if GLP-1 medication is appropriate for you. Individual results vary and are not guaranteed.
        </p>
        <p className="mb-3">
          Medications referenced are FDA-approved for specific indications. Prescribing decisions, dosing, and treatment plans are made solely by licensed clinicians.
        </p>
        <p className="mb-3">
          Medication availability and pricing are subject to change. This information is current as of 2026 and may be updated as new clinical guidance becomes available.
        </p>
        <p className="font-semibold">© 2026 U.S. Weight & Metabolism Journal • All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <main>
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                About Us
              </h1>
              <p className="text-lg font-semibold text-slate-700 sm:text-xl">
                Leading the fight against obesity in America
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <article className="border-b-2 border-slate-200 pb-8">
                <h2 className="mb-4 text-3xl font-black text-slate-900">Our Mission</h2>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  <strong>U.S. Weight & Metabolism Journal</strong> is a leading organization dedicated to combating 
                  the obesity epidemic in America. With over 42% of American adults affected by obesity, we recognize 
                  this as one of the most critical public health challenges of our time.
                </p>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Our mission is to provide evidence-based, medically-supervised weight management solutions that are 
                  accessible, effective, and sustainable. We believe that every American deserves access to quality 
                  healthcare, regardless of their location or insurance status.
                </p>
              </article>

              <article className="border-b-2 border-slate-200 pb-8">
                <h2 className="mb-4 text-3xl font-black text-slate-900">What We Do</h2>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Through our network of licensed medical providers, we offer:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-relaxed text-slate-700 sm:text-lg">
                  <li><strong>Medically-Supervised Programs:</strong> FDA-approved GLP-1 medications with personalized treatment plans</li>
                  <li><strong>Comprehensive Research:</strong> Independent reviews and analysis of weight loss solutions</li>
                  <li><strong>Educational Resources:</strong> Evidence-based information about obesity, metabolism, and health</li>
                  <li><strong>Telehealth Services:</strong> Remote access to licensed healthcare providers nationwide</li>
                  <li><strong>Long-Term Support:</strong> Ongoing monitoring and guidance for sustainable results</li>
                </ul>
              </article>

              <article className="border-b-2 border-slate-200 pb-8">
                <h2 className="mb-4 text-3xl font-black text-slate-900">Our Approach</h2>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  We recognize that <strong>one-size-fits-all solutions don't work</strong> for weight management. 
                  Our approach is personalized, medically-supervised, and focused on long-term sustainability rather 
                  than quick fixes.
                </p>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Every program is designed by licensed healthcare providers who understand the complexities of 
                  metabolism, hormones, and individual health needs. We combine FDA-approved medications with 
                  comprehensive support to help Americans achieve lasting results.
                </p>
              </article>

              <article>
                <h2 className="mb-4 text-3xl font-black text-slate-900">Our Commitment</h2>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  We are committed to transparency, medical legitimacy, and patient safety. All our programs are 
                  reviewed by board-certified clinicians, and we maintain the highest standards of medical practice. 
                  <strong> Our goal is to help millions of Americans take control of their health</strong> and 
                  contribute to reducing the obesity epidemic across the nation.
                </p>
                <Link href="/lander" className="inline-block bg-slate-900 px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-slate-800 transition-all">
                  Learn More About Our Programs
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
