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
          <Link href="/news" className="text-base font-bold text-blue-700 transition-colors">
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

export default function NewsPage() {
  const articles = [
    {
      title: "Who 'Really' Took the #1 Spot for Weight Loss in 2026?",
      excerpt: "An independent medical review about Ozempic, diets, and the new alternative doctors are quietly recommending.",
      date: "January 2026",
      featured: true,
      link: "/lander"
    },
    {
      title: "New Study Reveals GLP-1 Medications Show Promise for Long-Term Weight Management",
      excerpt: "Recent research from leading medical institutions demonstrates the effectiveness of medically-supervised GLP-1 programs.",
      date: "December 2025",
      featured: false,
      link: "#"
    },
    {
      title: "Obesity Rates Continue to Rise: What This Means for American Health",
      excerpt: "CDC data shows obesity affecting over 42% of adults. Our organization responds with expanded programs.",
      date: "November 2025",
      featured: false,
      link: "#"
    },
    {
      title: "Telehealth Revolution Makes Weight Loss Programs More Accessible",
      excerpt: "Remote medical supervision is breaking down barriers to effective weight management across America.",
      date: "October 2025",
      featured: false,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <main>
        <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                News & Updates
              </h1>
              <p className="text-lg font-semibold text-slate-700 sm:text-xl">
                Latest developments in the fight against obesity in America
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {articles.map((article, index) => (
                <article key={index} className={`border-b-2 border-slate-200 pb-8 ${article.featured ? 'bg-blue-50 p-6 rounded-lg' : ''}`}>
                  {article.featured && (
                    <div className="mb-4 inline-block bg-emerald-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                      Featured Article
                    </div>
                  )}
                  <div className="mb-2 text-sm font-bold text-slate-500">{article.date}</div>
                  <h2 className="mb-4 text-2xl font-black text-slate-900 sm:text-3xl">
                    {article.featured ? (
                      <Link href={article.link} className="hover:text-blue-700 transition-colors">
                        {article.title}
                      </Link>
                    ) : (
                      article.title
                    )}
                  </h2>
                  <p className="mb-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                    {article.excerpt}
                  </p>
                  {article.featured && (
                    <Link href={article.link} className="inline-block bg-blue-700 px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-blue-800 transition-all">
                      Read Full Article →
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
