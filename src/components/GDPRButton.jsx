import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-6 text-center md:right-6 md:left-auto max-w-full md:max-w-xs p-4 rounded-lg 
                        shadow-lg z-50 bg-[#0E0E0E] border border-[#2E2B28] transition-colors">
          <p className="text-sm mb-2 text-center text-[#F2EDE8]">
            We use cookies to improve your experience.{" "}
          </p>
          <p className="mb-3 text-center">
            <Link
              to="/privacy"
              className="underline text-[#A8844A] hover:text-[#C9A96E]"
            >
              See our Privacy Policy
            </Link>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="bg-[#1A1917] text-[#8C8480] border border-[#3A3633] px-4 py-2 rounded text-sm hover:bg-[#221F1C] transition"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="bg-[#C9A96E] text-[#0E0E0E] px-4 py-2 rounded text-sm hover:bg-[#A8844A] transition font-bold"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0E0E0E] shadow-lg border border-[#A8844A]/50 
                       flex items-center justify-center hover:scale-105 transition cursor-pointer"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              style={{ filter: "sepia(100%) saturate(300%) hue-rotate(5deg)" }}
            />
          </button>
        </div>
      )}
    </>
  );
}