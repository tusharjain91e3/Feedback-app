# 🕵️‍♂️ MySertyApp

**MySertyApp** is a modern web application that allows users to receive **anonymous messages** through a unique link. Built with **Next.js**, **Tailwind CSS**, and **MongoDB**, it offers a seamless sign-up/sign-in system, a personal dashboard, and a clean user experience.

---

## 🚀 Features

- 🔐 **Authentication** — Sign up, sign in securely via `next-auth`
- ✉️ **Anonymous Messaging** — Anyone with your unique link can send you a message
- 🧾 **Dashboard** — Authenticated users can view received messages
- 🌐 **Frontend** — Clean public-facing home page with login/signup
- 📬 **Email Support** — Optional email functionalities powered by `resend` and `react-email`

---

## 🛠️ Tech Stack

| Category           | Tools Used |
|-------------------|------------|
| Frontend          | Next.js 15, React 19, Tailwind CSS |
| Backend           | MongoDB, Mongoose |
| Authentication    | NextAuth.js |
| Validation        | React Hook Form, Zod |
| Utilities         | Axios, Day.js, clsx, tailwind-merge |
| UI Enhancements   | Lucide Icons, Embla Carousel |
| Email & Toast     | Resend, react-email, Radix UI, Sonner |
| Type Checking     | TypeScript |
| Linting & Formatting | ESLint |

---

## 📁 Project Structure

mysertyapp/
├── public/ # Static assets
├── emails/ # Email templates
├── src/
│ ├── app/ # Routes and views
│ ├── components/ # Reusable UI components
│ ├── lib/ # Utilities and server logic
│ ├── models/ # Mongoose schemas
│ └── styles/ # Global CSS
├── .env.sample # Sample environment config
├── package.json
├── next.config.js
├── tailwind.config.mjs
└── tsconfig.json

yaml
Copy
Edit

---

## 🔧 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/tusharjain91e3/Feedback-app.git
cd Feedback-app
Install dependencies

bash
Copy
Edit
npm install
Configure environment

bash
Copy
Edit
cp .env.sample .env
# Then fill in the required values in the .env file
Run the development server

bash
Copy
Edit
npm run dev
⚙️ Required Environment Variables
env
Copy
Edit
MONGODB_URI=your_mongodb_connection
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
EMAIL_FROM=your_email@example.com
RESEND_API_KEY=your_resend_key
📌 Todo / Future Enhancements
✅ Add message reply feature

✅ Improve spam protection

✅ Add email notifications

✅ Build public profile pages

✅ Add message filters & search

📄 License
MIT License
© 2025 Tushar Jain
