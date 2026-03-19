// components/ServiceTestimonial.jsx

export default function ServiceTestimonial({ data }) {
  return (
    <section
      className="py-32 bg-[#fafaf8]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="mb-14">
          <p
            className="text-amber-700 font-mono text-sm mb-3"
            style={{ animation: "testiSlide .6s .1s both" }}
          >
            / {data.subtitle}
          </p>
          <h2
            className="text-stone-900 max-w-md leading-[1.2]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
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
            className="lg:col-span-3 overflow-hidden"
            style={{ animation: "testiImgReveal 1s .3s both" }}
          >
            <img
              src={data.image}
              alt="Testimonial"
              className="w-full h-[460px] object-cover"
            />
          </div>

          {/* Quote card with stacked shadow */}
          <div
            className="lg:col-span-2 bg-white border border-stone-200 p-10 flex flex-col justify-between"
            style={{
              boxShadow: "4px 4px 0 #f5f5f4, 8px 8px 0 #e7e5e4",
              animation: "testiFadeIn .8s .5s both",
            }}
          >
            <div>
              {/* Animated quote mark */}
              <div
                className="leading-[.8] mb-4 text-amber-300"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "80px",
                  animation: "testiQuoteMark .6s .6s both",
                }}
              >
                "
              </div>

              {/* Quote text */}
              <h3
                className="text-stone-900 leading-[1.5] mb-6 text-[18px]"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  animation: "testiFadeUp .7s .7s both",
                }}
              >
                {data.quote}
              </h3>
            </div>

            {/* Author */}
            <div
              className="flex items-center gap-4 border-t border-stone-100 pt-5"
              style={{ animation: "testiFadeUp .6s .8s both" }}
            >
              <img
                src={data.avatar}
                alt={data.name}
                className="w-11 h-11 rounded-full object-cover grayscale"
              />
              <div>
                <div className="font-medium text-stone-900 text-sm">{data.name}</div>
                <div className="text-stone-400 text-xs mt-0.5">{data.role}</div>
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