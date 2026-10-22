import { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isConfigured = Boolean(serviceId && templateId && publicKey);

const ContactForm = () => {
    const [submission, setSubmission] = useState({ state: "idle", message: "" });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        if (formData.get("website")) {
            setSubmission({ state: "success", message: "Thanks for reaching out. Your message has been sent." });
            form.reset();
            return;
        }

        if (!isConfigured) {
            setSubmission({ state: "error", message: "The contact form is not connected yet. Please email Chris directly." });
            return;
        }

        setSubmission({ state: "sending", message: "Sending your message..." });

        try {
            await emailjs.send(serviceId, templateId, {
                from_name: formData.get("name"),
                reply_to: formData.get("email"),
                message: formData.get("message"),
            }, { publicKey });

            form.reset();
            setSubmission({ state: "success", message: "Thanks for reaching out. Your message has been sent." });
        } catch {
            setSubmission({ state: "error", message: "Your message could not be sent. Please try again or email Chris directly." });
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
                <label>
                    Your name
                    <input name="name" type="text" autoComplete="name" maxLength="100" required />
                </label>
                <label>
                    Email address
                    <input name="email" type="email" autoComplete="email" maxLength="254" required />
                </label>
            </div>
            <label>
                How can I help?
                <textarea name="message" rows="5" maxLength="4000" required />
            </label>
            <label className="contact-form-trap" aria-hidden="true">
                Leave this field empty
                <input name="website" type="text" tabIndex="-1" autoComplete="off" />
            </label>
            {!isConfigured && (
                <p className="contact-form-config" role="note">
                    The form needs EmailJS setup before it can send. You can still reach me at <a href="mailto:chrisivy22703@gmail.com">chrisivy22703@gmail.com</a>.
                </p>
            )}
            <div className="contact-form-footer">
                <button className="button button-primary" type="submit" disabled={!isConfigured || submission.state === "sending"}>
                    {submission.state === "sending" ? "Sending..." : "Contact Me"}
                    <span aria-hidden="true">{submission.state === "sending" ? "..." : "↗"}</span>
                </button>
                <p className={`contact-form-status is-${submission.state}`} role="status" aria-live="polite">
                    {submission.message}
                </p>
            </div>
        </form>
    );
};

export default ContactForm;