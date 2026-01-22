"use client";

import Image from "next/image";
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
          <Link href="/about" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
            About Us
          </Link>
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-block bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-800">
            Our Mission
          </div>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Fighting Obesity in America
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-slate-700 sm:text-xl">
            We are a leading organization dedicated to combating the obesity epidemic through evidence-based research, 
            medical innovation, and comprehensive support programs for millions of Americans.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedArticle() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-1 w-16 bg-blue-700"></div>
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Latest Article</h2>
          </div>
          <Link href="/news" className="text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors">
            View All News →
          </Link>
        </div>
        
        <Link href="/lander" className="group block overflow-hidden rounded-2xl bg-white shadow-xl ring-2 ring-slate-200 transition-all hover:shadow-2xl hover:ring-blue-300">
          <div className="grid gap-0 sm:grid-cols-2">
            <div className="relative h-64 w-full bg-slate-100 sm:h-auto">
              <Image
                src="https://auth.adenslab.com/storage/v1/object/public/website-content/weight-CTA-banner.jpg"
                alt="Featured Article"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 640px) 50vw, 100vw"
                quality={95}
              />
              <div className="absolute top-4 left-4 bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                FEATURED
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-700">
                Medical Review • 2026
              </div>
              <h3 className="mb-4 text-2xl font-black leading-tight text-slate-900 sm:text-3xl group-hover:text-blue-700 transition-colors">
                Who "Really" Took the #1 Spot for Weight Loss in 2026?
              </h3>
              <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                An independent medical review about Ozempic, diets, and the new alternative doctors are quietly recommending. 
                Discover the top 5 weight-loss solutions ranked by medical experts.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
                <span>Read Full Article</span>
                <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-4xl font-black text-blue-700 sm:text-5xl">42%</div>
            <div className="text-sm font-bold text-slate-700 sm:text-base">Adult Obesity Rate</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-black text-emerald-600 sm:text-5xl">100K+</div>
            <div className="text-sm font-bold text-slate-700 sm:text-base">Patients Helped</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-black text-purple-600 sm:text-5xl">50+</div>
            <div className="text-sm font-bold text-slate-700 sm:text-base">Medical Experts</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-black text-red-600 sm:text-5xl">$173B</div>
            <div className="text-sm font-bold text-slate-700 sm:text-base">Annual Cost</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-black text-slate-900 sm:text-4xl">Our Commitment to America</h2>
          <div className="space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            <p>
              <strong>Obesity affects over 100 million Americans</strong>, contributing to heart disease, diabetes, 
              and reduced quality of life. At U.S. Weight & Metabolism Journal, we're committed to providing 
              evidence-based solutions and medical guidance to help combat this epidemic.
            </p>
            <p>
              Through our network of licensed medical providers, FDA-approved treatment programs, and comprehensive 
              research, we empower individuals to take control of their health with medically-supervised weight 
              management solutions.
            </p>
            <p>
              <strong>Our mission is simple:</strong> Make effective, science-backed weight loss accessible to 
              every American who needs it, regardless of where they live or their insurance status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-4 text-xs leading-relaxed text-slate-600 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-6 sm:grid-cols-4">
          <div>
            <h3 className="mb-3 font-bold text-slate-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/health" className="hover:text-blue-700 transition-colors">Health</Link></li>
              <li><Link href="/beauty" className="hover:text-blue-700 transition-colors">Beauty</Link></li>
              <li><Link href="/news" className="hover:text-blue-700 transition-colors">News</Link></li>
              <li><Link href="/about" className="hover:text-blue-700 transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-slate-900">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/lander" className="hover:text-blue-700 transition-colors">Weight Loss Programs</Link></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Medical Research</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Patient Stories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-slate-900">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-700 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-slate-900">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-700 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-300 pt-6">
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
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <main>
        <HeroSection />
        <FeaturedArticle />
        <StatsSection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
}
