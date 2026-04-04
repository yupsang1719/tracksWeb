import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const sub = encodeURIComponent(subject || "Contact Form Message");
    window.location.href = `mailto:funkyend51@gmail.com?subject=${sub}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#0F3C5C] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10">📬 Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
        />
        <button
          type="submit"
          className="bg-[#6D9999] hover:bg-[#5b8686] transition py-3 px-6 rounded text-white font-semibold"
        >
          Send Message
        </button>
      </form>
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-4">📍 Find Us</h3>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-white/10">
            <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.15600362774677!2d-0.7610216209581846!3d51.24721871127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742cb099923d63%3A0x33055e2644319fcf!2sTracks!5e1!3m2!1sen!2suk!4v1750683218467!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>


    </div>
  );
}
