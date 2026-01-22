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
          <Link href="/beauty" className="text-base font-bold text-blue-700 transition-colors">
            Beauty
          </Link>
          <Link href="/news" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
            News
          </Link>
          <Link href="/about" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
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
          This organization is committed to fighting obesity in America through evidence-based medical solutions.
        </p>
        <p className="font-semibold">© {new Date().getFullYear()} U.S. Weight & Metabolism Journal • All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function BeautyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <main>
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Beauty & Wellness
              </h1>
              <p className="text-lg font-semibold text-slate-700 sm:text-xl">
                How weight management impacts confidence and overall well-being
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <article className="border-b-2 border-slate-200 pb-8">
                <h2 className="mb-4 text-3xl font-black text-slate-900">The Connection Between Weight and Confidence</h2>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Achieving and maintaining a healthy weight isn't just about physical health—it's deeply connected to 
                  how we feel about ourselves. <strong>Many Americans report increased confidence and improved quality 
                  of life</strong> after successfully managing their weight through medically-supervised programs.
                </p>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Our approach recognizes that beauty and wellness go hand in hand. When you feel better physically, 
                  it shows in your confidence, energy levels, and overall outlook on life.
                </p>
              </article>

              <article className="border-b-2 border-slate-200 pb-8">
                <h2 className="mb-4 text-3xl font-black text-slate-900">Sustainable Results for Long-Term Confidence</h2>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Unlike crash diets or temporary solutions, our medically-supervised programs focus on sustainable 
                  weight loss that you can maintain. This means:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-base leading-relaxed text-slate-700 sm:text-lg">
                  <li>Gradual, healthy weight loss that your body can sustain</li>
                  <li>Improved energy levels and overall vitality</li>
                  <li>Better sleep quality and mental clarity</li>
                  <li>Increased confidence in your daily life</li>
                  <li>Long-term lifestyle changes, not temporary restrictions</li>
                </ul>
                <Link href="/lander" className="inline-block bg-purple-700 px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-purple-800 transition-all">
                  Discover Our Programs
                </Link>
              </article>

              <article>
                <h2 className="mb-4 text-3xl font-black text-slate-900">Your Journey to Wellness</h2>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Every individual's journey is unique. Our medically-supervised programs are designed to work with 
                  your body's natural processes, helping you achieve results that feel authentic and sustainable. 
                  <strong> When you look and feel your best, it impacts every aspect of your life</strong>—from 
                  personal relationships to professional confidence.
                </p>
                <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  We believe that true beauty comes from feeling healthy, confident, and in control of your wellness 
                  journey. Our programs provide the medical support and guidance you need to make lasting changes.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
