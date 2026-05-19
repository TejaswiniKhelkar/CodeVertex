"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  MapPin,
  Hospital,
  LayoutDashboard,
  Radar,
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
    description: "Get AI-powered emergency guidance in critical situations.",
  },
  {
    icon: MapPin,
    title: "Live Location Tracking",
    description: "Share real-time location with emergency responders.",
  },
  {
    icon: Hospital,
    title: "Nearby Hospitals",
    description: "Find nearby hospitals, police stations, and fire services.",
  },
  {
    icon: LayoutDashboard,
    title: "Emergency Dashboard",
    description: "Monitor all SOS alerts in a centralized dashboard.",
  },
  {
    icon: Radar,
    title: "Accident Detection",
    description: "Detect accidents automatically using phone sensors.",
  },
];

export default function Home() {
  const handleSOS = () => {
    alert("🚨 Emergency SOS Activated!");
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-900/20 via-black to-black -z-10" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-500">ResQAI</h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#home" className="hover:text-red-500">
              Home
            </a>
            <a href="#features" className="hover:text-red-500">
              Features
            </a>
            <a href="#dashboard" className="hover:text-red-500">
              Dashboard
            </a>
          </div>

          <button
            onClick={handleSOS}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold shadow-lg shadow-red-500/40"
          >
            SOS
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-40 pb-28 px-6 text-center max-w-6xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          Fast AI-driven emergency support with live tracking, SOS alerts,
          nearby emergency services, and accident detection.
        </motion.p>

        {/* SOS Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSOS}
          className="mt-10 px-12 py-6 bg-red-600 rounded-2xl text-2xl font-bold shadow-[0_0_40px_rgba(239,68,68,0.7)] hover:bg-red-700 transition"
        >
          🚨 ACTIVATE SOS
        </motion.button>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Emergency Features
          </h2>
          <p className="text-gray-400">
            Everything needed for rapid emergency response.
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

      {/* Dashboard Preview */}
      <section
        id="dashboard"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Emergency Dashboard
          </h2>

          <p className="text-gray-400 text-center mb-10">
            Monitor live incidents and emergency requests.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
              <h3 className="text-red-400 mb-2">Emergency Type</h3>
              <p className="text-xl font-semibold">Road Accident</p>
            </div>

            <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
              <h3 className="text-red-400 mb-2">Location</h3>
              <p className="text-xl font-semibold">Pune Highway</p>
            </div>

            <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
              <h3 className="text-red-400 mb-2">Status</h3>
              <p className="text-xl font-semibold text-green-400">
                Responders Assigned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        <p>© 2026 ResQAI — AI Emergency Response Platform</p>
      </footer>
    </main>
  );
}