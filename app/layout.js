// app/layout.js
import "./globals.css";

export const metadata = {
  title: "TokMe - TikTok Video Downloader (No Watermark)",
  description:
    "Fast, free TikTok video downloader. Download TikTok videos in HD without watermark on mobile or desktop.",
  other: {
    "google-site-verification": "sOKRH3WPEivr0fLAmVTuuFHy_dBBAub3R5A9nqPQcNo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VM46VZW4NC"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VM46VZW4NC');
            `,
          }}
        />
      </head>

      <body className="min-h-screen bg-white text-neutral-900">
        <div className="bg-white flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
