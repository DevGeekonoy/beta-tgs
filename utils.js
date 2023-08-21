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

// /////////////////////// email template code //
// async function sendEMail({ name, email, phone, message }) {
//   const recipients = ["venkat@geekonomy.in"];
//   const mailOptions = {
//     from: "foo@example.com",
//     to: recipients.join(", "),
//     subject: " 📧  Mail from TheGeekStudio Website 📧",
//     // html: `

//     //   <div className="w-full max-w-3xl mx-auto font-sans bg-[#D9D9D9]">
//     //   <img
//     //     src=${logoDataUrl}
//     //     alt="Logo Image"
//     //     title="Company Logo"
//     //     className="w-full h-28"
//     //   />
//     //   <div className="bg-[#FFFFFF]  flex justify-center items-center ml-5 mr-5">
//     //     <div className="w-1/2">
//     //       <img
//     //         src=${mailphoneDataUrl}
//     //         alt="Logo Image"
//     //         title="Company Logo"
//     //         className="w-full h-[484px]"
//     //       />
//     //     </div>
//     //     <div className="w-1/2">
//     //       <h1 className="text-[#000000] italic text-7xl mb-10">
//     //         Let’s <br /> Talk
//     //       </h1>
//     //       <p className="text-[#777777] text-2xl mb-5">
//     //         Learn and get more solid insights on what measures can be taken to
//     //         uplift your brand
//     //       </p>
//     //       <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full mt-4 sm:mt-0">
//     //         <Link to="/contact-us">Schedule A Call</Link>
//     //       </button>
//     //     </div>
//     //   </div>
//     //   <div className="bg-[#D9D9D9] w-full container mx-auto  py-20">
//     //     <h1 className="text-[#000000] text-center text-4xl italic px-10">
//     //       Delivering every need of yours on the go
//     //     </h1>
//     //     <div className="flex w-full px-10 py-10 justify-center">
//     //       <div className="w-1/2 flex flex-col justify-center items-center">
//     //         <div className="relative inline-block p-10 transition-transform transform hover:scale-105 bg-white rounded-full">
//     //           <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300  rounded-full"></div>
//     //           <img
//     //             src=${marketingblackDataUrl}
//     //             alt="Marketing Black"
//     //             className="object-cover w-20 h-20"
//     //           />
//     //         </div>
//     //         <div>
//     //           <h1 className="text-black font-bold mt-3 mb-7 text-xl">
//     //             Digital Marketing
//     //           </h1>
//     //         </div>
//     //         <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full sm:mt-0">
//     //           <Link to="/contact-us">VIEW CASE STUDY</Link>
//     //         </button>
//     //       </div>
//     //       <div className="w-1/2 flex flex-col justify-center items-center">
//     //         <div className="relative inline-block p-10 transition-transform transform hover:scale-105 bg-white rounded-full">
//     //           <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300  rounded-full"></div>
//     //           <img
//     //             src=${webappDataUrl}
//     //             alt="Marketing Black"
//     //             className="object-cover w-20 h-20"
//     //           />
//     //         </div>
//     //         <div>
//     //           <h1 className="text-black font-bold mt-3 mb-7 text-xl">
//     //             Custom Development
//     //           </h1>
//     //         </div>
//     //         <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full sm:mt-0">
//     //           <Link to="/contact-us">VIEW CASE STUDY</Link>
//     //         </button>
//     //       </div>
//     //     </div>
//     //     <div className="flex w-full px-10 py-10 justify-center">
//     //       <div className="w-1/2 flex flex-col justify-center items-center">
//     //         <div className="relative inline-block p-10 transition-transform transform hover:scale-105 bg-white rounded-full">
//     //           <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300  rounded-full"></div>
//     //           <img
//     //             src=${customererDataUrl}
//     //             alt="Marketing Black"
//     //             className="object-cover w-20 h-20"
//     //           />
//     //         </div>
//     //         <div>
//     //           <h1 className="text-black font-bold mt-3 mb-7 text-xl">
//     //             Customer Retention
//     //           </h1>
//     //         </div>
//     //         <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full sm:mt-0">
//     //           <Link to="/contact-us">VIEW CASE STUDY</Link>
//     //         </button>
//     //       </div>
//     //       <div className="w-1/2 flex flex-col justify-center items-center">
//     //         <div className="relative inline-block p-10 transition-transform transform hover:scale-105 bg-white rounded-full">
//     //           <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300  rounded-full"></div>
//     //           <img
//     //             src=${publiceDataUrl}
//     //             alt="Marketing Black"
//     //             className="object-cover w-20 h-20"
//     //           />
//     //         </div>
//     //         <div>
//     //           <h1 className="text-black font-bold mt-3 mb-7 text-xl">
//     //             Public Relations
//     //           </h1>
//     //         </div>
//     //         <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full sm:mt-0">
//     //           <Link to="/contact-us">VIEW CASE STUDY</Link>
//     //         </button>
//     //       </div>
//     //     </div>
//     //     <div className="flex w-full px-10 py-10 justify-center">
//     //       <div className="w-1/2 flex flex-col justify-center items-center">
//     //         <div className="relative inline-block p-10 transition-transform transform hover:scale-105 bg-white rounded-full">
//     //           <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300  rounded-full"></div>
//     //           <img
//     //             src=${advertisingblackDataUrl}
//     //             alt="Marketing Black"
//     //             className="object-cover w-20 h-20"
//     //           />
//     //         </div>
//     //         <div>
//     //           <h1 className="text-black font-bold mt-3 mb-7 text-xl">
//     //             Advertising
//     //           </h1>
//     //         </div>
//     //         <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full sm:mt-0">
//     //           <Link to="/contact-us">VIEW CASE STUDY</Link>
//     //         </button>
//     //       </div>
//     //       <div className="w-1/2 flex flex-col justify-center items-center">
//     //         <div className="relative inline-block p-10 transition-transform transform hover:scale-105 bg-white rounded-full">
//     //           <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300  rounded-full"></div>
//     //           <img
//     //             src=${brandinggDataUrl}
//     //             alt="Marketing Black"
//     //             className="object-cover w-20 h-20"
//     //           />
//     //         </div>
//     //         <div>
//     //           <h1 className="text-black font-bold mt-3 mb-7 text-xl">
//     //             Branding
//     //           </h1>
//     //         </div>
//     //         <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full sm:mt-0">
//     //           <Link to="/contact-us">VIEW CASE STUDY</Link>
//     //         </button>
//     //       </div>
//     //     </div>
//     //     <div className="flex w-full px-10 py-10 justify-center">
//     //       <div className="w-1/2 flex flex-col justify-center items-center">
//     //         <div className="relative inline-block p-10 transition-transform transform hover:scale-105 bg-white rounded-full">
//     //           <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300  rounded-full"></div>
//     //           <img
//     //             src=${webappDataUrl}
//     //             alt="Marketing Black"
//     //             className="object-cover w-20 h-20"
//     //           />
//     //         </div>
//     //         <div>
//     //           <h1 className="text-black font-bold mt-3 mb-7 text-xl">
//     //             Web & App Development
//     //           </h1>
//     //         </div>
//     //         <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full sm:mt-0">
//     //           <Link to="/contact-us">VIEW CASE STUDY</Link>
//     //         </button>
//     //       </div>
//     //       <div className="w-1/2 flex flex-col justify-center items-center">
//     //         <div className="relative inline-block p-10 transition-transform transform hover:scale-105 bg-white rounded-full">
//     //           <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300  rounded-full"></div>
//     //           <img
//     //             src=${performanceDataUrl}
//     //             alt="Marketing Black"
//     //             className="object-cover w-20 h-20"
//     //           />
//     //         </div>
//     //         <div>
//     //           <h1 className="text-black font-bold mt-3 mb-7 text-xl">
//     //             Performance & Growth Marketing
//     //           </h1>
//     //         </div>
//     //         <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full sm:mt-0">
//     //           <Link to="/contact-us">VIEW CASE STUDY</Link>
//     //         </button>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div
//     //     className="bg-[#FFFFFF]   flex justify-center items-center flex-col
//     //    ml-5 mr-5"
//     //   >
//     //     <h1 className="text-[#000000] italic text-4xl mb-10 mt-10 text-center">
//     //       Need More Help?
//     //     </h1>

