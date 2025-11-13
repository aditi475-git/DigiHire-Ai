import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, company, country, email, phone, partnershipType, message } =
      await req.json();

    if (!email || !name) {
      return new Response(
        JSON.stringify({ success: false, message: "Name and Email required" }),
        { status: 400 }
      );
    }

    // ✅ Gmail SMTP setup with secure TLS handling
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.SMTP_USER, // your Gmail (e.g., hr@digihireai.com)
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
      tls: {
        rejectUnauthorized: false, // ✅ prevents self-signed certificate issue
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: `"DigiHire Partner Form" <${process.env.SMTP_USER}>`,
      to: "hr@digihireai.com",
      subject: "New Partnership Application - DigiHire",
      text: `
Name: ${name}
Company: ${company || "N/A"}
Country: ${country || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}
Type of Partnership: ${partnershipType || "N/A"}

Message / Collaboration Idea:
${message || "N/A"}
      `,
    };

    // ✅ Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Partnership application email sent successfully!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending partnership email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send partnership email",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
