"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  MapPin,
  Hospital,
  LayoutDashboard,
  Radar,
  BellRing,
  Users,
  Building2,
  Heart,
  ChevronRight,
  Phone,
  Globe,
  CheckCircle,
  Clock,
  Navigation,
  Flame,
  Shield,
  Car,
  Activity,
  CarFront,
  UserCheck,
  Send,
  Building,
  Radio,
  ShieldCheck,
  Mic,
  Volume2,
  X,
} from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertSent, setAlertSent] = useState(false);
  const [emergencyType, setEmergencyType] = useState("Accident");

  const [countdown, setCountdown] = useState(10);
  const [isAccidentModalOpen, setIsAccidentModalOpen] =
    useState(false);

  const [liveTime, setLiveTime] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [detectedCommand, setDetectedCommand] =
    useState("");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const coordinates = {
    lat: "18.5204",
    lng: "73.8567",
  };

  // LIVE CLOCK
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTime(
        new Date().toLocaleTimeString()
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ACCIDENT TIMER
  useEffect(() => {
    if (
      isAccidentModalOpen &&
      countdown > 0
    ) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (
      countdown === 0 &&
      isAccidentModalOpen
    ) {
      setIsAccidentModalOpen(false);
      setIsModalOpen(true);
      setAlertSent(true);
    }
  }, [
    countdown,
    isAccidentModalOpen,
  ]);

  // VOICE COMMAND
  const startListening = () => {
    setIsListening(true);
    setDetectedCommand("");

    timeoutRef.current = setTimeout(() => {
      setIsListening(false);

      const commands = [
        "Help me",
        "Accident detected",
        "Call ambulance",
        "Women safety alert",
      ];

      const random =
        commands[
          Math.floor(
            Math.random() *
              commands.length
          )
        ];

      setDetectedCommand(random);

      setTimeout(() => {
        setIsModalOpen(true);
        setAlertSent(true);
      }, 1000);
    }, 3000);
  };

  const features = [
    {
      icon: BellRing,
      title: "Smart SOS Alerts",
      desc: "AI emergency alerts in real-time.",
    },
    {
      icon: Bot,
      title: "AI Assistant",
      desc: "Instant emergency guidance.",
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      desc: "Share your location instantly.",
    },
    {
      icon: Hospital,
      title: "Nearby Hospitals",
      desc: "Locate nearest hospitals.",
    },
    {
      icon: LayoutDashboard,
      title: "Emergency Dashboard",
      desc: "Monitor incidents live.",
    },
    {
      icon: Radar,
      title: "Accident Detection",
      desc: "AI-powered crash detection.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>

        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-700/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
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

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 text-center relative z-10">
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent"
        >
          AI Emergency
          <br />
          Response Platform
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          AI-powered emergency response
          with SOS alerts, accident
          detection and voice emergency
          commands.
        </p>

        {/* SOS BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setAlertSent(false);
            setIsModalOpen(true);
          }}
          className="mt-10 px-12 py-6 bg-red-600 rounded-2xl text-2xl font-bold shadow-[0_0_40px_rgba(239,68,68,0.7)]"
        >
          🚨 ACTIVATE SOS
        </motion.button>

        {/* ACCIDENT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setCountdown(10);
            setIsAccidentModalOpen(true);
          }}
          className="mt-6 block mx-auto px-8 py-4 bg-black border border-red-500 text-red-400 rounded-2xl font-semibold"
        >
          🚗 Simulate Accident
          Detection
        </motion.button>
      </section>

      {/* LIVE TRACKING */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Live Emergency Tracking
            </h2>

            <p className="text-gray-400 mt-4">
              Real-time emergency
              monitoring system
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT */}
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <Navigation className="text-red-500" />
                    Live GPS
                  </h3>

                  <div className="relative">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                <p className="text-red-400 text-xl font-mono">
                  {coordinates.lat},{" "}
                  {coordinates.lng}
                </p>

                <p className="text-gray-400 mt-4">
                  Last updated:
                  {" "}
                  {liveTime}
                </p>
              </div>

              {/* STATUS CARDS */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-center">
                  <Hospital className="mx-auto text-red-400 mb-3" />

                  <h4 className="font-semibold">
                    Hospital Notified
                  </h4>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-center">
                  <ShieldCheck className="mx-auto text-red-400 mb-3" />

                  <h4 className="font-semibold">
                    Police Alerted
                  </h4>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 text-center">
                  <Users className="mx-auto text-red-400 mb-3" />

                  <h4 className="font-semibold">
                    Contacts Informed
                  </h4>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Activity className="text-red-500" />
                Emergency Activity Feed
              </h3>

              <div className="space-y-4">
                {[
                  "AI detected possible accident",
                  "Location shared with responders",
                  "Nearest hospital notified",
                  "Police dispatch alerted",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-black/40 border border-white/10 rounded-2xl p-4 flex items-center gap-4"
                  >
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

                    <p className="text-gray-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOICE ASSISTANT */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Voice Emergency Assistant
          </h2>

          <p className="text-gray-400 mb-12">
            Trigger emergency response
            using voice commands.
          </p>

          {/* MIC */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={startListening}
            className="relative w-32 h-32 rounded-full bg-red-600 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(239,68,68,0.7)]"
          >
            <Mic size={50} />

            {isListening && (
              <>
                <span className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping"></span>

                <span className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping opacity-50"></span>
              </>
            )}
          </motion.button>

          {isListening && (
            <p className="mt-6 text-red-400 font-semibold animate-pulse">
              Listening...
            </p>
          )}

          {detectedCommand && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-8 bg-white/5 border border-red-500/20 rounded-3xl p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center gap-2 text-red-400 mb-3">
                <Volume2 />
                Detected Command
              </div>

              <p className="text-2xl font-bold">
                "{detectedCommand}"
              </p>

              <p className="text-gray-400 mt-4">
                AI detected emergency
                voice command and alerted
                nearby responders.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Emergency Features
            </h2>

            <p className="text-gray-400">
              Advanced AI emergency tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(
              (feature, index) => {
                const Icon =
                  feature.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                    }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
                  >
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                      <Icon className="text-red-500" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 relative z-10">
        <p>
          © 2026 ResQAI — AI Emergency
          Response Platform
        </p>
      </footer>

      {/* SOS MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{
                scale: 0.8,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.8,
              }}
              className="w-full max-w-md bg-zinc-900 border border-red-500/30 rounded-3xl p-6 shadow-2xl shadow-red-500/30"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <AlertTriangle className="text-red-500" />
                  Emergency Detected
                </h2>

                <button
                  onClick={() =>
                    setIsModalOpen(false)
                  }
                >
                  <X />
                </button>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <Clock size={16} />
                  Current Time
                </div>

                <p className="text-sm text-gray-300">
                  {new Date().toLocaleString()}
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <Navigation size={16} />
                  Live Location
                </div>

                <p className="text-sm text-gray-300">
                  {coordinates.lat},{" "}
                  {coordinates.lng}
                </p>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-gray-300">
                  Emergency Type
                </label>

                <select
                  value={emergencyType}
                  onChange={(e) =>
                    setEmergencyType(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-red-500/30 rounded-xl p-3 text-white"
                >
                  <option>
                    Accident
                  </option>
                  <option>
                    Medical
                  </option>
                  <option>Fire</option>
                  <option>
                    Women Safety
                  </option>
                </select>
              </div>

              {alertSent && (
                <div className="mb-4 bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 flex items-center gap-2">
                  <CheckCircle size={18} />
                  Emergency Alert Sent
                  Successfully
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() =>
                    setAlertSent(true)
                  }
                  className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
                >
                  Send Alert
                </button>

                <button
                  onClick={() =>
                    setIsModalOpen(false)
                  }
                  className="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-xl font-semibold"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ACCIDENT MODAL */}
      <AnimatePresence>
        {isAccidentModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{
                scale: 0.8,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.8,
              }}
              className="w-full max-w-md bg-zinc-900 border border-red-500 rounded-3xl p-6 shadow-2xl shadow-red-500/40"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-red-500/20 flex items-center justify-center mb-6 animate-pulse">
                  <CarFront className="text-red-500" size={40} />
                </div>

                <h2 className="text-2xl font-bold mb-2">
                  Possible Accident
                  Detected
                </h2>

                <p className="text-gray-400 mb-6">
                  Are you safe?
                </p>

                <div className="text-6xl font-bold text-red-500 mb-6">
                  {countdown}
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() =>
                      setIsAccidentModalOpen(
                        false
                      )
                    }
                    className="bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold"
                  >
                    I'm Safe
                  </button>

                  <button
                    onClick={() => {
                      setIsAccidentModalOpen(
                        false
                      );

                      setIsModalOpen(true);

                      setAlertSent(true);
                    }}
                    className="bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
                  >
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