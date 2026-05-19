"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  MapPin,
  Hospital,
  LayoutDashboard,
  Radar,
  X,
  Clock,
  Navigation,
  CheckCircle,
  CarFront,
  UserCheck,
  Send,
} from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "Smart SOS Alerts",
    description: "Send emergency alerts instantly with one tap.",
  },
  {
    icon: Bot,
    title: "AI Emergency Assistant",
    description: "AI-powered emergency guidance during critical situations.",
  },
  {
    icon: MapPin,
    title: "Live Location Tracking",
    description: "Share your live location with responders.",
  },
  {
    icon: Hospital,
    title: "Nearby Hospitals",
    description: "Find nearby hospitals and emergency services.",
  },
  {
    icon: LayoutDashboard,
    title: "Emergency Dashboard",
    description: "Monitor incoming emergency alerts live.",
  },
  {
    icon: Radar,
    title: "Accident Detection",
    description: "Detect accidents automatically using phone sensors.",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emergencyType, setEmergencyType] = useState("Accident");
  const [alertSent, setAlertSent] = useState(false);

  // Accident Detection States
  const [accidentModal, setAccidentModal] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [safeMessage, setSafeMessage] = useState("");
  const [autoAlert, setAutoAlert] = useState(false);

  const currentTime = new Date().toLocaleString();

  const fakeLocation = {
    lat: "18.5204",
    lng: "73.8567",
  };

  // Countdown Logic
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (accidentModal && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    if (countdown === 0 && accidentModal) {
      setAutoAlert(true);
    }

    return () => clearTimeout(timer);
  }, [countdown, accidentModal]);

  const handleSendAlert = () => {
    setAlertSent(true);
  };

  const handleSafe = () => {
    setSafeMessage("Emergency cancelled successfully");
    setTimeout(() => {
      setAccidentModal(false);
      setCountdown(10);
      setSafeMessage("");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>

        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-700/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-500">
            ResQAI
          </h1>

          <button
            onClick={() => {
              setAlertSent(false);
              setIsModalOpen(true);
            }}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold shadow-lg shadow-red-500/40"
          >
            SOS
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-28 px-6 text-center max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent"
        >
          AI-Powered Emergency
          <br />
          Response Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Fast AI-driven emergency support with SOS alerts,
          live location tracking, and nearby emergency services.
        </motion.p>

        {/* SOS BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setAlertSent(false);
            setIsModalOpen(true);
          }}
          className="mt-10 px-12 py-6 bg-red-600 rounded-2xl text-2xl font-bold shadow-[0_0_40px_rgba(239,68,68,0.7)] hover:bg-red-700 transition"
        >
          🚨 ACTIVATE SOS
        </motion.button>

        {/* Accident Detection Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setCountdown(10);
            setAutoAlert(false);
            setAccidentModal(true);
          }}
          className="mt-6 px-8 py-4 bg-black border border-red-500 text-red-400 rounded-2xl font-semibold shadow-lg shadow-red-500/20"
        >
          🚗 Simulate Accident Detection
        </motion.button>
      </section>

      {/* Features */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Emergency Features
          </h2>

          <p className="text-gray-400">
            Powerful AI-based emergency response tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/40 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                  <Icon className="text-red-500" size={28} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 relative z-10">
        <p>© 2026 ResQAI — AI Emergency Response Platform</p>
      </footer>

      {/* SOS Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-md bg-zinc-900 border border-red-500/30 rounded-3xl p-6 shadow-2xl shadow-red-500/30"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <AlertTriangle className="text-red-500" />
                  Emergency Detected
                </h2>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X />
                </button>
              </div>

              {/* Time */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <Clock size={16} />
                  Current Time
                </div>

                <p className="text-sm text-gray-300">
                  {currentTime}
                </p>
              </div>

              {/* Location */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <Navigation size={16} />
                  Live Location
                </div>

                <p className="text-sm text-gray-300">
                  {fakeLocation.lat}, {fakeLocation.lng}
                </p>
              </div>

              {/* Dropdown */}
              <div className="mb-6">
                <label className="block mb-2 text-gray-300">
                  Emergency Type
                </label>

                <select
                  value={emergencyType}
                  onChange={(e) =>
                    setEmergencyType(e.target.value)
                  }
                  className="w-full bg-black border border-red-500/30 rounded-xl p-3 text-white"
                >
                  <option>Accident</option>
                  <option>Medical</option>
                  <option>Fire</option>
                  <option>Women Safety</option>
                </select>
              </div>

              {/* Success */}
              {alertSent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4 bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 flex items-center gap-2"
                >
                  <CheckCircle size={18} />
                  Emergency Alert Sent Successfully
                </motion.div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={handleSendAlert}
                  className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
                >
                  Send Alert
                </button>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-xl font-semibold border border-white/10"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accident Detection Modal */}
      <AnimatePresence>
        {accidentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-md bg-zinc-900 border border-red-500 rounded-3xl p-6 shadow-2xl shadow-red-500/40"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-red-500/20 flex items-center justify-center mb-6 animate-pulse">
                  <CarFront className="text-red-500" size={40} />
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  Possible Accident Detected
                </h2>

                <p className="text-gray-400 mb-6">
                  Are you safe?
                </p>

                {/* Countdown */}
                <div className="text-6xl font-bold text-red-500 mb-6">
                  {countdown}
                </div>

                {/* Auto Alert */}
                {autoAlert && (
                  <div className="mb-4 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400">
                    🚨 Emergency Alert Sent Automatically
                  </div>
                )}

                {/* Safe Message */}
                {safeMessage && (
                  <div className="mb-4 bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400">
                    {safeMessage}
                  </div>
                )}

                {/* Details */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-left mb-6">
                  <p className="text-sm text-gray-300 mb-2">
                    📍 GPS: {fakeLocation.lat},{" "}
                    {fakeLocation.lng}
                  </p>

                  <p className="text-sm text-gray-300 mb-2">
                    🏥 Nearby hospital notified
                  </p>

                  <p className="text-sm text-gray-300">
                    👮 Nearby police alerted
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleSafe}
                    className="bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <UserCheck size={18} />
                    I'm Safe
                  </button>

                  <button
                    onClick={() => {
                      setAutoAlert(true);
                    }}
                    className="bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Emergency Alert
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}