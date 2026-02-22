"use client";

import { useEffect, useState } from "react";

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = (e) => {
      e.preventDefault();

      // Prevent showing multiple times
      if (sessionStorage.getItem("pwaPromptShown")) return;

      setDeferredPrompt(e);
      setShowPopup(true);
      sessionStorage.setItem("pwaPromptShown", "true");
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("App Installed");
    }

    setDeferredPrompt(null);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full text-center relative">
        
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-2">
          Install Bal Niketan App
        </h2>

        <p className="text-gray-600 mb-4 text-sm">
          Get quick access to school updates, notices and announcements directly from your home screen.
        </p>

        <button
          onClick={handleInstall}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full"
        >
          Install Now
        </button>
      </div>
    </div>
  );
}