// components/ServiceTestimonial.jsx

export default function ServiceTestimonial({ data }) {
  return (
    <section
      className="py-32 bg-[#221F1C] border-t border-[#2E2B28]"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="mb-14">
          <p
            className="text-[#A8844A]  font-bold text-[11px] tracking-[.25em] uppercase mb-3"
            style={{ animation: "testiSlide .6s .1s both" }}
          >
            / {data.subtitle}
          </p>
          <h2
            className="text-[#F2EDE8] max-w-md leading-[1.2] "
            style={{
              fontSize: "clamp(28px,3.5vw,46px)",
              animation: "testiFadeUp .7s .2s both",
            }}
          >
            {data.heading}
          </h2>
        </div>

        {/* Grid: Image left, Card right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">

          {/* Image with reveal animation */}
          <div
            className="lg:col-span-3 overflow-hidden border border-[#2E2B28]"
            style={{ animation: "testiImgReveal 1s .3s both" }}
          >
            <img
              src={data.image}
              alt="Testimonial"
              className="w-full h-125 object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Quote card with stacked shadow using 'Line' and 'Subtle Line' */}
          <div
            className="lg:col-span-2 bg-[#1A1917] border border-[#3A3633] p-12 flex flex-col justify-between"
            style={{
              boxShadow: "6px 6px 0 #2E2B28, 12px 12px 0 #3A3633",
              animation: "testiFadeIn .8s .5s both",
            }}
          >
            <div>
              {/* Animated quote mark in Warm Gold */}
              <div
                className="leading-[.8] mb-6 text-[#C9A96E]"
                style={{
                 
                  fontSize: "90px",
                  animation: "testiQuoteMark .6s .6s both",
                }}
              >
                “
              </div>

              {/* Quote text */}
              <h3
                className="text-[#F2EDE8] leading-[1.6] mb-8 text-[20px]  italic"
                style={{
                  animation: "testiFadeUp .7s .7s both",
                }}
              >
                {data.quote}
              </h3>
            </div>

            {/* Author */}
            <div
              className="flex items-center gap-5 border-t border-[#2E2B28] pt-8"
              style={{ animation: "testiFadeUp .6s .8s both" }}
            >
              <img
                src={data.avatar}
                alt={data.name}
                className="w-12 h-12 rounded-full object-cover grayscale border border-[#3A3633]"
              />
              <div>
                <div className="font-bold text-[#F2EDE8] text-sm tracking-wide">{data.name}</div>
                <div className="text-[#8C8480] text-[11px] uppercase tracking-widest mt-1">{data.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testiFadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes testiFadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes testiSlide {
          from { opacity:0; transform:translateX(-16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes testiImgReveal {
          from { clip-path:inset(0 100% 0 0); }
          to   { clip-path:inset(0 0% 0 0); }
        }
        @keyframes testiQuoteMark {
          from { opacity:0; transform:translateX(-12px); }
          to   { opacity:1; transform:translateX(0); }
        }
      `}</style>
    </section>
  );
}