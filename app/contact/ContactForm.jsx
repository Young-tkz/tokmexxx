"use client";

import { useState } from "react";

export default function ContactForm() {
    const [sent, setSent] = useState(false);

    return (
        <div className="mx-auto w-full max-w-xl rounded-2xl bg-white">
            <div className="mb-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                    <span className="text-2xl">✉️</span>
                </div>
                <h1 className="text-2xl font-bold">Contact Us</h1>
                <p className="mt-1 text-sm text-neutral-600">
                    Have questions or feedback? We&apos;d love to hear from you.
                </p>
            </div>

            <form
                action="https://formsubmit.co/twclouds81@gmail.com"
                method="POST"
                onSubmit={() => setSent(true)}
                className="space-y-4"
            >
                {/* --- FormSubmit settings --- */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input
                    type="hidden"
                    name="_next"
                    value="https://tokme.site/contact?success=true"
                />

                <div>
                    <label className="block text-xs font-semibold text-neutral-600">
                        Name
                    </label>
                    <input
                        name="name"
                        className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-neutral-600">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                        placeholder="you@email.com"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-neutral-600">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-neutral-600 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                        placeholder="How can we help?"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-pink-600 py-3 text-sm font-semibold text-white shadow-md active:scale-[0.99]"
                >
                    Send Message
                </button>

                {sent && (
                    <p className="mt-2 text-center text-xs text-green-600">
                        🎉 Message sent! Check your inbox for confirmation.
                    </p>
                )}
            </form>
        </div>
    );
}
