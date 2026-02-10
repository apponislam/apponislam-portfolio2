import { pagesConfig } from "../../config/pages";
import ContactForm from "../forms/ContactForm";
import PageHeader from "./PageHeader";

const ContactPage = () => {
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
