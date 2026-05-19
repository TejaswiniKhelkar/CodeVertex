"use client";

import { useState } from "react";

export default function Home() {
  const [emergency, setEmergency] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white p-6">

      {/* Navbar */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-red-500">
          ResQAI
        </h1>

        <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Emergency Support
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Emergency Card */}
        <div className="lg:col-span-2 bg-zinc-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            AI Emergency Response
          </h2>

          <p className="text-gray-400 mb-6">
            Instantly trigger emergency assistance and notify nearby services.
          </p>

          <button
            onClick={() => setEmergency(true)}
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl text-lg font-semibold"
          >
            🚨 Trigger SOS
          </button>

          {emergency && (
            <div className="mt-6 bg-red-500/20 border border-red-500 p-4 rounded-xl">
              <h3 className="text-red-400 text-xl font-bold">
                Emergency Activated
              </h3>

              <p className="text-gray-300 mt-2">
                AI is notifying hospitals, police, and rescue teams.
              </p>
            </div>
          )}
        </div>

        {/* Alert Feed */}
        <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Live Alerts
          </h2>

          <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-lg">
              🚑 Ambulance dispatched
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg">
              📍 GPS location tracked
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg">
              👮 Police notified
            </div>
          </div>
        </div>
      </div>

      {/* Live Map Section */}
      <div className="mt-8 bg-zinc-900 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Live Emergency Map
        </h2>

        <div className="h-[400px] rounded-xl bg-zinc-800 flex items-center justify-center text-gray-400">
          Map Integration Here
        </div>
      </div>
    </main>
  );
}