# 🕵️‍♂️ MysteryApp

[![Next.js](https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/mongodb-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📖 Project Overview

**MysteryApp** is a modern, secure Next.js application that allows users to:

- **Sign up and log in securely** using NextAuth.
- **Receive anonymous messages** via a unique link.
- **View all anonymous messages** on a personalized dashboard.
- Access a **clean and responsive UI** powered by Tailwind CSS.

The goal is to provide an intuitive platform for anonymous feedback or messaging while ensuring user data security.

---

## ⚙️ Features

| Feature                 | Description                                            |
|-------------------------|--------------------------------------------------------|
| User Authentication     | Secure sign-up/sign-in with NextAuth                   |
| Anonymous Messaging     | Send messages anonymously through a sharable link      |
| Dashboard               | View and manage received anonymous messages            |
| Responsive UI           | Mobile-friendly design with Tailwind CSS                |
| Database                | MongoDB & Mongoose for storing users and messages       |
| Email Integration       | Send email notifications using react-email and resend   |
| Form Validation         | Robust input validation using react-hook-form and zod   |

---

## 🛠️ Tech Stack & Dependencies

- **Framework:** Next.js 15.3.0
- **UI & Styling:** React, Tailwind CSS 4, Radix UI, lucide-react
- **Authentication:** next-auth
- **Database:** MongoDB, Mongoose
- **Form Handling:** react-hook-form, zod
- **Email:** react-email, resend
- **Utilities:** axios, bcryptjs, dayjs, use-debounce, usehooks-ts
- **Dev Tools:** TypeScript, ESLint, PostCSS

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB cluster or local instance
- Email service API key (for sending emails)

### Installation

1. **Clone the repository**  
   ```
   git clone https://github.com/tusharjain91e3/Feedback-app.git
   cd Feedback-app
Install dependencies

npm install
# or
yarn install
Setup environment variables

Duplicate .env.sample and rename to .env

Fill in your MongoDB connection string, NextAuth secret, and email service API keys

Example .env contents:

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
EMAIL_API_KEY=your_email_service_api_key
Run the development server

npm run dev
# or
yarn dev
Open your browser and go to http://localhost:3000

🧑‍💻 Usage
Create an account or log in on the homepage.

Get your unique anonymous message link from the dashboard.

Share the link with others to receive anonymous messages.

View and manage received messages in your dashboard.

🗂️ Project Structure
.
├── src/              # Main source code (pages, components)
├── emails/           # Email templates and components
├── public/           # Static assets (images, favicon)
├── .env.sample       # Sample environment variables
├── package.json      # Project metadata & dependencies
└── README.md         # Project documentation
🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve MysteryApp.

📄 License
This project is private and intended for portfolio and learning purposes.

📫 Contact
Built with ❤️ by Tushar Jain
Email: tusharjainmandoth@gmail.com
