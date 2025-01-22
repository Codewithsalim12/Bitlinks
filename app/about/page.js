import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

// Declare the font loader at the module scope
const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function About() {
  return (
    <main className="bg-purple-100">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[100vh] md:h-[87vh]">
        {/* Left Section */}
        <div className="flex flex-col gap-4 items-center justify-center p-4">
          <p
            className={`text-2xl md:text-3xl font-bold ${poppins.className} text-center`}
          >
            About Our URL Shortener
          </p>
          <p className={`px-4 md:px-16 text-center ${poppins.className}`}>
            Our mission is to simplify your online experience by providing a
            fast, reliable, and secure way to shorten your URLs. Unlike others,
            we value your privacy and ensure no personal data is collected or
            tracked. With our intuitive platform, anyone can shorten links
            effortlessly.
          </p>
          <p className={`px-4 md:px-16 text-center ${poppins.className}`}>
            Whether you are a casual user or a professional, our tool is
            designed to save time and increase productivity. Try it today and
            experience the difference!
          </p>
          <Link
            href="https://www.instagram.com/mohammadsalim__567/"
            target="_blank"
          >
            <button className="text-white bg-purple-500 flex justify-center gap-4 rounded-lg shadow-lg px-10 py-4 font-bold hover:bg-purple-700  transition-all duration-300">
              Follow Us{" "}
              <a
                href="https://www.instagram.com/mohammadsalim__567/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-purple-300" />
              </a>
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className={`flex justify-center md:justify-start relative`}>
          <Image
            className="mix-blend-darken"
            src="/cut-url.png" // Replace with the actual about page image path
            alt="An image showcasing about us"
            fill={true}
          />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 px-6 md:px-16">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center ${poppins.className}`}
        >
          Visit Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              id: 1,
              heading: "Code quality",
              desc: "Best Practices for Web Accessibility",
              imgSrc: "/blog-preview-1.webp",
              link: "https://tech-blog-ten-iota.vercel.app/blogs/web-accessibility-best-practices",
            },
            {
              id: 2,
              heading: "Code quality",
              desc: "RESTful APIs: Building Blocks of Modern Web Applications",
              imgSrc: "/blog-preview-2.webp",
              link: "https://tech-blog-ten-iota.vercel.app/blogs/restful-apis-building-blocks",
            },
            {
              id: 3,
              heading: "Code quality",
              desc: "Web Accessibility: Inclusive Design for All Users",
              imgSrc: "/blog-preview-3.webp",
              link: "https://tech-blog-ten-iota.vercel.app/blogs/web-accessibility-inclusive-design",
            },
          ].map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={blog.imgSrc} // Path to the image in the public folder
                alt={`Blog Post ${blog.id}`}
                width={400}
                height={200}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">
                  {blog.heading} {blog.id}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-4">
                  {blog.desc}
                </p>
                <Link href={blog.link} target="_blank">
                  <button className="text-white bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-purple-700 transition-all duration-300 flex justify-between gap-2">
                    Read More{" "}
                    <img src="/plus.png" width={20} height={10} alt="" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-purple-700 text-white text-center">
        <div className="px-6 md:px-16">
          <h2 className={`text-2xl md:text-3xl font-bold ${poppins.className}`}>
            Ready to Shorten Your URLs?
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Simplify your links and track them in real time. Start using our
            platform today for free!
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/shorten">
              <button className="text-purple-700 bg-white rounded-lg shadow-lg px-6 py-3 font-bold hover:bg-gray-200 transition-all duration-300">
                Get Started
              </button>
            </Link>
            <Link href="/pricing">
              <button className="text-white bg-purple-500 rounded-lg shadow-lg px-6 py-3 font-bold hover:bg-purple-800 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
