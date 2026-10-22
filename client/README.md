# Christophers Portfolio

## Contact form setup

The contact form sends messages through EmailJS. Create an EmailJS service and email template. In the template, set **To Email** to `{{to_email}}` and use these template variables:

- `to_email` for the recipient address
- `from_name` for the visitor's name
- `reply_to` for the visitor's email address
- `message` for their message

The form supplies `to_email` from `VITE_EMAILJS_RECIPIENT_EMAIL`, falling back to `chrisivy22703@gmail.com`. This is a public destination address, not a secret. Without the template's **To Email** binding, EmailJS responds with `422: The recipients address is empty`.

Copy `.env.example` to `.env.local` and fill in the service ID, template ID, and EmailJS public key. These Vite variables are included in the browser bundle; use only the EmailJS public key here, never a private key or email-provider password. Add the same variables to the hosting provider's environment settings before deployment. Restrict the EmailJS allowed origins and configure its sending limits in the EmailJS dashboard.

