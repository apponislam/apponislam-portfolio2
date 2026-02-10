import { useSEO } from "@/hooks/useSEO";
import { pagesConfig } from "../../config/pages";
import ContactForm from "../forms/ContactForm";
import PageHeader from "./PageHeader";

const ContactPage = () => {
    useSEO({
        title: "Contact | Md. Appon Islam (aponislam) Portfolio",
        description: "Get in touch with me for collaborations, freelance opportunities, or inquiries about my work.",
        ogTitle: "Contact | Md. Appon Islam (aponislam) Portfolio",
        ogDescription: "Get in touch with me for collaborations, freelance opportunities, or inquiries about my work.",
        ogImage: "https://4ppon.com/apponislam.png",
    });

    return (
        <div>
            <PageHeader title={pagesConfig.contact.title} description={pagesConfig.contact.description} />
            <div className="flex justify-center min-w-full">
                <div className="flex w-full max-w-160">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
