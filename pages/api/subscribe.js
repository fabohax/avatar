import nodemailer from "nodemailer";

const subscribeHandler = async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // HTML template for the email sent to the admin
  const adminHtmlMail = `
    <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
      <h2 style="color:#00f;font-weight: bold;">New Subscription:</h2>
      <table style="font-size: 16px; width: 100%;">
          <td style="width: 50%;"><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
      </table>
      <hr>
      <p><a href="https://hax.pe" target="_blank" style="color:#000">hax.pe</a></p>
    </div>
  `;

  // HTML template for the email sent to the user
  const userHtmlMail = `
    <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
      <h2 style="color:#00f;font-weight: bold;">Thank You for your interest in my Log</h2>
      <p>Dear ${email},</p>
        <p>By subscribing, you'll receive articles and notes published by me at least once per month.</p>
        <p>I look forward to share my journey and expand human life across universe, just hoping that it helps a bit.</p>
      <br>
      <p>Best regards,</p>
      <p>Fabo</p>
      <hr>      
      <p><italic>If you're feeling generous, consider donate to this Bitcoin address: </italic> bc1p0saw6z028y7h6eag3w6hx5an6mk5ta8qk7wx2d3gtqtrty243uvqvjzvew</p>
      <p><a href="https://hax.pe" target="_blank" style="color:#000">hax.pe</a></p>
    </div>
  `;

  const adminMailOptions = {
    from: "Fabo Hax <fabohax@gmail.com>",
    to: ['fabohax@gmail.com'],
    subject: `✨ ${email} sent a message`,
    html: adminHtmlMail,
  };

  const userMailOptions = {
    from: "Fabo Hax <fabohax@gmail.com>",
    to: email,
    subject: `Thank you!`,
    html: userHtmlMail,
  };

  try {
    await transporter.sendMail(adminMailOptions);  
    await transporter.sendMail(userMailOptions);  
    res.status(200).json({ message: `${email}, we got your message.` });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
};

export default subscribeHandler;
