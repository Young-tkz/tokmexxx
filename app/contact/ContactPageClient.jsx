"use client";

import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactPageClient() {
    const [success, setSuccess] = useState(false);

    // Check for ?success=true in the URL on the client
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.location.search.includes("success=true")) {
                setSuccess(true);
            }
        }
    }, []);

    return (
        <>
            {success && (
                <div className="mb-5 rounded-lg bg-green-100 px-4 py-3 text-center text-sm font-medium text-green-700">
                    🎉 Your message was sent successfully!
                </div>
            )}

            <ContactForm />
        </>
    );
}
