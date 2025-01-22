import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBlog, FaInstagram } from "react-icons/fa";

// Declare the font loader at the module scope
const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Specify the weights you want
});

export default function Home() {
  return (
    <main className="bg-purple-200">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-screen  md:h-[87vh]">
        {/* Left Section */}
        <div className="flex flex-col gap-4 items-center justify-center px-6 md:px-12 text-center md:text-left">
          <p className={`text-2xl md:text-3xl font-bold ${poppins.className}`}>
            The best URL shortener
          </p>
          <p
            className={`px-2 md:px-16 text-sm md:text-base ${poppins.className}`}
          >
            We are the most straightforward URL Shortener in the world. Most of
            the URL shorteners track your data or ask you to give your details
            for login. We understand your need and hence we have created the URL
            shortener.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link href="/shorten">
              <button className="text-white bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold">
                Try Now For Free
              </button>
            </Link>
            <Link href="https://github.com/Codewithsalim12">
              <button className="text-white bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold">
                <a
                  href="https://github.com/Codewithsalim12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl hover:text-purple-300 text-black" />
                </a>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center md:justify-start items-center">
          <Image
            className="mix-blend-darken object-contain"
            src="/vector.jpg"
            alt="An image of a vector"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>

      {/* Section 2: Why Choose Us */}
      <section className="py-16 px-6 text-white bg-purple-800 md:px-12 text-center ">
        <h2
          className={`text-2xl text-white md:text-3xl font-bold ${poppins.className}`}
        >
          Why Choose Us?
        </h2>
        <p className={`text-sm md:text-base mt-4 ${poppins.className}`}>
          We offer a secure, reliable, and fast URL shortening service. Our
          platform ensures that your privacy is respected, and you get the best
          experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center">
            <Image
              src="/fast-img.png"
              alt="Fast service"
              width={80}
              height={80}
            />
            <h3 className="text-lg font-bold mt-4">Fast</h3>
            <p className={`text-sm mt-2 ${poppins.className}`}>
              Quickly shorten your URLs with minimal effort.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/secure-img.png" alt="Secure" width={80} height={80} />
            <h3 className="text-lg font-bold mt-4">Secure</h3>
            <p className={`text-sm mt-2 ${poppins.className}`}>
              Your data and privacy are always protected.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/simple-img.png" alt="Simple" width={80} height={80} />
            <h3 className="text-lg font-bold mt-4">Simple</h3>
            <p className={`text-sm mt-2 ${poppins.className}`}>
              Easy-to-use interface with no complicated steps.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Link href="/Explore-features">
            <button className="text-white bg-purple-500 hover:bg-purple-600 transition-all rounded-lg shadow-lg px-4 py-2 font-bold">
              Explore Features
            </button>
          </Link>
          <Link href="/about">
            <button className="text-white bg-purple-500 hover:bg-purple-600 transition-all rounded-lg shadow-lg px-4 py-2 font-bold">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Section 3: Start Your Journey */}
      <section className="py-16 px-6 md:px-12 text-center bg-purple-200">
        <h2 className={`text-2xl md:text-3xl font-bold ${poppins.className}`}>
          Start Your Journey Today
        </h2>
        <p className={`text-sm md:text-base mt-4 ${poppins.className}`}>
          Join thousands of satisfied users who are already using our URL
          shortening service. Simplify your links and make sharing easy!
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Link href="/Signup">
            <button className="text-white bg-purple-500 hover:bg-purple-600 transition-all rounded-lg shadow-lg px-4 py-2 font-bold">
              Sign Up Now
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-white bg-purple-500 hover:bg-purple-600 transition-all rounded-lg shadow-lg px-4 py-2 font-bold">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="flex justify-center mt-12">
          <Image
            src="/journey.svg"
            alt="Start your journey"
            width={200}
            height={200}
          />
        </div>
      </section>
    </main>
  );
}
