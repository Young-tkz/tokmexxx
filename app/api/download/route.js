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

        const apiUrl =
            `https://tiktok-video-no-watermark2.p.rapidapi.com/?url=${encodeURIComponent(url)}`;

        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
                "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data?.message || "API error" },
                { status: 400 }
            );
        }

        // Format frontend data
        return NextResponse.json({
            title: data?.data?.title || "",
            thumbnail: data?.data?.cover || "",
            noWatermark: data?.data?.play || "",
            hd: data?.data?.wmplay || "",
        });

    } catch (err) {
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
