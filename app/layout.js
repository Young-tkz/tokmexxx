// app/layout.js
import "./globals.css"
export const metadata = {
    title: "TokMe - TikTok Video Downloader (No Watermark)",
    description:
        "Fast, free TikTok video downloader. Download TikTok videos in HD without watermark on mobile or desktop.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-white text-neutral-900">
        <div className="bg-white flex min-h-screen flex-col">
            {children}
        </div>
        </body>
        </html>
    );
}
