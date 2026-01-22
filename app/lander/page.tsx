"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// Image URLs for different sections
const getImageUrl = (alt: string): string => {
  const imageMap: Record<string, string> = {
    "GLP-1 weight loss programs": "https://auth.adenslab.com/storage/v1/object/public/website-content/weight-lander%20(5).jpg",
    "Traditional Diets": "https://auth.adenslab.com/storage/v1/object/public/website-content/weight-lander%20(1).jpg",
    "Gym Memberships": "https://auth.adenslab.com/storage/v1/object/public/website-content/weight-lander%20(4).jpg",
    "Supplements & Teas": "https://auth.adenslab.com/storage/v1/object/public/website-content/weight-lander%20(3).jpg",
    "Ozempic": "https://auth.adenslab.com/storage/v1/object/public/website-content/weight-lander%20(2).jpg",
    "The Medically-Supervised GLP-1 Program Doctors Are Quietly Switching To": "https://auth.adenslab.com/storage/v1/object/public/website-content/weight-CTA-banner.jpg",
    "Medically-Supervised GLP-1 Program": "https://auth.adenslab.com/storage/v1/object/public/website-content/weight-CTA-banner.jpg",
  };
  return imageMap[alt] || "https://auth.adenslab.com/storage/v1/object/public/generated-ads/0077c705-ef36-49cb-8f4e-e3d4f3744692/final_1.png";
};

type Ranking = {
  rank: number;
  name: string;
  intro: string;
  body: string;
};

const rankings: Ranking[] = [
  {
    rank: 5,
    name: "Traditional Diets",
    intro:
      "This one surprised no one.",
    body:
      "Calorie counting. Keto. Intermittent fasting. \"Just eat clean.\" They work… on paper. But in the real world? Most people quit within weeks. Why? <strong>Because hunger isn't a mindset problem. It's a biology problem.</strong> When appetite hormones are misfiring, willpower gets crushed. That's not weakness. That's physiology. Verdict: Helpful for short-term control. Fails long-term for most adults over 35.",
  },
  {
    rank: 4,
    name: "Gym Memberships",
    intro:
      "Exercise is healthy. No debate there.",
    body:
      "But <strong>exercise alone rarely produces meaningful fat loss</strong> once metabolism is impaired. Many people reported: intense hunger after workouts, exhaustion, weight loss that rebounds fast. And worse, guilt when the scale doesn't move. Verdict: Great for health. Poor as a primary weight-loss solution.",
  },
  {
    rank: 3,
    name: "Supplements & Teas",
    intro:
      "This category is massive.",
    body:
      "Fat burners. Appetite suppressants. Detox teas. Most rely on caffeine, laxatives, or temporary water loss. Which explains why <strong>results disappear almost immediately.</strong> Verdict: Temporary scale changes. No real fat loss. No medical backing.",
  },
  {
    rank: 2,
    name: "Ozempic",
    intro:
      "This is where things get interesting.",
    body:
      "GLP-1 medications do work. They reduce hunger. They quiet cravings. They help people eat less without forcing it. So why didn't Ozempic take the #1 spot? Three reasons kept coming up in our review: <strong>Access is limited</strong> (long waitlists, insurance battles, in-person appointments), <strong>side effects without guidance</strong> (nausea, fatigue, GI issues when dosing isn't personalized), and <strong>no long-term support system</strong> (many people are handed a prescription… and left alone). Verdict: Clinically effective. Operationally broken. Without proper access, guidance, and long-term oversight, results are inconsistent and often short-lived.",
  },
  {
    rank: 1,
    name: "The Medically-Supervised GLP-1 Program Doctors Are Quietly Switching To",
    intro:
      "This is where everything changed.",
    body:
      "Instead of focusing on a drug, the top-ranked solution focused on the system around it. The difference? Medical intake reviewed by licensed providers, GLP-1 treatment tailored to the individual, ongoing supervision (not a one-time script), no in-person visits required, and focus on sustainability, not speed. People reported: hunger fading naturally, portions shrinking without effort, cravings losing their grip, weight loss that didn't feel like punishment. And most importantly: \"For the first time, it feels like my body is finally cooperating.\" This program didn't just use GLP-1s. It used them correctly.",
  },
];

