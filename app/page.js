import DownloaderBox from "@/app/_components/DownloaderBox";

export default function HomePage() {
  return (
      <>
        {/* Header */}
        <header className="w-full bg-white border-b border-neutral-200">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <div className="text-lg font-bold">
              <span className="text-pink-600">Tok</span>
              <span className="text-neutral-900">Me</span>
            </div>
            <nav className="text-sm">
              <a href="/contact" className="text-neutral-700 hover:text-pink-600">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">
          {/* Hero + Downloader */}
          <section className="border-b border-neutral-100 bg-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10">
              {/* Top ad placeholder */}
              <div className="mb-2 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-4 py-6 text-center text-xs text-neutral-400">
                AD SPACE - TOP
              </div>

              {/* Title & subtitle */}
              <div className="text-center">
                <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                  TikTok Video Downloader{" "}
                  <span className="text-pink-600">(No Watermark)</span>
                </h1>
                <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                  Fast, free, HD downloads. Paste your TikTok link below.
                </p>
              </div>

              {/* Downloader box (all logic lives inside this component) */}
              <div className="max-w-xl mx-auto w-full">
                <DownloaderBox />
              </div>

              {/* Bottom ad placeholder */}
              <div className="mt-6 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-4 py-6 text-center text-xs text-neutral-400">
                AD SPACE - BOTTOM
              </div>
            </div>
          </section>

          {/* Feature badges */}
          <section className="border-b border-neutral-100 bg-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row">
              <FeatureCard
                  title="No Watermark"
                  text="Clean videos without TikTok logo."
              />
              <FeatureCard
                  title="HD Quality"
                  text="Download in the highest quality available."
              />
              <FeatureCard
                  title="100% Free"
                  text="No registration or payment required."
              />
            </div>
          </section>

          {/* SEO content sections */}
          <section className="border-b border-neutral-100 bg-white">
            <div className="mx-auto max-w-5xl px-4 py-10 space-y-8 text-sm leading-relaxed text-neutral-700">
              <div>
                <h2 className="text-xl font-bold">How to Download TikTok Videos</h2>
                <p className="mt-2">
                  Downloading TikTok videos with TokMe is incredibly simple and takes
                  just a few steps. First, open the TikTok app on your device and find
                  the video you want to save. Tap the share button and copy the video
                  link to your clipboard. Next, return to TokMe and paste the copied
                  link into the input box at the top of this page. Finally, click the
                  &quot;Download Now&quot; button and choose your preferred quality —
                  HD without watermark or standard HD. Your video will be ready to
                  download instantly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">Features of TokMe</h2>
                <p className="mt-2">
                  TokMe is built for speed, simplicity, and reliability. You don&apos;t
                  need to install any software, create an account, or provide personal
                  details. Our downloader works directly in your browser and is fully
                  optimized for mobile devices, so you can save videos on the go.
                  Whether you&apos;re collecting clips for inspiration, reposting
                  content, or saving memories, TokMe makes the process fast and
                  hassle-free.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold">Supported Formats</h2>
                <p className="mt-2">
                  All videos downloaded through TokMe are delivered in MP4 format,
                  which is compatible with virtually every device and video player.
                  When available, you can choose between HD no watermark or standard
                  HD quality. This ensures your saved videos look sharp while keeping
                  file sizes reasonable for mobile storage and sharing.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="border-b border-neutral-100 bg-white">
            <div className="mx-auto max-w-5xl px-4 py-10 text-sm leading-relaxed text-neutral-700">
              <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-4">
                <FAQItem
                    q="Is TokMe free to use?"
                    a="Yes, TokMe is completely free with no hidden costs, subscriptions, or premium tiers. Download unlimited videos at no charge."
                />
                <FAQItem
                    q="Do I need to install any software?"
                    a="No installation is required. TokMe works directly in your browser on any device."
                />
                <FAQItem
                    q="Can I download videos without watermarks?"
                    a="Yes. When available, TokMe provides an HD no watermark option so you can save clean videos without the TikTok logo."
                />
                <FAQItem
                    q="Is it safe to use TokMe?"
                    a="Yes. We don't require registration, and we don't store your download history or personal information."
                />
              </div>

              {/* Ad placeholder */}
              <div className="mt-8 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-4 py-6 text-center text-xs text-neutral-400">
                AD SPACE - BOTTOM
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 text-sm text-neutral-600 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-base font-semibold">
                <span className="text-pink-600">Tok</span>Me
              </div>
              <p className="mt-1 max-w-xs text-xs">
                Fast, free TikTok video downloader. Download videos in HD without
                watermark.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Legal
              </h3>
              <ul className="mt-2 space-y-1 text-xs">
                <li>
                  <a href="/terms" className="hover:text-pink-600">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-pink-600">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Support
              </h3>
              <ul className="mt-2 space-y-1 text-xs">
                <li>
                  <a href="/contact" className="hover:text-pink-600">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-100 bg-neutral-50">
            <div className="mx-auto max-w-5xl px-4 py-3 text-center text-[11px] text-neutral-500">
              © {new Date().getFullYear()} TokMe. All rights reserved.
            </div>
          </div>
        </footer>
      </>
  );
}

function FeatureCard({ title, text }) {
  return (
      <div className="flex-1 rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
        <div className="mx-auto mb-2 h-8 w-8 rounded-full border border-pink-200 bg-pink-50 text-pink-600" />
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-neutral-600">{text}</p>
      </div>
  );
}

function FAQItem({ q, a }) {
  return (
      <div>
        <p className="font-semibold">{q}</p>
        <p className="mt-1 text-neutral-600">{a}</p>
      </div>
  );
}
