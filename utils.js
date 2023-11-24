const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "info@thegeekstudio.ae",
    pass: "exaluftdipqnbdow",
  },
});

async function sendEMail({ name, email, phone, message, website }) {
  try {
    const recipients = ["info@thegeekstudio.ae"];

    const mailOptions = {
      from: "foo@example.com",
      to: recipients.join(", "),
      subject: "📧 Mail from TheGeekStudio Website 📧",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    const thankYouMailOptions = {
      from: "info@thegeekstudio.ae",
      to: email,
      subject: "🎉Thank You for Contacting TheGeekStudio 🎉",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to TheGeekStudio. We have received your message, and our team will get back to you shortly.</p>
        <p>In the meantime, feel free to explore more about us:</p>
        <ul>
          <li><a href="https://thegeekstudio.ae/" target="_blank">Visit Our Website</a></li>
          <li><a href="https://www.instagram.com/thegeekstudio_ae/" target="_blank">Follow us on Instagram</a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100093491574263" target="_blank">Like us on Facebook</a></li>
          <li><a href="https://www.linkedin.com/company/the-geek-studio/" target="_blank">Follow us on Linkedin</a></li>
        </ul>
        <p>Best regards,<br/>TheGeekStudio Team</p>
      `,
    };

    const thankYouInfo = await transporter.sendMail(thankYouMailOptions);

    return { info, thankYouInfo };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw the error to propagate it to the calling function
  }
}

module.exports = sendEMail;