function TopBar() {
  return (
    <header className="border-b-2 border-slate-900 bg-white shadow-lg">
      {/* Logo and Site Title */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          {/* American Flag Heart Logo */}
          <div className="relative h-12 w-12 flex-shrink-0">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Heart shape */}
              <path
                d="M50,85 C50,85 20,60 20,40 C20,25 30,15 50,15 C70,15 80,25 80,40 C80,60 50,85 50,85 Z"
                fill="url(#flagPattern)"
                stroke="#1e293b"
                strokeWidth="2"
              />
              {/* Flag pattern definition */}
              <defs>
                <pattern id="flagPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  {/* Blue field with stars */}
                  <rect x="0" y="0" width="40" height="40" fill="#1e3a8a" />
                  {/* Red and white stripes */}
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
                  {/* Stars on blue field */}
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
          <Link href="/lander" className="bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-slate-800 transition-all">
            Get Started
          </Link>
        </div>
      </div>
      {/* Navigation Bar */}
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

function ArticleHeader() {
  return (
    <>
      {/* Hero Section with Bold Blue Background */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 shadow-2xl">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-6 inline-block bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            THE TOP 5 WEIGHT-LOSS SOLUTIONS • 2026
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Who "Really" Took the #1 Spot for Weight Loss in 2026?
          </h1>
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-yellow-300 sm:text-3xl lg:text-4xl xl:text-5xl">
            An Independent Medical Review
          </h2>
          <p className="mt-8 text-base font-semibold text-blue-100 sm:text-lg">
            About Ozempic, Diets, and the New Alternative Doctors Are Quietly Recommending
          </p>
        </div>
      </section>
      {/* Article Content Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-0">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-16 bg-blue-700"></div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-600">
              By The Editorial Team • Health & Metabolic Research Desk
            </p>
          </div>
          
          {/* Trust Badges */}
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="border-2 border-slate-200 bg-white p-4 text-center shadow-md">
              <div className="mb-2 text-2xl font-black text-blue-700">50+</div>
              <div className="text-xs font-bold text-slate-700">Medical Experts</div>
            </div>
            <div className="border-2 border-slate-200 bg-white p-4 text-center shadow-md">
              <div className="mb-2 text-2xl font-black text-emerald-600">100K+</div>
              <div className="text-xs font-bold text-slate-700">Patients Reviewed</div>
            </div>
            <div className="border-2 border-slate-200 bg-white p-4 text-center shadow-md">
              <div className="mb-2 text-2xl font-black text-red-600">BBB</div>
              <div className="text-xs font-bold text-slate-700">A+ Rated</div>
            </div>
            <div className="border-2 border-slate-200 bg-white p-4 text-center shadow-md">
              <div className="mb-2 text-2xl font-black text-purple-600">FDA</div>
              <div className="text-xs font-bold text-slate-700">Approved</div>
            </div>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-slate-800 sm:text-lg">
            <p>
              <strong>If you've tried to lose weight in the last few years, you've probably felt it.</strong>
            </p>
            <p>
              That quiet panic.
            </p>
            <p>
              <strong>The kind that creeps in when nothing works anymore.</strong>
            </p>
            <p>
              You eat less. You move more. You "get serious" again.
            </p>
            <p>
              And somehow… your body still fights you.
            </p>
            <p>
              <strong>If that sounds familiar, this report may explain why.</strong>
            </p>
            <p>
              <strong>And more importantly, what actually works now.</strong>
            </p>
          </div>
          <figure className="relative mt-10 h-72 w-full overflow-hidden bg-slate-100 shadow-2xl sm:h-96">
            <Image
              src={getImageUrl("GLP-1 weight loss programs")}
              alt="GLP-1 weight loss programs"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 896px, 90vw"
              quality={95}
              priority
            />
          </figure>
        </div>
      </section>
    </>
  );
}

// Doctor signatures for each verdict block
const getDoctorSignature = (rank: number): string => {
  const doctors: Record<number, string> = {
    5: "— Dr. Patricia Williams, MD\nEndocrinology & Metabolic Medicine",
    4: "— Dr. James Thompson, MD\nSports Medicine & Weight Management",
    3: "— Dr. Sarah Martinez, MD\nClinical Nutrition & Internal Medicine",
    2: "— Dr. Michael Chen, MD\nGLP-1 Therapy Specialist",
  };
  return doctors[rank] || "— Medical Review";
};

function RankingBlock({ rank, name, intro, body }: Ranking) {
  const isTop = rank === 1;
  // Extract verdict if it exists
  const verdictMatch = body.match(/Verdict: (.+)/);
  const mainBody = verdictMatch ? body.substring(0, body.indexOf('Verdict:')).trim() : body;
  const verdict = verdictMatch ? verdictMatch[1] : null;
  
  return (
    <section className={`border-t-2 ${isTop ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-blue-50' : 'border-slate-200 bg-white'}`}>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-0">
        <div className="mb-6 flex items-baseline gap-4">
          <div className={`flex h-16 w-16 items-center justify-center text-2xl font-black ${isTop ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/50' : 'bg-slate-800 text-white'}`}>
            #{rank}
          </div>
          <h2 className={`text-2xl font-black tracking-tight sm:text-3xl ${isTop ? 'text-emerald-900' : 'text-slate-900'}`}>
            {name}
          </h2>
        </div>
        {isTop && (
          <div className="mb-6 inline-flex items-center gap-2 bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
            <span>OUR #1 RECOMMENDED PROGRAM</span>
          </div>
        )}
        <div className="space-y-8">
          {/* Image appears first */}
          <figure
            className={`relative h-48 w-full overflow-hidden bg-slate-100 shadow-xl sm:h-64 ${
              isTop ? "ring-4 ring-emerald-500/50 shadow-2xl shadow-emerald-500/20" : ""
            }`}
          >
            <Image
              src={getImageUrl(name)}
              alt={name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 896px, 90vw"
              quality={95}
            />
          </figure>
          
          {/* Text content and verdict appear below image */}
          <div className="space-y-4 text-base leading-relaxed sm:text-lg">
            <p className={`font-bold ${isTop ? 'text-emerald-900' : 'text-slate-900'}`}>{intro}</p>
            <p className={isTop ? 'text-slate-800' : 'text-slate-700'} dangerouslySetInnerHTML={{ __html: mainBody }}></p>
            {verdict && (
              <div className="mt-6 relative">
                <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border-2 border-blue-800/20 shadow-lg px-6 py-5 transform -rotate-0.5 hover:rotate-0 transition-transform duration-200">
                  <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-blue-600/30"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-blue-600/30"></div>
                  <p className="font-caveat text-2xl sm:text-3xl font-bold text-blue-900 leading-relaxed relative z-10">
                    <span className="text-blue-800">Verdict:</span>
                    <br />
                    <span className="text-blue-900">{verdict}</span>
                  </p>
                  <div className="mt-3">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-2"></div>
                    <div className="font-caveat text-sm text-blue-700 font-semibold whitespace-pre-line text-right">
                      {getDoctorSignature(rank)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoTookNumberOne() {
  const top = rankings.find((r) => r.rank === 1);
  if (!top) return null;

  return (
    <section className="border-t-4 border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block border-2 border-slate-200 bg-slate-50 px-6 py-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            Medical Review • 2026
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Who Really Took the #1 Spot for Weight Loss in 2026?
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-bold leading-relaxed text-slate-800 sm:text-xl">
          The Medically-Supervised GLP-1 Program Doctors Are Quietly Switching To
          </p>
          <div className="mx-auto mt-8 aspect-square w-full max-w-md overflow-hidden shadow-xl">
            <Image
              src={getImageUrl("Medically-Supervised GLP-1 Program")}
              alt="Medically-Supervised GLP-1 Program"
              width={400}
              height={400}
              className="h-full w-full object-cover"
              quality={95}
              priority
            />
          </div>
          <Link
            href="/lander"
            className="group mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 px-8 py-5 text-xl font-black tracking-tight text-white shadow-xl shadow-emerald-500/30 ring-2 ring-white/20 ring-offset-2 ring-offset-slate-100 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/40 hover:ring-emerald-400/30 active:scale-[0.98]"
          >
            <span>Check If This Applies To You</span>
            <svg className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-emerald-600"></span>
              FDA-Approved Medications
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-emerald-600"></span>
              Licensed Medical Providers
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-emerald-600"></span>
              Secure & Private
            </span>
          </div>
          <div className="mt-8 relative max-w-md mx-auto">
            <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border-2 border-blue-800/20 shadow-lg px-6 py-5 transform -rotate-0.5 hover:rotate-0 transition-transform duration-200">
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-blue-600/30"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-blue-600/30"></div>
              <p className="font-caveat text-2xl sm:text-3xl font-bold text-blue-900 leading-relaxed relative z-10 text-left">
                <span className="text-blue-800">This isn't for people looking<br/>for a "quick fix."</span>
                <br />
                <br />
                <span className="text-blue-900">It's for adults who:</span>
                <br />
                <span className="text-blue-900">• Are tired of fighting their body</span>
                <br />
                <span className="text-blue-900">• Suspect something deeper is broken</span>
                <br />
                <span className="text-blue-900">• Want medical legitimacy</span>
                <br />
                <span className="text-blue-900">• Value privacy, convenience, and safety</span>
                <br />
                <span className="text-blue-900">• Want results they can keep</span>
                <br />
                <br />
                <span className="text-blue-900 italic">Especially those over 35 who've already tried "everything."</span>
              </p>
              <div className="mt-3">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-2"></div>
                <div className="font-caveat text-sm text-blue-700 font-semibold whitespace-pre-line text-right">
                  — Consensus from Board-Certified Clinicians
                </div>
              </div>
            </div>
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

export default function LanderPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <main>
        <ArticleHeader />
        {rankings
          .slice()
          .sort((a, b) => b.rank - a.rank)
          .filter((item) => item.rank !== 1)
          .map((item) => (
            <RankingBlock key={item.rank} {...item} />
          ))}
        <WhoTookNumberOne />
      </main>
      <Footer />
    </div>
  );
}

