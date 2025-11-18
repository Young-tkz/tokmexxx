import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json(
                { error: "No URL provided." },
                { status: 400 }
            );
        }

        // 🔍 Debug: check env vars on the server
        console.log("RAPIDAPI_KEY present?", !!process.env.RAPIDAPI_KEY);
        console.log("RAPIDAPI_HOST:", process.env.RAPIDAPI_HOST);

        if (!process.env.RAPIDAPI_KEY || !process.env.RAPIDAPI_HOST) {
            return NextResponse.json(
                { error: "Server configuration error: missing API credentials." },
                { status: 500 }
            );
        }

        const apiUrl = `https://tiktok-video-no-watermark2.p.rapidapi.com/?url=${encodeURIComponent(
            url
        )}`;

        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
                "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
            },
        });

        const data = await response.json();

        // 🔍 Debug: log status and any error message from RapidAPI
        console.log("RapidAPI status:", response.status);
        console.log("RapidAPI raw response snippet:", JSON.stringify(data).slice(0, 300));

        if (!response.ok) {
            return NextResponse.json(
                { error: data?.message || "API error" },
                { status: 400 }
            );
        }

        // ✅ Format data for the frontend
        return NextResponse.json({
            title: data?.data?.title || "",
            thumbnail: data?.data?.cover || "",
            noWatermark: data?.data?.play || "",
            hd: data?.data?.wmplay || "",
        });
    } catch (err) {
        console.error("Server error in /api/download:", err);
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
