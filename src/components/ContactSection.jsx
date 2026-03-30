import { useState, useEffect } from "react";

// Icons
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function ContactSection() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  // Automatically reset the "Success" view back to the form after 8 seconds
  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 8000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "447468302781"; 
    const text = `*New Project Quote Request*%0A` +
                 `--------------------------%0A` +
                 `Name: ${formData.name}%0A` +
                 `Email: ${formData.email}%0A` +
                 `Phone: ${formData.phone}%0A` +
                 `Subject: ${formData.subject}%0A` +
                 `Message: ${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    
    // Show success state and reset the inputs immediately
    setSubmitted(true);
    setFormData(initialState);
  };

  return (
    <section id="contact" className="relative bg-[#0E0E0E] overflow-hidden border-t border-[#2E2B28]">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#2E2B28] opacity-50" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#2E2B28] opacity-30 hidden lg:block" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#2E2B28] opacity-30 hidden lg:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:w-5/12 lg:pt-10 lg:sticky lg:top-24">
            <div className="text-[#A8844A] text-[12px] tracking-[0.2em] uppercase mb-6 font-bold">
              / 06
            </div>

            <h2
              className="text-[#F2EDE8] font-extrabold leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", letterSpacing: "-0.02em" }}
            >
              Ready to transform your space?
            </h2>

            <p className="text-[#8C8480] leading-relaxed mb-12 text-base max-w-sm">
              Whether you have a clear vision or just a starting point, we'd love to hear about your project. Fill out the form below or reach out on WhatsApp for a faster response.
            </p>

            <div>
              <p className="text-[#F2EDE8] font-bold mb-6 text-sm uppercase tracking-widest">Direct Contact</p>
              <div className="flex flex-col gap-5">
                <a
                  href="https://wa.me/447468302781"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-[#8C8480] hover:text-[#C9A96E] transition-all duration-300 group"
                >
                  <span className="w-10 h-10 rounded-full border border-[#3A3633] flex items-center justify-center group-hover:border-[#C9A96E] transition-colors">
                    <WhatsAppIcon />
                  </span>
                  <span className="text-sm font-medium tracking-wide">Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN CARD */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-[#1A1917] rounded-2xl shadow-2xl overflow-hidden border border-[#3A3633]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 px-10 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#C9A96E] flex items-center justify-center mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E0E0E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-[#F2EDE8] font-bold text-2xl mb-3">Message Ready!</h3>
                  <p className="text-[#8C8480] text-sm max-w-xs leading-relaxed">
                    WhatsApp has been opened with your details. Please remember to click <strong>Send</strong> in your WhatsApp app.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="mt-8 text-[#C9A96E] text-xs uppercase tracking-widest font-bold border-b border-[#C9A96E] pb-1 hover:text-[#F2EDE8] hover:border-[#F2EDE8] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 sm:p-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    {[
                      { label: "Name", name: "name", type: "text", placeholder: "Enter Your Name" },
                      { label: "Email", name: "email", type: "email", placeholder: "Enter Your Email" },
                      { label: "Phone number", name: "phone", type: "tel", placeholder: "Enter Your Phone Number" },
                      { label: "Subject", name: "subject", type: "text", placeholder: "Project Type" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-[#F2EDE8] font-bold text-[11px] uppercase tracking-[0.15em] mb-4">
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
                          className="w-full border-0 rounded-2xl p-3 border-b border-[#3A3633] pb-3 text-[#F2EDE8] placeholder-[#5A5652] text-sm outline-none transition-all duration-300 bg-transparent focus:placeholder-transparent"
                          style={{ borderBottomColor: focused === field.name ? "#C9A96E" : "#3A3633" }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-10">
                    <label htmlFor="message" className="block text-[#F2EDE8] font-bold text-[11px] uppercase tracking-[0.15em] mb-4">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      rows={4}
                      className="w-full border-0 border-b border-[#3A3633] pb-3 text-[#F2EDE8] placeholder-[#5A5652] text-sm outline-none resize-none transition-all duration-300 bg-transparent focus:placeholder-transparent"
                      style={{ borderBottomColor: focused === "message" ? "#C9A96E" : "#3A3633" }}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-4 bg-[#C9A96E] text-[#0E0E0E] text-[12px] font-bold uppercase tracking-[0.2em] px-10 py-5 rounded-full hover:bg-[#A8844A] transition-all duration-300 group shadow-xl"
                    >
                      Send Message
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