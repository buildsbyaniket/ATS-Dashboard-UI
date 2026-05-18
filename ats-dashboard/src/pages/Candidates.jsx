import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import CandidateCard from "../components/cards/CandidateCard";
import SearchBar from "../components/ui/SearchBar";

import candidates from "../data/candidates";

import {
  FaUsers,
  FaUserCheck,
  FaClock,
  FaTimes,
} from "react-icons/fa";

function Candidates() {
  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredCandidates = candidates.filter(
    (candidate) => {
      const searchMatch = candidate.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const statusMatch =
        status === "All" ||
        candidate.status === status;

      return searchMatch && statusMatch;
    }
  );

  const stats = [
    {
      title: "Total Candidates",
      value: candidates.length,
      icon: <FaUsers />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Selected",
      value: candidates.filter(
        (item) => item.status === "Selected"
      ).length,
      icon: <FaUserCheck />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Interview",
      value: candidates.filter(
        (item) => item.status === "Interview"
      ).length,
      icon: <FaClock />,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Rejected",
      value: candidates.filter(
        (item) => item.status === "Rejected"
      ).length,
      icon: <FaTimes />,
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020817] flex">
      
      {/* SIDEBAR */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* MAIN */}
      <div
        className="
          flex-1
          overflow-x-hidden
          lg:ml-[270px]
        "
      >
        {/* NAVBAR */}
        <Navbar setIsOpen={setIsOpen} />

        {/* PAGE CONTENT */}
        <div className="p-4 md:p-6 lg:p-8">
          
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-black text-white">
              Candidates
            </h1>

            <p className="text-slate-400 mt-3 text-sm md:text-lg">
              Manage and track all applicants
            </p>
          </div>

          {/* STATS */}
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
            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  bg-[#081028]
                  border
                  border-white/[0.05]
                  rounded-3xl
                  p-6
                "
              >
                <div
                  className={`
                    absolute
                    top-0
                    right-0
                    w-32
                    h-32
                    rounded-full
                    blur-3xl
                    opacity-20
                    bg-gradient-to-br
                    ${item.color}
                  `}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">
                      {item.title}
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
                      {item.value}
                    </h2>
                  </div>

                  <div
                    className={`
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.color}
                      flex
                      items-center
                      justify-center
                      text-white
                      text-2xl
                    `}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FILTER */}
          <div
            className="
              bg-[#081028]
              border
              border-white/[0.05]
              rounded-3xl
              p-4
              mb-8
              flex
              flex-col
              xl:flex-row
              gap-4
            "
          >
            <div className="flex-1">
              <SearchBar
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="
                h-14
                px-5
                rounded-2xl
                bg-[#020817]
                border
                border-white/[0.05]
                text-white
                outline-none
                min-w-[220px]
              "
            >
              <option>All</option>
              <option>Selected</option>
              <option>Interview</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              2xl:grid-cols-3
              gap-6
            "
          >
            {filteredCandidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidates;