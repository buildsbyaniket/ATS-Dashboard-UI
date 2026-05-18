import React, { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Mon",
    score: 40,
  },
  {
    name: "Tue",
    score: 65,
  },
  {
    name: "Wed",
    score: 80,
  },
  {
    name: "Thu",
    score: 55,
  },
  {
    name: "Fri",
    score: 95,
  },
];

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-[#050b1e] min-h-screen">
      
      {/* SIDEBAR */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* MAIN CONTENT */}
      <div
        className="
        flex-1
        min-h-screen
        p-4
        md:p-6
        text-white
        overflow-y-auto
        lg:ml-[280px]
      "
      >
        {/* NAVBAR */}
        <Navbar setIsOpen={setIsOpen} />

        {/* TOP */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
          mb-8
        "
        >
          {/* LEFT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Welcome back, Admin 👋
            </p>
          </div>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search..."
            className="
            bg-white/[0.05]
            border
            border-white/10
            rounded-2xl
            px-5
            py-3
            outline-none
            w-full
            lg:w-[320px]
            text-white
            placeholder:text-slate-500
            focus:border-indigo-500
          "
          />
        </div>

        {/* SUMMARY CARDS */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-8
        "
        >
          {[
            {
              title: "Total Jobs",
              value: 24,
            },
            {
              title: "Candidates",
              value: 140,
            },
            {
              title: "Selected",
              value: 45,
            },
            {
              title: "Rejected",
              value: 12,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
              bg-white/[0.04]
              border
              border-white/10
              rounded-3xl
              p-6
              hover:border-indigo-500/50
              transition-all
              duration-300
              hover:-translate-y-1
            "
            >
              <p className="text-slate-400 text-sm mb-3">
                {item.title}
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* CHART + CANDIDATES */}
        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
        >
          {/* CHART */}
          <div
            className="
            bg-white/[0.04]
            border
            border-white/10
            rounded-3xl
            p-6
            h-[380px]
          "
          >
            <h2 className="text-2xl font-semibold mb-6">
              Candidate Analytics
            </h2>

            <div className="w-full h-[280px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <BarChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                  />

                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                  />

                  <YAxis stroke="#94a3b8" />

                  <Tooltip />

                  <Bar
                    dataKey="score"
                    fill="#6366f1"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* TOP CANDIDATES */}
          <div
            className="
            bg-white/[0.04]
            border
            border-white/10
            rounded-3xl
            p-6
          "
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">
                Top Candidates
              </h2>

              <button
                className="
                px-4
                py-2
                rounded-xl
                bg-indigo-500
                hover:bg-indigo-600
                transition-all
              "
              >
                View All
              </button>
            </div>

            <div className="space-y-5">
              {[
                {
                  name: "Aniket Dev",
                  role: "Frontend Developer",
                  score: "92%",
                },
                {
                  name: "Rahul Sharma",
                  role: "Backend Developer",
                  score: "85%",
                },
                {
                  name: "Priya Patil",
                  role: "UI/UX Designer",
                  score: "80%",
                },
              ].map((candidate, index) => (
                <div
                  key={index}
                  className="
                  flex
                  items-center
                  justify-between
                  bg-white/[0.03]
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                "
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`https://i.pravatar.cc/150?img=${
                        index + 10
                      }`}
                      alt=""
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      object-cover
                    "
                    />

                    <div>
                      <h3 className="font-semibold text-lg">
                        {candidate.name}
                      </h3>

                      <p className="text-slate-400 text-sm mt-1">
                        {candidate.role}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                    px-4
                    py-2
                    rounded-xl
                    bg-indigo-500/20
                    text-indigo-400
                    font-semibold
                  "
                  >
                    {candidate.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;