//     //     <button className="text-white font-bold text-[14px] rounded-md px-8 py-3 bg-[#EF3A37] block md:w-48 uppercase sm:w-auto w-full mt-4 sm:mt-0">
//     //       <Link to="/contact-us">Schedule A Call</Link>
//     //     </button>
//     //     <div className="py-16">
//     //       <div className="container mx-auto px-10">
//     //         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//     //           <div className="flex justify-center items-center">
//     //             <div className="bg-black p-2 rounded-full hover:bg-red-600 transition duration-300">

//     //             </div>
//     //             <a
//     //               href="mailto:info@thegeekstudio.ae"
//     //               className="text-[#000000] font-semibold ml-5"
//     //             >
//     //               info@thegeekstudio.ae
//     //             </a>
//     //           </div>
//     //           <div className="flex justify-center items-center">
//     //             <div className="bg-black p-2 rounded-full hover:bg-red-600 transition duration-300">

//     //             </div>
//     //             <a
//     //               href="https://www.thegeekstudio.ae"
//     //               target="_blank"
//     //               rel="noopener noreferrer"
//     //               className="text-[#000000] font-semibold ml-5"
//     //             >
//     //               www.thegeekstudio.ae
//     //             </a>
//     //           </div>
//     //           <div className="flex justify-center items-center">
//     //             <div className="bg-black p-2 rounded-full hover:bg-red-600 transition duration-300">

//     //             </div>
//     //             <a
//     //               href="tel:+971548887187"
//     //               className="text-[#000000] font-semibold ml-5"
//     //             >
//     //               +971 548887187
//     //             </a>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <img src=${geekstudiomaillogoDataUrl} alt="" className="w-auto h-auto" />
//     //   <div className=" py-8 flex justify-center">
//     //     <a
//     //       href="https://youtube.com"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //       className="mx-2"
//     //     >
//     //       <div className="bg-black p-2 rounded-full hover:bg-red-600 transition duration-300">

//     //       </div>
//     //     </a>
//     //     <a
//     //       href="https://linkedin.com"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //       className="mx-2"
//     //     >
//     //       <div className="bg-black p-2 rounded-full hover:bg-red-600 transition duration-300">

//     //       </div>
//     //     </a>
//     //     <a
//     //       href="https://instagram.com"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //       className="mx-2"
//     //     >
//     //       <div className="bg-black p-2 rounded-full hover:bg-red-600 transition duration-300">

//     //       </div>
//     //     </a>
//     //     <a
//     //       href="https://facebook.com"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //       className="mx-2"
//     //     >
//     //       <div className="bg-black p-2 rounded-full hover:bg-red-600 transition duration-300">

//     //       </div>
//     //     </a>
//     //   </div>
//     //   </div>
//     // </div>
//     // `,
//   };

async function sendEMail({ name, email, phone, message }) {
  const recipients = ["venkat@geekonomy.in"];
  const mailOptions = {
    from: "foo@example.com",
    to: recipients.join(", "),
    subject: "📧 Mail from TheGeekStudio Website 📧",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
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
