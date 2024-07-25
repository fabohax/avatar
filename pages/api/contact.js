import nodemailer from "nodemailer";

const contactHandler = async (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const htmlMail = `
    <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
      <h2 style="color:#00f;font-weight: bold;">New Message:</h2>
      <table style="font-size: 16px; width: 100%;">
        <tr>
          <td>${email}</td>
        </tr>
        <tr>
          <td>${message}</td>
        </tr>
      </table>
      <hr>
      <p><a href="https://hax.pe" target="_blank">hax.pe</a></p>
    </div>
  `;

  const mailOptions = {
    from: "Automated <fabohax@gmail.com>",
    to: [
      'fabohax@gmail.com'
    ],
    subject: `✨ ${email} sent a message`,
    html: htmlMail,
  };

  const userConfirmationMail = {
    from: "Automated Hax <fabohax@gmail.com>",
    to: email,
    subject: "Message Received",
    html: `
      <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
        <h2 style="color:#00f;font-weight: bold;">Thank You for Your Message</h2>
        <p>Hi <bold>${email}</bold>,</p>
        <p>I got your message and will get back to you shortly.</p>
        <hr>
        <p>Fabo Hax</p>
        <p><a href="https://hax.pe" target="_blank">hax.pe</a></p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userConfirmationMail);
    res.status(200).json({ message: `${email}, we got your request. Thanks for applying.` });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
};

export default contactHandler;
