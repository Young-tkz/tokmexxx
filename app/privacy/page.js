export const metadata = {
    title: "Privacy Policy | TokMe",
};

export default function PrivacyPage() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 text-sm leading-relaxed text-neutral-800">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

            <h2 className="mt-4 text-lg font-semibold">1. Information We Collect</h2>
            <p className="mt-1">
                TokMe does not require registration or collect personal information to use
                our service. We may collect non-personal data such as browser type,
                operating system, anonymized IP address, pages visited, and general
                geographic location to improve our service.
            </p>

            <h2 className="mt-4 text-lg font-semibold">2. How We Use Information</h2>
            <p className="mt-1">
                We use this information solely to analyze usage patterns, maintain and
                improve website performance, and prevent abuse or security issues.
            </p>

            <h2 className="mt-4 text-lg font-semibold">3. Video Downloads</h2>
            <p className="mt-1">
                When you download a video through TokMe, we do not store the video on our
                servers and we do not keep a record of the content you download. All
                processing is performed only for the duration of your request.
            </p>

            <h2 className="mt-4 text-lg font-semibold">
                4. Copyright and Intellectual Property
            </h2>
            <p className="mt-1">
                You are responsible for ensuring you have the right to download and use any
                content. TokMe does not own or claim any rights to TikTok content. All
                rights remain with their respective owners.
            </p>

            <h2 className="mt-4 text-lg font-semibold">5. Changes to This Policy</h2>
            <p className="mt-1">
                We may update this Privacy Policy from time to time. Any changes will be
                posted on this page. Your continued use of TokMe after changes are posted
                constitutes acceptance of the updated policy.
            </p>
        </main>
    );
}
