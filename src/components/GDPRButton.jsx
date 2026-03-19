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
                         shadow-lg z-50 bg-[#08060F] border border-[#7C2FC0]/30 transition-colors">
          <p className="text-sm mb-2 text-center text-white">
            We use cookies to improve your experience.{" "}
          </p>
          <p className="mb-3 text-center">
            <Link
              to="/privacy"
              className="underline text-[#7C2FC0] hover:text-[#FFB800]"
            >
              See our Privacy Policy
            </Link>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="bg-[#08060F] text-[#B8C0CC] border border-white/10 px-4 py-2 rounded text-sm hover:bg-white/5 transition"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="bg-[#FF6D00] text-[#08060F] px-4 py-2 rounded text-sm hover:bg-[#FFB800] transition font-bold"
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
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#08060F] shadow-lg border border-[#7C2FC0]/50 
                       flex items-center justify-center hover:scale-105 transition cursor-pointer"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
}