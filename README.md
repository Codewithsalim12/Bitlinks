Bitlinks

Bitlinks is a modern, full-stack URL shortening application built to deliver fast and efficient link management. It leverages the power of Next.js, React, TailwindCSS, Node.js, Express, and MongoDB to create a seamless and responsive user experience.
Features

    Shorten Links: Instantly generate short and shareable URLs.
    Manage Links: View, copy, and track your shortened links in one place.
    Responsive Design: Fully optimized for both desktop and mobile devices with TailwindCSS.
    Dynamic Routing: Powered by Next.js for server-side rendering and optimized routing.
    Backend with Express: A robust Node.js backend to handle requests and API endpoints efficiently.
    MongoDB Database: Reliable and scalable database to store and manage links.
    Modern UI: Clean and intuitive user interface built with React and styled using TailwindCSS.
    Cross-Browser Support: Works smoothly on all major browsers.

Tech Stack

    Frontend: Next.js, React, TailwindCSS, JavaScript
    Backend: Node.js, Express
    Database: MongoDB
    Package Management: npm
    Hosting: Deployed on Vercel for fast and scalable deployment

How It Works

    Enter a long URL in the input field.
    Click on the "Shorten" button to generate a short URL.
    Copy the short URL and share it with your audience.
    Manage your shortened links directly from the dashboard.

Installation and Setup

To run the project locally:

    Clone the repository:

git clone https://github.com/Codewithsalim12/Bitlinks.git

Navigate to the project directory:

cd Bitlinks

Install dependencies:

npm install

Create a .env.local file and add the required environment variables:

MONGO_URI=<your-mongodb-uri>
NEXT_PUBLIC_API_URL=<your-api-url>

Run the development server:

    npm run dev

    Open your browser and navigate to http://localhost:3000.

Contribution

Contributions are welcome! If you have ideas or improvements, feel free to open an issue or submit a pull request.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
