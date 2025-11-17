import ContactPageClient from "./ContactPageClient";

export const metadata = {
    title: "Contact Us | TokMe",
};

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 bg-white">
            <ContactPageClient />
        </main>
    );
}
