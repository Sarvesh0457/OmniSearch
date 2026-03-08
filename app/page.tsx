"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";

export default function Page() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const trimmedQuery = query.trim();
  const hasQuery = trimmedQuery.length > 0;

  const encodedQuery = useMemo(() => encodeURIComponent(trimmedQuery), [trimmedQuery]);
  const instagramTag = useMemo(
    () => encodeURIComponent(trimmedQuery.replace(/\s+/g, "")),
    [trimmedQuery],
  );

  const searchLinks = [
    { name: "Google", href: `https://www.google.com/search?q=${encodedQuery}` },
    { name: "YouTube", href: `https://www.youtube.com/results?search_query=${encodedQuery}` },
    { name: "Reddit", href: `https://www.reddit.com/search/?q=${encodedQuery}` },
    { name: "GitHub", href: `https://github.com/search?q=${encodedQuery}` },
    { name: "X", href: `https://twitter.com/search?q=${encodedQuery}` },
    { name: "Instagram", href: `https://www.instagram.com/explore/tags/${instagramTag}` },
    { name: "Pinterest", href: `https://www.pinterest.com/search/pins/?q=${encodedQuery}` },
    { name: "Telegram", href: `https://t.me/s/${encodedQuery}` },
    { name: "Amazon", href: `https://www.amazon.com/s?k=${encodedQuery}` },
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.16),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.12),transparent_36%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex min-h-screen flex-col items-center justify-center py-24 text-center"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-zinc-800/90 bg-zinc-900/70 px-3 py-1 text-xs tracking-wide text-zinc-300">
            One query. Any platform.
          </div>

          <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Omni Search
          </h1>

          <p className="mt-5 text-lg text-zinc-300 sm:text-xl">Search the entire internet from one place.</p>

          <p className="mt-3 max-w-2xl text-sm text-zinc-500 sm:text-base">
            Instantly search across Google, YouTube, Reddit, GitHub, X, and more without
            switching tabs.
          </p>

          <div className="mt-10 w-full max-w-3xl">
            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/70 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_70px_rgba(0,0,0,0.55)] backdrop-blur">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type something like: docker tutorial"
                className="h-14 w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-5 text-base text-zinc-100 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-zinc-700 focus:bg-zinc-950 sm:text-lg"
              />
            </div>

            <AnimatePresence>
              {hasQuery && (
                <motion.div
                  key="platform-buttons"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="mt-5 flex flex-wrap justify-center gap-3"
                >
                  {searchLinks.map((platform) => (
                    <motion.a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800/80 hover:text-white"
                    >
                      Search on {platform.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        <section className="pb-24">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Built for faster discovery</h2>
            <p className="mt-3 text-zinc-400">Minimal by design, powerful in daily use.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.18 }}
              className="rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-6 shadow-[0_0_40px_rgba(59,130,246,0.08)]"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-sm text-zinc-300">
                S
              </div>
              <h3 className="text-lg font-medium text-white">Search Everywhere</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Search across your favorite platforms instantly from one search box.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.18 }}
              className="rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-6 shadow-[0_0_40px_rgba(16,185,129,0.08)]"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-sm text-zinc-300">
                T
              </div>
              <h3 className="text-lg font-medium text-white">Save Time</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Stop opening multiple tabs and repeating the same search again and again.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.18 }}
              className="rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-6 shadow-[0_0_40px_rgba(168,85,247,0.08)]"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-sm text-zinc-300">
                F
              </div>
              <h3 className="text-lg font-medium text-white">Simple and Fast</h3>
              <p className="mt-2 text-sm text-zinc-400">Type once and choose where you want to search.</p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Supported platforms</h2>
            <p className="mt-3 text-zinc-400">Everything you use, right where you need it.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[
              "Google",
              "YouTube",
              "Reddit",
              "GitHub",
              "X (Twitter)",
              "Instagram",
              "Pinterest",
              "Telegram",
              "Amazon",
            ].map((platform) => (
              <motion.div
                key={platform}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.16 }}
                className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-center text-sm text-zinc-300 shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:border-zinc-600 hover:text-zinc-100"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.55)]">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Start searching smarter.</h2>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => inputRef.current?.focus()}
              className="mt-6 rounded-full border border-zinc-700 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
            >
              Launch Omni Search
            </motion.button>
          </div>
        </section>

        <footer className="border-t border-zinc-800/80 py-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-medium text-white">Omni Search</p>
              <p className="mt-1 text-sm text-zinc-500">Search everything faster.</p>
            </div>
            <div className="flex items-center gap-5 text-sm text-zinc-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-100"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-100"
              >
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
