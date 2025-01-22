import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      // Configure the transporter
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Change if you're using a different provider
        auth: {
          user: process.env.EMAIL_USER, // Your email address from .env.local
          pass: process.env.EMAIL_PASS, // Your app password from .env.local
        },
      });

      // Configure email options
      const mailOptions = {
        from: email,
        to: "saleemahmadmir18@gmail.com", // Your email address
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
