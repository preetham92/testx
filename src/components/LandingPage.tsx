"use client";

import { SignInButton } from "@clerk/nextjs";
import {
    Atom,
    Calendar,
    Code2,
    Cpu,
    Layout,
    PlayCircle,
    Video
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-emerald-500/30 ">
      {/* BACKGROUND GRADIENT & GRID */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 h-full w-full bg-[#080808] bg-[linear-gradient(to_right,#2b2b2b06_1px,transparent_1px),linear-gradient(to_bottom,#2b2b2b06_1px,transparent_1px)] bg-[size:16px_28px]"
      >
        <div className="absolute left-1/2 top-10 -z-10 -translate-x-1/2 h-[360px] w-[360px] rounded-full bg-emerald-500 opacity-14 blur-[100px]"></div>
      </div>

      {/* NAVBAR */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link
  href="/"
  className="flex items-center gap-3 font-semibold text-2xl mr-6 font-mono hover:opacity-90 transition-opacity"
>
  <div className="rounded-lg p-1.5 bg-gradient-to-br from-emerald-500 via-teal-700 to-cyan-900 shadow-lg">
    <Atom className="w-8 h-8 text-gray-50" />
  </div>

  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-700 to-cyan-900 font-bold">
    TestX
  </span>
</Link>

        <div className="hidden md:flex items-center gap-4">
          <SignInButton mode="modal">
            <button
              aria-label="Sign in"
              className="text-sm font-semibold text-gray-300 hover:text-white transition"
            >
              Sign in
            </button>
          </SignInButton>
          <SignInButton mode="modal">
            <button
              aria-label="Get started"
              className="ml-2 rounded-lg bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition"
            >
              Get started
            </button>
          </SignInButton>
        </div>

        <div className="md:hidden">
          <SignInButton mode="modal">
            <button className="rounded-lg bg-white text-black px-3 py-2 text-sm font-semibold hover:bg-gray-200 transition">
              Get started
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO */}
      <main className="container mx-auto px-6 pt-16 pb-28 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/8 text-sm text-emerald-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Live platform · built for real interviews
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Run high-quality technical interviews with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-500">
              live code + video
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            TestX combines a multi-language live editor, low-latency video & screen sharing,
            recording and interview management,so teams can evaluate candidates faster and fairly.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <SignInButton mode="modal">
              <button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-700 to-cyan-900 text-white font-bold text-lg shadow-lg hover:opacity-95 transition transform hover:-translate-y-0.5"
                aria-label="Start interviewing"
              >
                Start interviewing
              </button>
            </SignInButton>

            <Link href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/8 text-sm text-gray-200 hover:bg-white/3 transition">
              Explore features
            </Link>
          </div>

          {/* Quick bullets */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 text-emerald-400" aria-hidden />
              <span>Low-latency video & screen sharing</span>
            </div>
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-teal-400" aria-hidden />
              <span>Monaco editor (JS, Python, Java)</span>
            </div>
            <div className="flex items-center gap-3">
              <PlayCircle className="w-5 h-5 text-cyan-400" aria-hidden />
              <span>Recording & playback</span>
            </div>
          </div>
        </div>
</main>
        {/* HOW IT WORKS */}
      <section id="how" className="container mx-auto px-6 pb-16">
        <div className="rounded-2xl p-8 bg-white/3 border border-white/6">
          <h3 className="text-2xl font-semibold mb-4">How TestX works (quick)</h3>

          <div className="grid gap-6 sm:grid-cols-3">
            <HowStep number={1} title="Schedule or create" desc="Create a scheduled interview or start an instant call and invite candidate(s)." />
            <HowStep number={2} title="Live interview" desc="Use the built-in editor and Stream video to collaborate in real-time and record sessions." />
            <HowStep number={3} title="Review & evaluate" desc="Watch recordings, add comments, and mark candidate outcomes in the admin dashboard." />
          </div>
        </div>
      </section>
        

      {/* FEATURES */}
      <section id="features" className="container mx-auto px-6 pb-16">
        <h3 className="text-2xl font-semibold mb-3">Core features</h3>
        <p className="text-gray-300 max-w-2xl mb-8">Everything you need to run modern technical interviews — from scheduling to feedback and recordings.</p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Video className="w-6 h-6 text-emerald-400" />}
            title="Low-latency video"
            description="High quality video and screen sharing with reactions and moderator controls."
          />
          <FeatureCard
            icon={<Code2 className="w-6 h-6 text-teal-400" />}
            title="Monaco editor"
            description="VS Code-like editor with syntax highlighting, autocomplete and starter templates."
          />
          <FeatureCard
            icon={<PlayCircle className="w-6 h-6 text-cyan-400" />}
            title="Recording & playback"
            description="Automatic session recording — play back code + audio to review candidate performance."
          />
          <FeatureCard
            icon={<Calendar className="w-6 h-6 text-amber-400" />}
            title="Scheduling"
            description="Schedule interviews with calendar integration, reminders and availability checks."
          />
          <FeatureCard
            icon={<Layout className="w-6 h-6 text-teal-300" />}
            title="Resizable workspace"
            description="Drag to resize the participants panel and editor for customizable interview layouts."
          />
          <FeatureCard
            icon={<Cpu className="w-6 h-6 text-indigo-400" />}
            title="Admin & evaluations"
            description="Update statuses, add comments and evaluate candidates after each session."
          />
        </div>
      </section>

     

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-xl p-8 bg-gradient-to-r from-emerald-600/8 to-cyan-600/6 border border-white/6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold">Ready to modernize your technical interviews?</h4>
            <p className="text-gray-300 mt-1">Try TestX for free — get setup in minutes and run your first interview today.</p>
          </div>

          <div className="flex gap-3">
            <SignInButton mode="modal">
              <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition">Get started</button>
            </SignInButton>
            <Link href="/docs" className="px-5 py-3 rounded-lg border border-white/8 text-sm text-gray-200 hover:bg-white/3 transition flex items-center gap-2">
              Read docs
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/6">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} TestX. Built with ❤️ — Stream · Convex · Clerk</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/docs" className="hover:text-white">Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Small reusable components */

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/4 border border-white/6 hover:border-emerald-500/30 transition">
      <div className="mb-4 p-3 rounded-xl bg-black/30 w-fit">{icon}</div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}

function HowStep({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <div className="p-4 rounded-lg bg-black/20 border border-white/6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-md bg-white/6 flex items-center justify-center font-semibold text-sm">{number}</div>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  );
}
