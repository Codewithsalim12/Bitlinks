import { Montserrat } from "next/font/google";
import Image from "next/image";
import { FaRocket, FaCog, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

// Declare the font loader at the module scope
const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Specify the weights you want
});

export default function ExploreFeatures() {
  return (
    <main className="bg-purple-50">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center bg-purple-800 text-white">
        <h2 className={`text-2xl md:text-3xl font-bold ${poppins.className}`}>
          Explore Our Features
        </h2>
        <p className={`text-sm md:text-base mt-4 ${poppins.className}`}>
          Discover the unique features that make our service the best choice for
          URL shortening. We're committed to providing fast, secure, and
          easy-to-use tools for your convenience.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-xl shadow-xl">
            <FaRocket className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Fast Performance
            </h3>
            <p className={`text-sm mt-2 ${poppins.className}`}>
              Experience lightning-fast load times and smooth interactions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-xl shadow-xl">
            <FaCog className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Customizable Settings
            </h3>
            <p className={`text-sm mt-2 ${poppins.className}`}>
              Tailor the application to your exact needs with a wide range of
              settings.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-xl shadow-xl">
            <FaShieldAlt className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Enhanced Security
            </h3>
            <p className={`text-sm mt-2 ${poppins.className}`}>
              Your data is safe with advanced security features ensuring
              protection at all times.
            </p>
          </div>
        </div>
      </section>

      {/* Section for More Information */}
      <section className="py-16 px-6 text-center bg-purple-200">
        <h3
          className={`text-xl md:text-2xl font-bold ${poppins.className} text-purple-700`}
        >
          Still have questions? Contact us for more info!
        </h3>
        <div className="flex justify-center mt-8">
          <Link href="/contact">
            <button className="text-white bg-purple-500 hover:bg-purple-600 transition-all rounded-lg shadow-lg px-4 py-2 font-bold">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
