import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "");
    const company = String(formData.get("company") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const product = String(formData.get("product") || "");
    const quantity = String(formData.get("quantity") || "");
    const destination = String(formData.get("destination") || "");
    const deliveryTerm = String(formData.get("deliveryTerm") || "");
    const packaging = String(formData.get("packaging") || "");
    const paymentTerm = String(formData.get("paymentTerm") || "");
    const message = String(formData.get("message") || "");

    if (!name || !email || !product || !quantity || !destination || !deliveryTerm) {
      return Response.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

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
      subject: `New Quote Request - ${product}`,

      text: `
NEW ARP VENTURES QUOTE REQUEST
==============================

BUYER INFORMATION

Name:
${name}

Company:
${company || "Not provided"}

Email:
${email}

Phone / WhatsApp:
${phone || "Not provided"}


TRADE REQUIREMENT

Product:
${product}

Quantity:
${quantity}

Destination / Port:
${destination}

Delivery Term:
${deliveryTerm}

Packaging:
${packaging || "Not specified"}

Payment Preference:
${paymentTerm || "Not specified"}


ADDITIONAL REQUIREMENTS

${message || "No additional requirements provided."}


==============================
ARP Ventures
Global Trading & Sourcing
      `.trim(),
    });

    return Response.json({
      success: true,
      message: "Your quote request has been sent successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);

    return Response.json(
      {
        success: false,
        error: "Unable to send your request. Please try again.",
      },
      { status: 500 },
    );
  }
}