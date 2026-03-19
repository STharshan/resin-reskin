import { useState } from "react";

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }} className="relative bg-neutral-900 overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-700 opacity-30" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-neutral-700 opacity-20 hidden lg:block" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-neutral-700 opacity-20 hidden lg:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:w-5/12 lg:pt-10 lg:sticky lg:top-24">
            <div className="text-neutral-500 text-sm tracking-widest uppercase mb-6 font-medium">
              / 03
            </div>

            <h2
              className="text-white font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", letterSpacing: "-0.02em" }}
            >
              Get a free project quote today.
            </h2>

            <p className="text-neutral-400 leading-relaxed mb-12 text-base max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim praesent velit viverra.
            </p>

            <div>
              <p className="text-white font-semibold mb-5 text-base">Prefer to reach out directly?</p>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:(123)456-7890"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-neutral-400 transition-colors duration-200">
                    <PhoneIcon />
                  </span>
                  <span className="text-sm">(123) 456 – 7890</span>
                </a>
                <a
                  href="mailto:contact@architecture.com"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-neutral-400 transition-colors duration-200">
                    <MailIcon />
                  </span>
                  <span className="text-sm">contact@architecture.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — CARD */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 px-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-neutral-900 font-bold text-xl mb-3">Message sent!</h3>
                  <p className="text-neutral-500 text-sm max-w-xs">
                    Your message has been submitted. We will get back to you within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 sm:p-10">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {[
                      { label: "Name", name: "name", type: "text", placeholder: "John Carter" },
                      { label: "Email", name: "email", type: "email", placeholder: "email@example.com" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-neutral-900 font-semibold text-sm mb-3"
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused("")}
                          required
                          className="w-full border-0 border-b-2 pb-2 text-neutral-700 placeholder-neutral-300 text-sm outline-none transition-all duration-200 bg-transparent"
                          style={{
                            borderBottomColor: focused === field.name ? "#111" : "#e5e7eb",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Row 2: Phone + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {[
                      { label: "Phone number", name: "phone", type: "tel", placeholder: "(123) – 465 7890" },
                      { label: "Subject", name: "subject", type: "text", placeholder: "Ex. Project" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-neutral-900 font-semibold text-sm mb-3"
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused("")}
                          required
                          className="w-full border-0 border-b-2 pb-2 text-neutral-700 placeholder-neutral-300 text-sm outline-none transition-all duration-200 bg-transparent"
                          style={{
                            borderBottomColor: focused === field.name ? "#111" : "#e5e7eb",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-neutral-900 font-semibold text-sm mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Please describe what service you are interested in..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      rows={4}
                      className="w-full border-0 border-b-2 pb-2 text-neutral-700 placeholder-neutral-300 text-sm outline-none resize-none transition-all duration-200 bg-transparent"
                      style={{
                        borderBottomColor: focused === "message" ? "#111" : "#e5e7eb",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-neutral-900 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-neutral-700 transition-all duration-300 group"
                    >
                      Send message
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowIcon />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}