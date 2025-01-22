"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 md:p-10 flex flex-col gap-6">
      <div className="mx-auto max-w-lg bg-white rounded-lg p-6 shadow-lg flex flex-col gap-6 justify-center animate-fadeIn">
        <h1 className="font-bold text-3xl text-center text-purple-600">
          Generate Your Short URLs
        </h1>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            value={url}
            className="px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-md text-sm md:text-base transition-all duration-300 shadow-md hover:scale-105"
            placeholder="Enter your URL"
            onChange={(e) => seturl(e.target.value)}
          />

          <input
            type="text"
            value={shorturl}
            className="px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-md text-sm md:text-base transition-all duration-300 shadow-md hover:scale-105"
            placeholder="Enter your preferred short URL text"
            onChange={(e) => setshorturl(e.target.value)}
          />

          <button
            onClick={generate}
            className="bg-purple-600 rounded-lg shadow-xl p-3 font-bold text-white text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Generate
          </button>
        </div>

        {generated && (
          <div className="mt-6 animate-slideUp">
            <span className="font-light text-lg text-center block">
              The link has been generated successfully! Click below:
            </span>
            <code className="bg-gray-300 rounded-sm p-3 text-blue-800 text-base text-center mt-2 block">
              <Link target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </div>
        )}
      </div>

      {/* Section 1: How it Works */}
      <section className="w-full bg-purple-700 p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
        <p className="text-lg text-center">
          1. Enter the URL you want to shorten. <br />
          2. Customize the short URL text if needed. <br />
          3. Click "Generate" to create your short URL. <br />
          4. Share your new, concise link!
        </p>
      </section>

      {/* Section 2: Features */}
      <section className="w-full bg-white p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Features</h2>
        <ul className="text-lg space-y-2 text-center">
          <li>🔗 Fast and easy URL shortening</li>
          <li>⚙️ Customizable short links</li>
          <li>📈 Link analytics for tracking</li>
          <li>🔒 Secure and reliable service</li>
        </ul>
      </section>

      {/* Section 3: Contact */}
      <section className="w-full bg-purple-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-lg text-center mb-4">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <Link
          href="mailto:contact@bitlinks.com"
          className="bg-purple-700 text-white py-2 px-6 rounded-lg shadow-xl hover:bg-purple-800 transition-all duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Shorten;
