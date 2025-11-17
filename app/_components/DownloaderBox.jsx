"use client";

import { useState } from "react";

export default function DownloaderBox() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [videoData, setVideoData] = useState(null);

    async function handleDownload() {
        setError("");
        setVideoData(null);

        if (!url.trim()) {
            setError("Please paste a valid TikTok link.");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/download", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Failed to fetch video. Try again.");
                return;
            }

            // This matches what route.js returns: { title, thumbnail, noWatermark, hd }
            setVideoData(data);
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full max-w-xl mx-auto text-center">
            {/* Input */}
            <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste TikTok video URL here..."
                className="w-full px-4 py-3 rounded-full border border-neutral-300 text-sm outline-none focus:ring-2 focus:ring-pink-500"
            />

            {/* Button */}
            <button
                onClick={handleDownload}
                disabled={loading}
                className="mt-4 w-full bg-pink-600 text-white py-3 rounded-full font-semibold active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? "Processing..." : "Download Now"}
            </button>

            {/* Error */}
            {error && <p className="mt-3 text-red-500 text-sm">{error}</p>}

            {/* Result */}
            {videoData && (
                <div className="mt-5 p-4 rounded-lg bg-neutral-100 text-sm text-left">
                    {videoData.title && (
                        <p className="font-semibold mb-2 line-clamp-2">
                            {videoData.title}
                        </p>
                    )}

                    {videoData.thumbnail && (
                        <div className="mb-3 h-32 w-full overflow-hidden rounded-xl bg-neutral-200">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={videoData.thumbnail}
                                alt="Video thumbnail"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}

                    <p className="font-semibold mb-2 text-center">Download Links:</p>

                    <div className="flex flex-col gap-2">
                        {videoData.noWatermark && (
                            <a
                                href={videoData.noWatermark}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-full border border-pink-600 bg-white px-4 py-2 text-center text-xs font-semibold text-pink-600 shadow-sm hover:bg-pink-50"
                            >
                                📥 HD No Watermark
                            </a>
                        )}

                        {videoData.hd && (
                            <a
                                href={videoData.hd}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-full border border-pink-800 bg-pink-600 px-4 py-2 text-center text-xs font-semibold shadow-sm hover:bg-pink-400"
                            >
                                📥 HD With Watermark
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
