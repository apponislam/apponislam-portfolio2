"use client";

import * as z from "zod";
import { Icons } from "../../icons/Icons";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useModalStore } from "../../hooks/use-modal-store";

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Name must contain at least 3 characters.",
    }),
    email: z.string().email("Please enter a valid email."),
    message: z.string().min(10, {
        message: "Please write something more descriptive.",
    }),
    social: z.string().url().optional().or(z.literal("")),
});

const ContactForm = () => {
    const storeModal = useModalStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            social: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Static form handling - show success message without API call
        try {
            // Simulate form submission
            console.log("Form submitted with values:", values);

            // Show success message
            storeModal.onOpen({
                title: "Thank you!",
                description: "Your message has been submitted successfully! (Note: This is a static demo - no actual message was sent)",
                icon: Icons.successAnimated,
            });

            // Reset form
            form.reset();

            // Optionally, you can log to console or send to a static endpoint
            // For a real implementation, you would need a backend endpoint
            console.log("Form data:", JSON.stringify(values));
        } catch (err) {
            console.error("Error:", err);
            storeModal.onOpen({
                title: "Oops!",
                description: "There was an error submitting your message. Please try again.",
                icon: Icons.failedAnimated,
            });
        }
    }

    // Alternative: Email submission using mailto
    function onSubmitWithMail(values: z.infer<typeof formSchema>) {
        const subject = `Contact Form Submission from ${values.name}`;
        const body = `Name: ${values.name}\nEmail: ${values.email}\nSocial: ${values.social || "Not provided"}\n\nMessage:\n${values.message}`;

        const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        // Show success message
        storeModal.onOpen({
            title: "Email Client Opened",
            description: "Your email client has been opened with the message details. Please send the email to complete your submission.",
            icon: Icons.successAnimated,
        });

        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-full">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your name" {...field} className="w-full" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email" {...field} type="email" className="w-full" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter your message" {...field} rows={5} className="w-full min-h-30 resize-y" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="social"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Social (optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="Link for social account (e.g., LinkedIn, GitHub)" {...field} className="w-full" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-4">
                    <Button type="submit" className="flex-1">
                        Submit Message
                    </Button>
                    <Button type="button" variant="outline" onClick={() => form.handleSubmit(onSubmitWithMail)()} className="flex-1">
                        Send via Email
                    </Button>
                </div>

                <div className="text-sm text-muted-foreground mt-4 p-3 bg-muted rounded-md">
                    <p className="font-medium mb-1">Note:</p>
                    <p>This is a static contact form. In a real implementation, you would need:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>A backend API endpoint to receive form submissions</li>
                        <li>Email service integration</li>
                        <li>Database to store messages</li>
                        <li>Spam protection</li>
                    </ul>
                </div>
            </form>
        </Form>
    );
};

export default ContactForm;
