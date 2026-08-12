import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      company,
      email,
      phone,
      country,
      product,
      quantity,
      message,
    } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "arpventures.info@gmail.com",
      replyTo: email,
      subject: `New ARP Ventures Quote Request - ${product || "General Inquiry"}`,
      text: `
New ARP Ventures Quote Request

Name: ${name}
Company: ${company}
Email: ${email}
Phone / WhatsApp: ${phone}
Country: ${country}

Product Required:
${product}

Quantity / Requirement:
${quantity}

Message:
${message}
      `,
    });

    return Response.json({
      success: true,
      message: "Your request has been sent successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to send your request.",
      },
      { status: 500 }
    );
  }
}