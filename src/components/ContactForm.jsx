import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const phoneNumber = "923009570408";

    const whatsappMessage = [
      "Hello SafePath! I have a new course enquiry.",
      "",
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim() || "Not provided"}`,
      `Enquiry about: ${formData.subject}`,
      "",
      "Message:",
      formData.message.trim(),
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="course-category">SEND AN ENQUIRY</p>
        <h2>Let's start a conversation.</h2>
        <p>Fill in the form and let us know how we can help.</p>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Full name *</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">Email address *</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-phone">Phone number</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-subject">Enquiry about *</label>
          <select
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="NEBOSH">NEBOSH courses</option>
            <option value="IOSH">IOSH courses</option>
            <option value="Risk Assessment">Risk assessment</option>
            <option value="Other">Other enquiry</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Your message *</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell us what you would like to know..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>

      <button className="button contact-submit" type="submit">
        Continue to WhatsApp <span>↗</span>
      </button>

      <p className="form-disclaimer">
        Your enquiry will open in WhatsApp. Review the message and press
        Send to deliver it to SafePath.
      </p>
    </form>
  );
}

export default ContactForm;