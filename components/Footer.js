import { FaGithub, FaLinkedin, FaBlog, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        {/* Links */}
        <div className="space-x-6">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://github.com/Codewithsalim12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-purple-300" />
          </a>

          <a
            href="www.linkedin.com/in/mohammadsalimmir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-purple-300" />
          </a>
          <a
            href="https://www.instagram.com/mohammadsalim__567/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-purple-300" />
          </a>
          <a
            href="https://tech-blog-ten-iota.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlog className="text-2xl hover:text-purple-300" />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} Developed by Mohammad Salim</p>
      </div>
    </footer>
  );
}
