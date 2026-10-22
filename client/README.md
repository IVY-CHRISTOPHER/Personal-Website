# Christophers Portfolio

## Contact form setup

The contact form sends messages through EmailJS. Create an EmailJS service and email template, then configure the template to send to Chris and use these template variables:

- `from_name` for the visitor's name
- `reply_to` for the visitor's email address
- `message` for their message

Copy `.env.example` to `.env.local` and fill in the service ID, template ID, and EmailJS public key. These Vite variables are included in the browser bundle; use only the EmailJS public key here, never a private key or email-provider password. Add the same variables to the hosting provider's environment settings before deployment. Restrict the EmailJS allowed origins and configure its sending limits in the EmailJS dashboard.

