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

async function sendEMail({ name, email, phone, message }) {
  const recipients = ["info@thegeekstudio.ae"];
  const mailOptions = {
    from: "foo@example.com",
    to: recipients.join(", "),
    subject: " 📧  Mail from TheGeekStudio Website 📧",
    html: `
      <table style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <tr>
          <td style="background-color: #EF3A37; padding: 20px; text-align: center;">
            <h1 style="color: #fff; font-size: 24px;">🎉 Client Info Details 🎉</h1>
          </td>
        </tr>
        <tr>
          <td style="background-color: #ffffff; padding: 20px; border: 1px solid #edf2f7;">
            <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px;"><strong>Phone:</strong> ${phone}</p>
            <p style="font-size: 16px;"><strong>Message:</strong> ${message}</p>
          </td>
        </tr>
      </table>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  const thankYouMailOptions = {
    from: "info@thegeekstudio.ae",
    to: email,
    subject: "🎉Thank You for Contacting TheGeekStudio 🎉",
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to TheGeekStudio. We have received your message and our team will get back to you shortly.</p>
      <p>In the meantime, feel free to explore more about us:</p>
      <ul>
        <li><a href="https://www.thegeekstudio.ae" target="_blank">Visit Our Website</a></li>
        <li><a href="https://www.instagram.com/thegeekstudio_ae/" target="_blank">Follow us on Instagram</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100093491574263" target="_blank">Like us on Facebook</a></li>
        <li><a href="https://www.linkedin.com/company/the-geek-studio/" target="_blank">Follow us on Linkedin</a></li>
      </ul>
      <p>Best regards,<br/>TheGeekStudio Team</p>
    `,
  };

  const thankYouInfo = await transporter.sendMail(thankYouMailOptions);

  return { info, thankYouInfo };
}

module.exports = sendEMail;